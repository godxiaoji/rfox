import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { NotifyEmits, NotifyProps } from './types'
import type { FC } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import { useDelay } from '../hooks/use-delay'
import { popupDefaultProps } from '../popup/props'
import { NoticeBar } from '../NoticeBar'

const FxNotify: FC<NotifyProps & NotifyEmits> = props => {
  const { addDelayTask, removeDelayTask } = useDelay(() => {
    customCancel('auto', true)
  }, props.duration)

  const { popupStyles, popupClasses, customCancel, onCloseClick } = usePopup(
    props,
    {
      forbidScroll: false,
      afterCancel: removeDelayTask,
      afterShow: addDelayTask
    }
  )

  const classes = classNames(['fx-notify', popupClasses])

  return createPortal(
    <div className={classes} style={popupStyles}>
      <NoticeBar
        className="fx-notify_inner"
        type={props.type}
        leftIcon={props.icon}
        title={props.title}
        color={props.color}
        mode={props.closable ? 'closable' : 'default'}
        onCloseClick={onCloseClick}
      />
    </div>,
    document.body
  )
}

FxNotify.defaultProps = {
  ...popupDefaultProps,
  type: 'primary',
  closable: false,
  duration: 0
}

export default FxNotify
