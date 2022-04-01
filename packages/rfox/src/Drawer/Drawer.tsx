import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { DrawerEmits, DrawerProps } from './types'
import type { FRFC, RenderProp } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import {
  getDrawerClass,
  getDrawerInnerClasses,
  getDrawerInnerStyles
} from './util'
import { NavBar } from '../NavBar'
import { useSafeAreaInsets } from '../hooks/use-safe-area-insets'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { forwardRef, useEffect } from 'react'
import type { PopupRef } from '../popup/types'

const FxDrawer: FRFC<
  PopupRef,
  DrawerProps &
    DrawerEmits & {
      renderHeader?: RenderProp
    }
> = ({ showMask = true, ...props }, ref) => {
  const {
    popupStyles,
    popupClasses,
    onMaskClick,
    onCloseClick,
    setEnableBlurCancel,
    onStopBlur
  } = usePopup(props, ref, {})
  const { safeAreaInsets } = useSafeAreaInsets(props.enableSafeAreaInsets)

  const hasHeader = !!(props.title || props.showClose || props.renderHeader)

  const classes = classNames([
    getDrawerClass(showMask),
    popupClasses,
    props.className
  ])
  const innerClasses = classNames(getDrawerInnerClasses(props, hasHeader))
  const innerStyles = getDrawerInnerStyles(props, safeAreaInsets)

  useEffect(() => {
    setEnableBlurCancel(!showMask)
  }, [showMask])

  return createPortal(
    <div className={classes} style={popupStyles}>
      {showMask ? <div className="fx-mask" onClick={onMaskClick}></div> : <></>}
      <div className={innerClasses} style={innerStyles} onClick={onStopBlur}>
        {props.renderHeader ? (
          props.renderHeader()
        ) : hasHeader ? (
          <NavBar
            className="fx-drawer_header"
            title={props.title}
            rightButtons={
              props.showClose ? [{ icon: CloseOutlined, text: 'close' }] : []
            }
            iconOnly
            onRightButtonClick={onCloseClick}
          ></NavBar>
        ) : (
          <></>
        )}
        <div className="fx-drawer_body">{props.children}</div>
      </div>
    </div>,
    document.body
  )
}

export default forwardRef(FxDrawer)
