import { FxSlider, FxCell, FxGroup, showToast } from '@/index'
import { useState } from 'react'

export default function ExpSlider() {
  const [value, setValue] = useState(0)
  const [value2, setValue2] = useState(10)
  const [value3, setValue3] = useState(20)
  const [value4, setValue4] = useState(30)
  const [value5, setValue5] = useState(40)
  const [value6, setValue6] = useState(50)
  const [value7, setValue7] = useState(60)
  const [value8, setValue8] = useState(70)

  function onInput(value: number) {
    showToast(`Input value: ${value}`)
  }

  function onChange(value: number) {
    showToast(`Change value: ${value}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell className="exp-slider-box" label={'value: ' + value}>
          <FxSlider value={value} onInput={v => setValue(v)} />
        </FxCell>
      </FxGroup>
      <FxGroup title="显示数值 showValue=true">
        <FxCell className="exp-slider-box" label={'value: ' + value2}>
          <FxSlider showValue value={value2} onInput={v => setValue2(v)} />
        </FxCell>
      </FxGroup>
      <FxGroup title="自定义颜色 color=#ff7875">
        <FxCell className="exp-slider-box" label={'value: ' + value3}>
          <FxSlider
            color="#ff7875"
            value={value3}
            showValue
            onInput={v => setValue3(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="设置步进（step=5）">
        <FxCell className="exp-slider-box" label={'value: ' + value4}>
          <FxSlider
            showValue
            value={value4}
            step="5"
            onInput={v => setValue4(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="限制范围 min=40 & max=140">
        <FxCell className="exp-slider-box" label={'value: ' + value5}>
          <FxSlider
            showValue
            min="40"
            max="140"
            value={value5}
            onInput={v => setValue5(v)}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="禁用">
        <FxCell className="exp-slider-box" label={'value: ' + value6}>
          <FxSlider disabled value={value6} />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell className="exp-slider-box" label="input">
          <FxSlider value={value7} onInput={onInput} />
        </FxCell>
        <FxCell className="exp-slider-box" label="change">
          <FxSlider value={value8} onChange={onChange} />
        </FxCell>
      </FxGroup>
    </>
  )
}
