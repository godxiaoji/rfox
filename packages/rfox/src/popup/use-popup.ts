import { addClassName, getScrollTop, removeClassName } from '../helpers/dom'
import { useBlur } from '../hooks/use-blur'
import type {
  VisibleState,
  PopupCustomCancel,
  PopupCustomConfirm,
  PopupProps,
  PopupEmits
} from './types'
import { useContext, useEffect, useRef, useState } from 'react'
import { getNewZIndex, getPopupStyles } from './util'
import type { Noop } from '../helpers/types'
import { UseEmitFn } from '../hooks/types'
import { ApiContext } from './api'

type LifeName = 'afterConfirm' | 'afterCancel' | 'afterShow' | 'afterHidden'

type UseOptions = Partial<
  Record<LifeName, Noop> & {
    forbidScroll: boolean
    enableUseBlur: boolean
  }
>

function useApiHook(emits: PopupEmits) {
  const api = useContext(ApiContext)

  const emitHook: UseEmitFn<Required<typeof emits>> = (event, res) => {
    const emit = emits[event]

    if (api.in) {
      api.in(event, res)
    } else if (emit) {
      emit(res as any)
    }
  }

  function cancelHook(customCancel: PopupCustomCancel) {
    api.out && api.out('customCancel', customCancel)
  }

  return {
    emitHook,
    cancelHook
  }
}

export function usePopup(
  props: PopupProps & PopupEmits,
  useOptions: UseOptions
) {
  const { emitHook, cancelHook } = useApiHook(props)
  // const isParent = inject<boolean>('fxPopupExtend', false)
  const [isShow, setIsShow] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [zIndex, setZIndex] = useState(0)
  const [absTop, setAbsTop] = useState<number | null>(null)

  const showing = useRef(false)
  const hiding = useRef(true)
  const visibleTimer = useRef<number>()

  const visibleBlur = useBlur(() => {
    customCancel('blur')
  })

  function clearVisibleTimer() {
    clearTimeout(visibleTimer.current)
  }

  function doShow(callback: () => void) {
    if (showing.current) {
      return false
    }
    hiding.current = false
    showing.current = true

    clearVisibleTimer()

    // 如果禁止滚动
    if (useOptions.forbidScroll !== false) {
      addClassName(document.body, 'fx-overflow-hidden')
    } else {
      setAbsTop(getScrollTop())
    }

    if (useOptions.enableUseBlur) {
      visibleBlur.addEvent()
    }

    setZIndex(getNewZIndex())
    setIsShow(true)

    visibleTimer.current = window.setTimeout(() => {
      setVisible2(true)

      visibleTimer.current = window.setTimeout(() => {
        showing.current = false
        callback()
      }, 210)
    }, 17)

    if (!props.visible) {
      emitHook('onUpdateVisible', true)
    }

    return true
  }

  function show() {
    const isSuccess = doShow(() => {
      emitVisibleState('shown')
    })

    if (isSuccess) {
      emitVisibleState('show')
      afterCall('afterShow')
    }
  }

  function _doHide(callback?: Noop) {
    if (hiding.current) {
      return false
    }
    hiding.current = true
    showing.current = false
    removeClassName(document.body, 'fx-overflow-hidden')
    setVisible2(false)

    clearVisibleTimer()
    visibleTimer.current = window.setTimeout(() => {
      setIsShow(false)
      setAbsTop(null)
      hiding.current = false

      callback && callback()
    }, 210)

    if (props.visible) {
      emitHook('onUpdateVisible', false)
    }

    return true
  }

  function hide(lifeName?: LifeName) {
    const isSuccess = _doHide(() => {
      emitVisibleState('hidden')
      afterCall('afterHidden')
    })

    if (isSuccess) {
      lifeName && afterCall(lifeName)
      emitVisibleState('hide')
    }

    visibleBlur.removeEvent()
  }

  function afterCall(lifeName: LifeName) {
    if (typeof useOptions[lifeName] === 'function') {
      ;(useOptions[lifeName] as () => void)()
    }
  }

  function emitVisibleState(state: VisibleState) {
    emitHook('onVisibleStateChange', {
      state
    })
  }

  const customCancel: PopupCustomCancel = (key, focus = false) => {
    if (showing.current && !focus) {
      return
    }
    emitHook('onCancel', { source: key })
    hide('afterCancel')
  }

  const customConfirm: PopupCustomConfirm = detail => {
    // emitHook('confirm', detail)
    hide('afterConfirm')
  }

  const popupStyles = getPopupStyles(zIndex, absTop, isShow)

  const popupClasses = ['fx-popup', { visible: visible2 }]

  useEffect(() => {
    props.visible ? show() : hide()
  }, [props.visible])

  useEffect(() => {
    return clearVisibleTimer
  }, [])

  cancelHook(customCancel)

  return {
    popupStyles,
    popupClasses,
    show,
    hide,
    customConfirm,
    customCancel,
    onMaskClick() {
      if (!props.maskClosable) {
        return
      }
      customCancel('maskClick')
    },
    onCloseClick() {
      customCancel('closeClick', true)
    },
    onCancelClick() {
      customCancel('cancelClick')
    }
  }
}
