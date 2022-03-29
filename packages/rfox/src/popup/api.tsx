import type { RefObject } from 'react'
import { useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { isObject, objectForEach } from '../helpers/util'
import { getCallbackFns } from '../apis/callback'
import type { AnyObject, EmptyObject, FC } from '../helpers/types'
import type {
  OnVisibleStateChange,
  PopupCustomConfirm,
  PopupRef,
  OnCancel
} from './types'
import type { ApiOptionsComplete, ApiOptionsFail } from '../apis/types'
import Exception from '../helpers/exception'

type ApiFC = any

type PopupHook = (hookEvent: string, args: any) => void

type CreatePopupHook = (done: (res: any) => void) => PopupHook

type ComponentRef = {
  uid: HTMLDivElement
  ref?: RefObject<PopupRef>
}

const $refs: {
  [propName: string]: ComponentRef[]
} = {}

function withComponent(
  WrappedComponent: ApiFC,
  options: AnyObject,
  hook: PopupHook,
  ref: ComponentRef
): FC {
  return function () {
    const props: AnyObject = {}

    objectForEach(options, (v, k) => {
      if (!['success', 'fail', 'complete'].includes(k)) {
        if (k === 'mode') {
          props.initialMode = v
        } else {
          props[k] = v
        }
      }
    })

    const [visible, setVisible] = useState(true)
    const popupRef = useRef<PopupRef>(null)

    const onVisibleStateChange: OnVisibleStateChange = res => {
      hook('onVisibleStateChange', res)
    }

    const onConfirm: PopupCustomConfirm = res => {
      hook('onConfirm', res)
    }

    const onCancel: OnCancel = res => {
      hook('onCancel', res)
    }

    ref.ref = popupRef

    return (
      <WrappedComponent
        {...props}
        ref={popupRef}
        visible={visible}
        onUpdateVisible={(v: boolean) => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    )
  }
}

export function createShowPopup<T, E = EmptyObject>({
  apiName,
  createHook,
  component,
  singleMode,
  hookOptions
}: {
  apiName: string
  createHook: CreatePopupHook
  component: ApiFC
  singleMode?: boolean
  hookOptions?: (options: AnyObject) => AnyObject
}) {
  return function show(
    object: T &
      Partial<{
        success: (res: E) => void
        fail: ApiOptionsFail
        complete: ApiOptionsComplete
      }>
  ) {
    let options: AnyObject

    if (typeof object === 'string') {
      options = {
        title: object
      }
    } else if (!isObject(object)) {
      options = {}
    } else {
      options = object as AnyObject
    }

    if (hookOptions) {
      options = hookOptions(options)
    }

    const { success, fail, complete } = getCallbackFns(options)

    return new Promise<E>(function (resolve, reject) {
      try {
        const key = apiName.replace('show', '')

        // 单例就清除之前的
        singleMode && clear(key)

        // 组件hook
        const hook = createHook(function (res) {
          success(res)
          complete()
          resolve(res)
        })

        const wrapper = document.createElement('div')

        // 缓存起来方便实时关闭
        let refs = $refs[key]
        if (!refs) {
          refs = $refs[key] = []
        }
        const ref: ComponentRef = { uid: wrapper }
        refs.push(ref)

        const ApiComponent = withComponent(
          component,
          options,
          (hookEvent, args) => {
            // 全局关闭hook
            if (
              hookEvent === 'onVisibleStateChange' &&
              args.state === 'hidden'
            ) {
              ReactDOM.unmountComponentAtNode(wrapper)
              remove(key, ref)
            }

            hook(hookEvent, args)
          },
          ref
        )

        ReactDOM.render(<ApiComponent />, wrapper)
      } catch (e) {
        fail(new Exception(e))
        complete()
        reject(new Exception(e))
      }
    })
  }
}

/**
 * 清除所有未销毁组件
 * @param key 方法名
 */
function clear(key: string) {
  if ($refs[key]) {
    $refs[key].forEach(v => {
      // 调用未销毁的每个组件取消方法
      v.ref?.current?.customCancel('clear', true)
    })
  }
}

/**
 * 把组件ref从缓存清理掉
 * @param key 方法名
 * @param ref 组件ref
 */
function remove(key: string, ref: ComponentRef) {
  if ($refs[key]) {
    $refs[key].splice($refs[key].indexOf(ref), 1)
  }
}

type HideOptions = Partial<{
  success: (res: EmptyObject) => void
  fail: ApiOptionsFail
  complete: ApiOptionsComplete
}>

export function createHidePopup({ apiName }: { apiName: string }) {
  return function hide(object?: HideOptions) {
    const { success, fail, complete } = getCallbackFns(
      isObject(object) ? (object as HideOptions) : {}
    )

    return new Promise<EmptyObject>((resolve, reject) => {
      try {
        clear(apiName.replace('hide', ''))

        success({})
        complete()
        resolve({})
      } catch (e) {
        fail(new Exception(e))
        complete()
        reject(new Exception(e))
      }
    })
  }
}

export const createConfirmHook: CreatePopupHook = done => {
  return (hookEvent, args) => {
    if (hookEvent === 'onCancel') {
      done({
        cancel: true,
        ...args
      })
    } else if (hookEvent === 'onConfirm') {
      done({
        confirm: true,
        detail: args
      })
    }
  }
}

export const createAlertHook: CreatePopupHook = done => {
  return (hookEvent, args) => {
    if (hookEvent === 'onVisibleStateChange' && args.state === 'shown') {
      done({})
    }
  }
}
