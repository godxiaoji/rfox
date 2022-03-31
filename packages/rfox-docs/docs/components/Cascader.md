# Cascader/CascaderPopup/CascaderView 级联选择

注：

- 这 3 个组件是渐进式组件，可查看 [渐进式组件](../design/progressive.md) 了解。

## Import

```js
import { FxCascader, FxCascaderPopup, FxCascaderView } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type {
  CascaderOnConfirm,
  CascaderFieldNames,
  SelectorOnChange,
  SelectorModelValue,
  SelectorValueParser,
  SelectorValueFormatter,
  VisibleState,
  PopupOnVisibleStateChange,
  PopupOnCancel
} from 'rfox'
```

## 公共 Props

| 属性       | 类型                                                                                                         | 默认值                                                   | 必填 | 说明                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ---- | ---------------------------------------------------- |
| options    | [Options](./Cascader.md#options-的结构)                                                                      | []                                                       | 否   | 数据集                                               |
| value      | [SelectorValue](./Cascader.md#selectorvalue-的类型) \| [SelectorValue](./Cascader.md#selectorvalue-的类型)[] | []                                                       | 否   | 选中值                                               |
| fieldNames | [CascaderFieldNames](./Cascader.md#cascaderfieldnames)                                                       | { label: 'label', value: 'value', children: 'children' } | 否   | 自定义 options 中 label value children 的字段 key    |
| formatter  | [SelectorValueFormatter](./Cascader.md#selectorvalueformatter)                                               |                                                          | 否   | 和 `parser` 成对设置，对于 `value` 的值进行转化      |
| parser     | [SelectorValueParser](./Cascader.md#selectorvalueparser)                                                     |                                                          | 否   | 和 `formatter` 成对设置，对于 `value` 的值进行反转化 |

### SelectorValue 的类型

允许的类型为：`string | number | Date`

在不自定义 `formatter/parser` 的情况下，`value` 只有 `(string | number)[]` 这种情况。

### SelectorModelValue 的类型

SelectorModelValue 的类型为： `SelectorValue | SelectorValue[]`

### SelectorDetail 的结构

| 字段  | 类型                                                          | 说明                                                  |
| ----- | ------------------------------------------------------------- | ----------------------------------------------------- |
| value | [SelectorModelValue](./Cascader.md#selectormodelvalue-的类型) | ["zaolei", "lunzao"]；`formatter/parser` 的优先级更高 |
| label | string                                                        | "藻类/轮藻"                                           |

### CascaderFieldNames

```ts
interface CascaderFieldNames {
  label?: string
  value?: string
  children?: string
}
```

### Options 的结构

```js
const options = [
  {
    label: '空调',
    value: 'kongtiao',
    children: [
      {
        label: '家用空调',
        value: 'jiayongkongtiao',
        children: [
          {
            label: '挂式空调',
            value: 'guashikongtiao'
          },
          {
            label: '柜式空调',
            value: 'guishikongtiao'
          }
        ]
      },
      {
        label: '厨房空调',
        value: 'chufangkongtiao'
      }
    ]
  },
  {
    label: '冰箱',
    value: 'bingxiang',
    children: [
      {
        label: '双门',
        value: 'shuangmen'
      },
      {
        label: '三门',
        value: 'sanmen'
      }
    ]
  }
]
```

### formatter/parser

高阶配置，`formatter` 和 `parser` 需要一同设置，对 `value` 的值转为自定义值。

#### SelectorValueFormatter

```ts
interface SelectorValueFormatter {
  (valueArray: SelectorValue[], labelArray: string[]):
    | {
        value: SelectorValue | SelectorValue[]
        label: string
      }
    | (SelectorValue | SelectorValue[])
}
```

将 value 的原始值转为需要的自定义值，值需要满足 `SelectorValue | SelectorValue[]` 的类型约束，可以返回 { value, label } 对两个数据进行修改，或者单独返回 value。

#### SelectorValueParser

```ts
interface SelectorValueParser {
  (value: unknown): SelectorValue[]
}
```

跟 `SelectorValueFormatter` 相反，将自定义 `value` 的值转为组件认识的原始数组。

## Cascader 级联选择器

注：

- 支持表单，具体可参考 [Form](./Form.md)。

<CodeDemo name="Cascader">

<<< @/../../rfox-demo/src/components/Form/Cascader/index.tsx

</CodeDemo>

### Cascader Props

| 属性        | 类型    | 默认值 | 必填 | 说明             |
| ----------- | ------- | ------ | ---- | ---------------- |
| name        | string  |        | 否   | 标识             |
| placeholder | string  |        | 否   | 没有选中值的提示 |
| disabled    | boolean | false  | 否   | 是否禁用         |

### Cascader Events

| 事件     | 描述                        | 回调函数参数                                                           | 函数 TypeScript  |
| -------- | --------------------------- | ---------------------------------------------------------------------- | ---------------- |
| onChange | 选择后 value 发生改变时触发 | payload: [SelectorModelValue](./Cascader.md#selectormodelvalue-的类型) | SelectorOnChange |

## CascaderPopup 级联选择弹窗

<CodeDemo name="CascaderPopup">

<<< @/../../rfox-demo/src/components/Form/CascaderPopup/index.tsx

</CodeDemo>

### CascaderPopup Props

| 属性    | 类型    | 默认值 | 必填 | 说明         |
| ------- | ------- | ------ | ---- | ------------ |
| visible | boolean | false  | 否   | 是否显示弹窗 |

### CascaderPopup Events

| 事件                 | 描述                 | 回调函数参数                                                           | 函数 TypeScript           |
| -------------------- | -------------------- | ---------------------------------------------------------------------- | ------------------------- |
| onConfirm            | 点击确定按钮后触发   | payload: [SelectorDetail](./Cascader.md#selectordetail-的结构)         | CascaderOnConfirm         |
| onCancel             | 点击蒙层关闭后触发   |                                                                        | PopupOnCancel             |
| onChange             | 选中值发生变化时触发 | payload: [SelectorModelValue](./Cascader.md#selectormodelvalue-的类型) | SelectorOnChange          |
| onVisibleStateChange | 展示隐藏时触发       | payload: { state: [VisibleState](./Cascader.md#visiblestate-值说明) }  | PopupOnVisibleStateChange |
| onUpdateVisible      | 展示隐藏时触发       | visible: boolean 是否显示                                              |                           |

#### VisibleState 值说明

| 值     | 说明                 | 备注                                              |
| ------ | -------------------- | ------------------------------------------------- |
| show   | 展示时触发           |                                                   |
| shown  | 展示且动画结束后触发 |                                                   |
| hide   | 隐藏时触发           | 可能携带其他参数 cancel, maskClick, closeClick 等 |
| hidden | 隐藏且动画结束后触发 | 可能携带其他参数 cancel, maskClick, closeClick 等 |

## CascaderView 级联选择面板

<CodeDemo name="CascaderView">

<<< @/../../rfox-demo/src/components/Form/CascaderView/index.tsx

</CodeDemo>

### CascaderView Events

| 事件     | 描述                     | 回调函数参数                                                           | 函数 TypeScript  |
| -------- | ------------------------ | ---------------------------------------------------------------------- | ---------------- |
| onChange | 选择完毕后发生变化时触发 | payload: [SelectorModelValue](./Cascader.md#selectormodelvalue-的类型) | SelectorOnChange |
| onSelect | 每次选择完毕时触发       | payload: [SelectorDetail](./Cascader.md#selectordetail-的结构)         | CascaderOnSelect |

## showCascader(object) 显示级联选择弹窗

### object

| 属性       | 类型                                                                                                         | 默认值                                                   | 必填 | 说明                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ---- | ------------------------------------------------------------------------ |
| options    | [Options](./Cascader.md#options-的结构)                                                                      | []                                                       | 否   | 数据集                                                                   |
| value      | [SelectorValue](./Cascader.md#selectorvalue-的类型) \| [SelectorValue](./Cascader.md#selectorvalue-的类型)[] | []                                                       | 否   | 选中值                                                                   |
| fieldNames | [CascaderFieldNames](./Cascader.md#cascaderfieldnames)                                                       | { label: 'label', value: 'value', children: 'children' } | 否   | 自定义 options 中 label value children 的字段 key                        |
| success    | (payload: SuccessPayload) => void                                                                            |                                                          | 否   | 接口调用成功（在用户做出选择后，如取消，选择选项）的回调函数             |
| fail       | (e: Error) => void                                                                                           |                                                          | 否   | 接口调用失败（如传入错误的参数）的回调函数（不传入 fail 遇错误直接抛出） |
| complete   | () => void                                                                                                   |                                                          | 否   | 弹窗关闭或调用失败的回调函数                                             |

#### SuccessPayload

| 属性          | 类型                 | 说明                                          |
| ------------- | -------------------- | --------------------------------------------- |
| cancel?       | boolean              | 为 true 时，表示取消                          |
| confirm?      | boolean              | 为 true 时，表示点击了确定，此时返回 `detail` |
| detail?.value | (number \| string)[] | ["zaolei", "lunzao"]                          |
| detail?.label | string               | "藻类/轮藻"                                   |

### Usage

具体调用方式可以参考[API 调用](../guide/import.md#api-调用)。

```js
showCascader({
  title: '植物',
  options: cascadeOptions,
  success: ({ confirm, cancel, detail }) => {
    ...
  }
})
```
