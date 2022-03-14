import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { ToastEmits, ToastProps } from './types'
import { hasIcon } from './util'
import type { FC } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import { ActivityIndicator } from '../ActivityIndicator'
import { Icon } from '../Icon'
import CheckOutlined from '../Icon/icons/CheckOutlined'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { useDelay } from '../hooks/use-delay'
import { popupDefaultProps } from '../popup/props'

const FxToast: FC<ToastProps & ToastEmits> = props => {
  const { addDelayTask, removeDelayTask } = useDelay(() => {
    customCancel('auto', true)
  }, props.duration)

  const { popupStyles, popupClasses, customCancel } = usePopup(props, {
    forbidScroll: false,
    afterCancel: removeDelayTask,
    afterShow: addDelayTask
  })

  const classes = classNames([
    'fx-toast',
    { 'forbid-click': props.showMask },
    popupClasses
  ])

  const boxClasses = classNames([
    'fx-toast_box',
    { 'has--icon': hasIcon(props) }
  ])

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

FxToast.defaultProps = {
  ...popupDefaultProps,
  showMask: false,
  duration: 0
}

export default FxToast
