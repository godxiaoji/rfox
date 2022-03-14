import { createContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { isObject, objectForEach } from '../helpers/util'
import { getCallbackFns } from '../apis/callback'
import type { AnyObject, EmptyObject, FC } from '../helpers/types'
import type { PopupCustomCancel } from './types'
import type { ApiOptionsComplete, ApiOptionsFail } from '../apis/types'
import Exception from '../helpers/exception'

type ApiFC = FC<any>

type CreatePopupHook = (
  done: (res: any) => void
) => (hookEvent: string, args: any) => void

interface PopupBridge {
  in?: (key: string, value?: any) => void
  out?: (key: 'customCancel', value: PopupCustomCancel) => void
}

interface ComponentRef {
  uid: HTMLDivElement
  fns: {
    customCancel?: PopupCustomCancel
  }
}

export const ApiContext = createContext<PopupBridge>({})

function withComponent(
  WrappedComponent: ApiFC,
  options: AnyObject,
  bridge: PopupBridge
): FC {
  return function () {
    const props: AnyObject = {}

    objectForEach(options, (v, k) => {
      if (!['success', 'fail', 'complete'].includes(k)) {
        if (k === 'mode') {
          props.initialMode = v
        } else if (k === 'value') {
          props.modelValue = v
        } else {
          props[k] = v
        }
      }
    })

    const [visible] = useState(true)

    return (
      <ApiContext.Provider value={bridge}>
        <WrappedComponent {...props} visible={visible} />
      </ApiContext.Provider>
    )
  }
}

const $refs: {
  [propName: string]: ComponentRef
} = {}

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

        const hook = createHook(function (res) {
          success(res)
          complete()
          resolve(res)
        })

        singleMode && clear(key)

        const wrapper = document.createElement('div')

        const $ref: ComponentRef = {
          uid: wrapper,
          fns: {}
        }

        const bridge: PopupBridge = {
          in(hookEvent, res) {
            if (
              hookEvent === 'onVisibleStateChange' &&
              res.state === 'hidden'
            ) {
              ReactDOM.unmountComponentAtNode(wrapper)
              singleMode && remove(key, $ref.uid)
            }

            hook && hook(hookEvent, res)
          },
          out(key, value) {
            $ref.fns[key] = value
          }
        }

        const ApiComponent = withComponent(component, options, bridge)

        ReactDOM.render(<ApiComponent />, wrapper)

        // 单例：如Toast
        singleMode && ($refs[key] = $ref)
      } catch (e) {
        fail(new Exception(e))
        complete()
        reject(new Exception(e))
      }
    })
  }
}

function clear(key: string) {
  if ($refs[key]) {
    const fns = $refs[key].fns
    fns.customCancel && fns.customCancel('clear', true)

    delete $refs[key]
  }
}

function remove(key: string, uid: HTMLDivElement) {
  if ($refs[key] && $refs[key].uid === uid) {
    delete $refs[key]
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
