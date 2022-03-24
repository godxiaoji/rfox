import { FxRange, FxCell, FxGroup, showToast } from '@/index'
import { useState } from 'react'

export default function ExpRange() {
  const [value, setValue] = useState<number[]>()
  const [value2, setValue2] = useState([10, 60])
  const [value3, setValue3] = useState([20, 70])
  const [value4, setValue4] = useState([30, 80])
  const [value5, setValue5] = useState([40, 90])
  const [value6, setValue6] = useState([0, 100])
  const [value7, setValue7] = useState([0, 100])

  function onInput(value: number[]) {
    showToast(`Input value: ${value}`)
  }

  function onChange(value: number[]) {
    showToast(`Change value: ${value}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell className="exp-range-box" label={'value: ' + value}>
          <FxRange value={value} onInput={v => setValue(v)} />
        </FxCell>
      </FxGroup>
      <FxGroup title="显示数值 showValue=true">
        <FxCell className="exp-range-box" label={'value: ' + value2}>
          <FxRange showValue value={value2} onInput={v => setValue2(v)} />
        </FxCell>
      </FxGroup>
      <FxGroup title="自定义颜色 color=#ff7875">
        <FxCell className="exp-range-box" label={'value: ' + value3}>
          <FxRange
            color="#ff7875"
            value={value3}
            showValue
            onInput={v => setValue3(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="返回不允许重叠 allowSameValue=false">
        <FxCell className="exp-range-box" label={'value: ' + value4}>
          <FxRange
            showValue
            value={value4}
            allowSameValue={false}
            onInput={v => setValue4(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="设置步进（step=5）">
        <FxCell className="exp-range-box" label={'value: ' + value5}>
          <FxRange
            showValue
            value={value5}
            step="5"
            onInput={v => setValue5(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="限制范围 min=50 & max=150">
        <FxCell className="exp-range-box" label={'value: ' + value6}>
          <FxRange
            showValue
            min="50"
            max="150"
            value={value6}
            onInput={v => setValue6(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="禁用">
        <FxCell className="exp-range-box" label={'value: ' + value7}>
          <FxRange disabled value={value7} onInput={v => setValue7(v)} />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell className="exp-range-box" label="input">
          <FxRange onInput={onInput} />
        </FxCell>
        <FxCell className="exp-range-box" label="change">
          <FxRange onChange={onChange} />
        </FxCell>
      </FxGroup>
    </>
  )
}
