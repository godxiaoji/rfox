import { cascadeOptions, regionOptions } from '../Picker/data'
import {
  showToast,
  showCascader,
  SelectorModelValue,
  SelectorValueFormatter,
  SelectorValueParser,
  FxGroup,
  FxCell,
  FxCascader
} from '@/index'
import { useState } from 'react'

const separator = '-'
const placeholder = '选择家电'

export default function ExpCascader() {
  const [disableValue] = useState(['bingxiang', 'sanmen'])
  const [formatValue] = useState(`bingxiang${separator}duikaimen`)

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
    showCascader({
      options: cascadeOptions
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
        <FxCell label="家电">
          <FxCascader
            options={cascadeOptions}
            onChange={onChange}
            placeholder={placeholder}
          />
        </FxCell>
        <FxCell label="地区">
          <FxCascader
            options={regionOptions}
            fieldNames={{ value: 'label' }}
            onChange={onChange}
          />
        </FxCell>
        <FxCell label="formatter/parser">
          <FxCascader
            value={formatValue}
            formatter={formatter}
            parser={parser}
            options={cascadeOptions}
            onChange={onChange}
          ></FxCascader>
        </FxCell>
        <FxCell label="禁用">
          <FxCascader
            value={disableValue}
            options={cascadeOptions}
            disabled
            onChange={onChange}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showCascader" isLink onClick={() => onCallApi()} />
      </FxGroup>
    </>
  )
}
