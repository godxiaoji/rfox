import { cascadeOptions, multiOptions, options, regionOptions } from './data'
import {
  showToast,
  showPicker,
  SelectorModelValue,
  SelectorValueFormatter,
  SelectorValueParser,
  FxGroup,
  FxCell,
  FxPicker
} from '@/index'
import { useState } from 'react'

const separator = '-'

export default function ExpPicker() {
  const [disableValue] = useState([2000, '春'])
  const [formatValue] = useState(`2001${separator}夏`)

  const formatter: SelectorValueFormatter = (valueArray, labelArray) => {
    return {
      value: valueArray.join(separator),
      label: labelArray.join(separator)
    }
  }

  const parser: SelectorValueParser = value => {
    return value ? (value as string).split(separator) : []
  }

  function onCallApi() {
    showPicker({
      title: 'Picker',
      options: multiOptions
    }).then(res => {
      console.log('success', res)
      if (res.cancel) {
        showToast('取消了')
      } else {
        showToast(`选择了 ${res.detail.label}`)
      }
    })
  }

  function onChange(res: SelectorModelValue) {
    console.log('change', res)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="单列">
          <FxPicker options={options} onChange={onChange} />
        </FxCell>
        <FxCell label="多列">
          <FxPicker options={multiOptions} onChange={onChange} />
        </FxCell>
        <FxCell label="级联">
          <FxPicker options={cascadeOptions} onChange={onChange} />
        </FxCell>
        <FxCell label="地区">
          <FxPicker
            options={regionOptions}
            fieldNames={{ value: 'label' }}
            onChange={onChange}
          />
        </FxCell>
        <FxCell label="formatter/parser">
          <FxPicker
            value={formatValue}
            formatter={formatter}
            parser={parser}
            options={multiOptions}
            onChange={onChange}
          ></FxPicker>
        </FxCell>
        <FxCell label="禁用">
          <FxPicker
            value={disableValue}
            options={multiOptions}
            disabled
            onChange={onChange}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showPicker" isLink onClick={() => onCallApi()} />
      </FxGroup>
    </>
  )
}
