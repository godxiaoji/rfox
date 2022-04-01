import { forwardRef } from 'react'
import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { NotifyEmits, NotifyProps } from './types'
import type { FRVFC } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import { useDelay } from '../hooks/use-delay'
import { NoticeBar } from '../NoticeBar'
import type { PopupRef } from '../popup/types'

const FxNotify: FRVFC<PopupRef, NotifyProps & NotifyEmits> = (props, ref) => {
  const { addDelayTask, removeDelayTask } = useDelay(() => {
    customCancel('auto', true)
  }, props.duration)

  const { popupStyles, popupClasses, customCancel, onCloseClick } = usePopup(
    props,
    ref,
    {
      afterHide: removeDelayTask,
      afterShow: addDelayTask,
      initialForbidScroll: false
    }
  )

  const classes = classNames(['fx-notify', popupClasses])

  return createPortal(
    <div className={classes} style={popupStyles}>
      <NoticeBar
        className="fx-notify_inner"
        type={props.type ?? 'primary'}
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

export default forwardRef(FxNotify)
