import classNames from 'classnames'
import type { DialogEmits, DialogProps } from './types'
import type { FRFC } from '../helpers/types'
import { forwardRef, useRef } from 'react'
import { useLocale } from '../ConfigProvider/context'
import type { PopupRef } from '../popup/types'
import { Button, ButtonGroup } from '../Button'
import { Modal } from '../Modal'
import { usePopupRef } from '../popup/use-popup'

const FxDialog: FRFC<PopupRef, DialogProps & DialogEmits> = (
  { showCancel = true, ...props },
  ref
) => {
  const { locale } = useLocale()
  const { popupRef } = usePopupRef(ref)

  const classes = classNames('fx-dialog', props.className)

  function onConfirmClick() {
    popupRef.current?.customConfirm({})
  }

  function onCancelClick() {
    popupRef.current?.onCancelClick()
  }

  return (
    <Modal
      ref={popupRef}
      className={classes}
      showClose={false}
      maskClosable={props.maskClosable}
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={props.onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
    >
      {props.title ? (
        <div className="fx-dialog_header">{props.title}</div>
      ) : (
        <></>
      )}
      <div className="fx-dialog_content">
        {props.content ? (
          <div className="fx-dialog_content-text">{props.content}</div>
        ) : (
          props.children
        )}
      </div>
      <div className="fx-dialog_footer fx-horizontal-hairline">
        <ButtonGroup className="fx-dialog_footer-inner" pattern="borderless">
          {showCancel ? (
            <Button
              className="fx-dialog_button"
              type="default"
              onClick={onCancelClick}
            >
              {props.cancelText || locale.dialogCancelText}
            </Button>
          ) : (
            <></>
          )}
          <Button
            className="fx-dialog_button"
            type="primary"
            onClick={onConfirmClick}
          >
            {props.confirmText || locale.dialogConfirmText}
          </Button>
        </ButtonGroup>
      </div>
    </Modal>
  )
}

export default forwardRef(FxDialog)
