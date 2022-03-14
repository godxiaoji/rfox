import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { ModalEmits, ModalProps } from './types'
import type { FC } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import { popupDefaultProps } from '../popup/props'
import CloseCircleFilled from '../Icon/icons/CloseCircleFilled'
import { getModalBoxStyles } from './util'
import { Icon } from '../Icon'

const FxModal: FC<ModalProps & ModalEmits> = props => {
  const { popupStyles, popupClasses, customCancel, onMaskClick, onCloseClick } =
    usePopup(props, {})

  const classes = classNames(['fx-modal', popupClasses])
  const boxStyles = getModalBoxStyles(props)

  return createPortal(
    <div className={classes} style={popupStyles}>
      <div className="fx-mask" onClick={onMaskClick}></div>
      <div className="fx-modal_box" style={boxStyles}>
        <div className="fx-modal_box-inner">{props.children}</div>
        {props.showClose ? (
          <i className="fx-modal_close" onClick={onCloseClick}>
            <Icon icon={CloseCircleFilled} />
          </i>
        ) : (
          <></>
        )}
      </div>
    </div>,
    document.body
  )
}

FxModal.defaultProps = {
  ...popupDefaultProps,
  showClose: true
}

export default FxModal
