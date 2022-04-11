import {
  FxPicker,
  FxNoticeBar,
  FxGroup,
  showToast,
  SelectorModelValue
} from '@/index'
import { useState } from 'react'
import { cascadeOptions, multiOptions, options } from '../Picker/data'

export default function ExpPickerView() {
  const [simpleValue, setSimpleValue] = useState([2001])

  function onChange(res: SelectorModelValue) {
    console.log('change', res)
  }

  function onChangeEvent(res: SelectorModelValue) {
    onChange(res)

    showToast(`change: ${res}`)
  }

  return (
    <>
      <FxNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Picker"
      />
      <FxGroup title="单列">
        <FxPicker.View
          value={simpleValue}
          options={options}
          onChange={v => setSimpleValue(v as number[])}
        ></FxPicker.View>
      </FxGroup>
      <FxGroup title="多列">
        <FxPicker.View
          options={multiOptions}
          onChange={onChange}
        ></FxPicker.View>
      </FxGroup>
      <FxGroup title="级联">
        <FxPicker.View
          options={cascadeOptions}
          onChange={onChange}
        ></FxPicker.View>
      </FxGroup>
      <FxGroup title="change 事件">
        <FxPicker.View
          options={multiOptions}
          onChange={onChangeEvent}
        ></FxPicker.View>
      </FxGroup>
    </>
  )
}
