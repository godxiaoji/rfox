import classNames from 'classnames'
import type {
  PickerPopupEmits,
  PickerPopupProps,
  PickerPopupRef
} from './types'
import type { FRFC } from '../helpers/types'
import PickerView from './PickerView'
import { Drawer } from '../Drawer'
import { NavBar } from '../NavBar'
import { usePickerPopup } from './use-picker'
import { useLocale } from '../ConfigProvider/context'
import { forwardRef } from 'react'
import { OnVisibleStateChange } from '../popup/types'

const FxPickerPopup: FRFC<
  PickerPopupRef,
  PickerPopupProps & PickerPopupEmits
> = (props, ref) => {
  const { locale } = useLocale()
  const classes = classNames('fx-picker-popup', props.className)

  const { popupRef, viewRef, onCancelClick, onConfirmClick } = usePickerPopup(
    props,
    ref
  )

  const onVisibleStateChange: OnVisibleStateChange = res => {
    if (res.state === 'show') {
      viewRef.current?.resize()
    }
    props.onVisibleStateChange && props.onVisibleStateChange(res)
  }

  return (
    <Drawer
      ref={popupRef}
      className={classes}
      placement="bottom"
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
      renderHeader={() => (
        <NavBar
          className="fx-drawer_header"
          title={props.title}
          leftButtons={[{ text: locale.pickerCancelText, type: 'primary' }]}
          rightButtons={[{ text: locale.pickerConfirmText, type: 'primary' }]}
          iconOnly={false}
          onLeftButtonClick={onCancelClick}
          onRightButtonClick={onConfirmClick}
        />
      )}
    >
      <PickerView
        ref={viewRef}
        options={props.options}
        fieldNames={props.fieldNames}
        formatter={props.formatter}
        parser={props.parser}
      />
    </Drawer>
  )
}

export default forwardRef(FxPickerPopup)