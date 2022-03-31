# Stepper 步进器

注：

- 支持表单，具体可参考 [Form](./Form.md)。

<CodeDemo name="Stepper">

<<< @/../../rfox-demo/src/components/Form/Stepper/index.tsx

</CodeDemo>

## Import

```js
import { FxStepper } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性          | 类型    | 默认值   | 必填 | 说明                                     |
| ------------- | ------- | -------- | ---- | ---------------------------------------- |
| value         | number  |          | 否   |
| name          | string  |          | 否   | 标识                                     |
| min           | number  | 0        | 否   | 最小值                                   |
| max           | number  | Infinity | 否   | 最大值                                   |
| step          | number  | 1        | 否   | 步长                                     |
| disabled      | boolean | false    | 否   | 是否禁用                                 |
| disabledPlus  | boolean | false    | 否   | 是否禁用增加按钮                         |
| disabledMinus | boolean | false    | 否   | 是否禁用减少按钮                         |
| disabledInput | boolean | false    | 否   | 是否禁用输入框输入                       |
| showValue     | boolean | false    | 否   | 是否显示当前 value                       |
| allowDecimal  | boolean | true     | 否   | 是否允许输入小数，`false` 限制只允许整数 |

## Events

| 事件         | 描述               | 回调函数参数            |
| ------------ | ------------------ | ----------------------- |
| onChange     | 当绑定值变化时触发 | value: number \| string |
| onInput      | 输入框输入时触发   | value: number \| string |
| onFocus      | 输入框聚焦时触发   | e: FocusEvent           |
| onBlur       | 输入框失焦时触发   | e: FocusEvent           |
| onPlusClick  | 点击增加按钮时触发 |                         |
| onMinusClick | 点击减少按钮时触发 |                         |
