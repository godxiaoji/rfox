# Input 输入框

注：

- 支持表单，具体可参考 [Form](./Form.md)。

<CodeDemo name="Input">

<<< @/../../rfox-demo/src/components/Form/Input/index.tsx

</CodeDemo>

## Import

```js
import { FxInput } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性        | 类型             | 默认值 | 必填 | 说明               |
| ----------- | ---------------- | ------ | ---- | ------------------ |
| value       | string \| number | ''     | 否   |
| name        | string           |        | 否   | 标识               |
| type        | string           | 'text' | 否   | 类型               |
| placeholder | string           |        | 否   | 输入框为空时占位符 |
| disabled    | boolean          | false  | 否   | 是否禁用           |
| readonly    | boolean          | false  | 否   | 是否只读           |
| maxlength   | string \| number | 140    | 否   | 最大长度           |
| focus       | boolean          | false  | 否   | 是否获取焦点       |
| showClear   | boolean          | false  | 否   | 是否展示清除图标   |

### type 的合法值

| 值       | 说明 |
| -------- | ---- |
| text     | 文本 |
| digit    | 整数 |
| number   | 数字 |
| password | 密码 |
| search   | 搜索 |
| password | 密码 |

## Events

| 事件     | 描述                                   | 回调函数参数  |
| -------- | -------------------------------------- | ------------- |
| onInput  | 输入值改变时触发                       | value: string |
| onChange | 输入值改变且失焦后触发，含点击清空按钮 | value: string |
| onFocus  | 获取焦点时触发                         | e: FocusEvent |
| onBlur   | 移出焦点时触发                         | e: FocusEvent |

## Slots

### 前置元素（renderPrepend）

```tsx
<FxInput
  type="text"
  focus
  placeholder="请输入网址"
  renderPrepend={() => 'https://'}
/>
```

注：也可以传入 `Icon`，比如常见的搜索。

### 后置元素（renderAppend）

```tsx
<FxInput
  type="text"
  focus
  placeholder="请输入网址"
  renderAppend={() => '.com'}
/>
```
