import classNames from 'classnames'
import type { CascaderEmits, CascaderProps } from './types'
import type { VFC } from '../helpers/types'
import { SelectorField } from '../SelectorField'
import CascaderPopup from './CascaderPopup'
import { usePicker } from '../Picker/use-picker'
import { mergeHandlers } from '../Picker/util'

const FxCascader: VFC<CascaderProps & CascaderEmits> = props => {
  const classes = classNames('fx-picker', props.className)

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
    name: 'cascader',
    handlers: mergeHandlers({
      formatter: props.formatter,
      parser: props.parser
    })
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
        <CascaderPopup
          ref={popupRef}
          value={props.value}
          options={props.options}
          fieldNames={props.fieldNames}
          formatter={props.formatter}
          parser={props.parser}
          visible={popupVisible}
          onUpdateVisible={onUpdateVisible}
          onConfirm={onConfirm}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default FxCascader
