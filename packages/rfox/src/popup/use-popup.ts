import { addClassName, getScrollTop, removeClassName } from '../helpers/dom'
import type {
  VisibleState,
  PopupCustomCancel,
  PopupCustomConfirm,
  PopupProps,
  PopupEmits,
  PopupRef
} from './types'
import {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { getNewZIndex, getPopupStyles } from './util'
import type { Noop, OnClick } from '../helpers/types'
import { useBlur } from '../hooks/use-event'
import { capitalize } from '../helpers/util'

type LifeName =
  | 'afterConfirm'
  | 'afterCancel'
  | 'afterShow'
  | 'afterShown'
  | 'afterHide'
  | 'afterHidden'

type UseOptions = Partial<
  Record<LifeName, Noop> & {
    initialForbidScroll: boolean // 初始是否禁用滚动条
    initialEnableBlurCancel: boolean
  }
>

export function usePopup(
  props: PopupProps & PopupEmits,
  ref: ForwardedRef<PopupRef>,
  {
    initialEnableBlurCancel = false,
    initialForbidScroll = true,
    ...useOptions
  }: UseOptions
) {
  const [isShow, setIsShow] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [zIndex, setZIndex] = useState(0)
  const [absTop, setAbsTop] = useState<number | null>(null)

  const forbidScroll = useRef(initialForbidScroll)
  const enableBlurCancel = useRef(initialEnableBlurCancel)
  const showing = useRef(false)
  const hiding = useRef(true)
  const visibleTimer = useRef<number>()

  function clearVisibleTimer() {
    clearTimeout(visibleTimer.current)
  }

  function setForbidScroll(isForbid: boolean) {
    forbidScroll.current = isForbid
  }

  function setEnableBlurCancel(enable: boolean) {
    enableBlurCancel.current = enable
  }

  const onStopBlur: OnClick = e => {
    if (enableBlurCancel.current) {
      e.stopPropagation()
    }
  }

  function doShow() {
    if (showing.current) {
      return false
    }
    hiding.current = false
    showing.current = true

    clearVisibleTimer()

    // 如果禁止滚动
    if (forbidScroll.current) {
      addClassName(document.body, 'fx-overflow-hidden')
    } else {
      setAbsTop(getScrollTop())
    }

    setZIndex(getNewZIndex())
    setIsShow(true)

    visibleTimer.current = window.setTimeout(() => {
      setVisible2(true)
      emitVisibleState('show')

      visibleTimer.current = window.setTimeout(() => {
        showing.current = false
        emitVisibleState('shown')
      }, 210)
    }, 17)

    return true
  }

  function doHide() {
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

      visibleTimer.current = window.setTimeout(() => {
        hiding.current = false
        emitVisibleState('hidden')
      }, 17)
    }, 210)

    emitVisibleState('hide')

    return true
  }

  function emitVisibleState(state: VisibleState) {
    props.onVisibleStateChange && props.onVisibleStateChange({ state })

    const lifeName = `after${capitalize(state)}` as LifeName

    if (typeof useOptions[lifeName] === 'function') {
      ;(useOptions[lifeName] as Noop)()
    }
  }

  const customCancel: PopupCustomCancel = (key, focus = false) => {
    if (showing.current && !focus) {
      return
    }
    props.onCancel && props.onCancel({ source: key })
    updateVisible(false)
  }

  const customConfirm: PopupCustomConfirm = detail => {
    props.onConfirm && props.onConfirm(detail)
    updateVisible(false)
  }

  function onMaskClick() {
    if (props.maskClosable === false) {
      return
    }
    customCancel('maskClick')
  }

  function onCancelClick() {
    customCancel('cancelClick')
  }

  function onCloseClick() {
    customCancel('closeClick', true)
  }

  function updateVisible(visible: boolean) {
    props.onUpdateVisible && props.onUpdateVisible(visible)
  }

  const popupStyles = useMemo(
    () => getPopupStyles(zIndex, absTop, isShow),
    [zIndex, absTop, isShow]
  )
  const popupClasses = useMemo(
    () => ['fx-popup', { visible: visible2 }],
    [visible2]
  )

  useEffect(() => {
    props.visible ? doShow() : doHide()
  }, [props.visible])

  useEffect(() => clearVisibleTimer, [])

  useBlur(() => {
    if (enableBlurCancel.current && isShow) {
      customCancel('blur')
    }
  })

  useImperativeHandle(
    ref,
    () => ({
      customCancel,
      customConfirm,
      onCancelClick
    }),
    []
  )

  return {
    popupStyles,
    popupClasses,
    customConfirm,
    customCancel,
    onMaskClick,
    onCloseClick,
    onCancelClick,
    setForbidScroll,
    setEnableBlurCancel,
    onStopBlur
  }
}
