import classNames from 'classnames'
import type { PickerEmits, PickerProps } from './types'
import type { VFC } from '../helpers/types'
import { usePicker } from './use-picker'
import { mergeHandlers } from './util'
import { SelectorField } from '../SelectorField'
import PickerPopup from './PickerPopup'
import { useContext } from 'react'
import { PickerContext } from './context'

const FxPicker: VFC<PickerProps & PickerEmits> = props => {
  const classes = classNames('fx-picker', props.className)
  const handlers = useContext(PickerContext)

  const {
    popupRef,
    fieldLabel,
    fieldValue,
    onFieldClick,
    onConfirm,
    popupVisible,
    onUpdateVisible,
    isInitPopup
  } = usePicker(props, {
    name: 'picker',
    handlers: mergeHandlers(
      {
        formatter: props.formatter,
        parser: props.parser
      },
      handlers
    )
  })

  return (
    <div className={classes}>
      <SelectorField
        label={fieldLabel}
        value={fieldValue}
        disabled={props.disabled}
        name={props.name}
        placeholder={props.placeholder}
        onFieldClick={onFieldClick}
      />
      {isInitPopup ? (
        <PickerPopup
          options={props.options}
          fieldNames={props.fieldNames}
          value={props.value}
          title={props.placeholder}
          formatter={props.formatter}
          parser={props.parser}
          visible={popupVisible}
          onUpdateVisible={onUpdateVisible}
          onConfirm={onConfirm}
          ref={popupRef}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default FxPicker
