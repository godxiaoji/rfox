import classNames from 'classnames'
import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import type { ToastEmits, ToastProps } from './types'
import { getBoxClasses } from './util'
import type { FRVFC } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import { ActivityIndicator } from '../ActivityIndicator'
import { Icon } from '../Icon'
import CheckOutlined from '../Icon/icons/CheckOutlined'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { useDelay } from '../hooks/use-delay'
import type { PopupRef } from '../popup/types'

const FxToast: FRVFC<PopupRef, ToastProps & ToastEmits> = (props, ref) => {
  const { addDelayTask, removeDelayTask } = useDelay(() => {
    customCancel('auto', true)
  }, props.duration)

  const { popupStyles, popupClasses, customCancel } = usePopup(props, ref, {
    afterHide: removeDelayTask,
    afterShow: addDelayTask,
    initialForbidScroll: false
  })

  const classes = classNames([
    'fx-toast',
    { 'forbid-click': !!props.showMask },
    popupClasses
  ])

  const boxClasses = classNames(getBoxClasses(props))

  function renderIcon() {
    let icon = <></>

    switch (props.type) {
      case 'loading':
        icon = (
          <ActivityIndicator
            className="fx-toast_icon"
            size="21"
            color="#ffffff"
          />
        )
        break
      case 'success':
        icon = <Icon className="fx-toast_icon" icon={CheckOutlined} />
        break
      case 'fail':
        icon = <Icon className="fx-toast_icon" icon={CloseOutlined} />
        break
      default:
        if (props.icon) {
          icon = <Icon className="fx-toast_icon" icon={props.icon} />
        }
        break
    }

    return icon
  }

  return createPortal(
    <div className={classes} style={popupStyles}>
      <div className={boxClasses}>
        {renderIcon()}
        <div className="fx-toast_text">{props.title}</div>
      </div>
    </div>,
    document.body
  )
}

export default forwardRef(FxToast)
