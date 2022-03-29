import classNames from 'classnames'
import type {
  CascaderPopupEmits,
  CascaderPopupProps,
  CascaderPopupRef
} from './types'
import type { FRFC } from '../helpers/types'
import CascaderView from './CascaderView'
import { Drawer } from '../Drawer'
import { forwardRef } from 'react'
import { OnVisibleStateChange } from '../popup/types'
import { usePickerPopup } from '../Picker/use-picker'

const FxCascaderPopup: FRFC<
  CascaderPopupRef,
  CascaderPopupProps & CascaderPopupEmits
> = (props, ref) => {
  const classes = classNames('fx-cascader-popup', props.className)

  const { popupRef, viewRef, onConfirmClick } = usePickerPopup(props, ref)

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
    >
      <CascaderView
        ref={viewRef}
        options={props.options}
        fieldNames={props.fieldNames}
        formatter={props.formatter}
        parser={props.parser}
        onSelect={onConfirmClick}
      />
    </Drawer>
  )
}

export default forwardRef(FxCascaderPopup)
