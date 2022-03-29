import {
  FxDatePicker,
  FxNoticeBar,
  FxGroup,
  showToast,
  SelectorModelValue
} from '@/index'

export default function ExpDatePickerView() {
  function onChange(e: SelectorModelValue) {
    console.log('change', e)
    showToast(`change: ${e}`)
  }

  return (
    <>
      <FxNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 DatePicker"
      />
      <FxGroup title="initialMode=datetime">
        <FxDatePicker.View initialMode="datetime" />
      </FxGroup>
      <FxGroup title="change 事件">
        <FxDatePicker.View initialMode="date" onChange={onChange} />
      </FxGroup>
    </>
  )
}
