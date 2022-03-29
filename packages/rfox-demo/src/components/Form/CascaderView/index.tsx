import {
  FxCascader,
  FxNoticeBar,
  FxGroup,
  showToast,
  SelectorModelValue,
  CascaderOnSelect
} from '@/index'
import { cascadeOptions } from '../Picker/data'

export default function ExpCascaderView() {
  function onChange(res: SelectorModelValue) {
    console.log('change', res)

    showToast(`change: ${res}`)
  }

  const onSelect: CascaderOnSelect = res => {
    console.log('select', res)

    showToast(`select: ${res.value}`)
  }

  return (
    <>
      <FxNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Cascader"
      />
      <FxGroup title="家电">
        <FxCascader.View options={cascadeOptions} v-model="baseValue" />
      </FxGroup>
      <FxGroup title="空数据">
        <FxCascader.View options={[]} />
      </FxGroup>
      <FxGroup title="change 事件">
        <FxCascader.View options={cascadeOptions} onChange={onChange} />
      </FxGroup>
      <FxGroup title="select 事件（跟 change 的区别是重复选一样的也触发）">
        <FxCascader.View options={cascadeOptions} onSelect={onSelect} />
      </FxGroup>
    </>
  )
}
