import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { ModalEmits, ModalProps } from './types'
import type { FRFC } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import CloseCircleFilled from '../Icon/icons/CloseCircleFilled'
import { getBoxStyles } from './util'
import { Icon } from '../Icon'
import type { PopupRef } from '../popup/types'
import { forwardRef } from 'react'

const FxModal: FRFC<PopupRef, ModalProps & ModalEmits> = (props, ref) => {
  const { popupStyles, popupClasses, onMaskClick, onCloseClick } = usePopup(
    props,
    ref,
    {}
  )

  const classes = classNames(['fx-modal', popupClasses, props.className])
  const boxStyles = getBoxStyles(props.width)

  return createPortal(
    <div className={classes} style={popupStyles}>
      <div className="fx-mask" onClick={onMaskClick}></div>
      <div className="fx-modal_box" style={boxStyles}>
        <div className="fx-modal_box-inner">{props.children}</div>
        {props.showClose !== false ? (
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

export default forwardRef(FxModal)
