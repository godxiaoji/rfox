# Checkbox/CheckboxGroup 多选项

<CodeDemo name="Checkbox">

<<< @/../../rfox-demo/src/components/Form/Checkbox/index.tsx

</CodeDemo>

## Import

```js
import { FxCheckbox, FxCheckboxGroup } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { CheckboxOptionItem } from 'rfox'
```

## Checkbox Props

| 属性        | 类型             | 默认值 | 必填 | 说明                                                                                                         |
| ----------- | ---------------- | ------ | ---- | ------------------------------------------------------------------------------------------------------------ |
| value       | string \| number | ''     | 否   | 该项值，[CheckboxGroup](./Checkbox.md#checkboxgroup-多项选择器) 的 `onChange` 事件会携带 `checkbox` 的 value |
| disabled    | boolean          | false  | 否   | 是否禁用                                                                                                     |
| circle      | boolean          | false  | 否   | 是否显示圆形的图标                                                                                           |
| checked     | boolean          | false  | 否   | 当前是否选中，可用来设置默认选中                                                                             |
| activeColor | string           |        | 否   | 自定义激活态的图标颜色                                                                                       |

## Checkbox Events

| 事件名称 | 描述               | 回调函数参数     |
| -------- | ------------------ | ---------------- |
| onChange | 勾选发生改变时触发 | checked: boolean |

## Checkbox Slots

```tsx
<FxCheckbox>开朗</FxCheckbox>
<FxCheckbox>活泼</FxCheckbox>
...
```

## CheckboxGroup

注：

- 内部由多个 [Checkbox](./Checkbox.md#Checkbox-多选项) 组成。
- 支持表单，具体可参考 [Form](./Form.md)。

## CheckboxGroup Props

| 属性        | 类型                 | 默认值 | 必填 | 说明                                           |
| ----------- | -------------------- | ------ | ---- | ---------------------------------------------- |
| name        | string               |        | 否   | 标识                                           |
| inline      | boolean              | false  | 否   | 是否使用内联布局，默认纵向布局                 |
| value       | (string \| number)[] | []     | 否   | 当前选择子项的 value 列表                      |
| activeColor | string               |        | 否   | 自定义子项激活态的图标颜色                     |
| options     | CheckboxOptionItem[] |        | 否   | 子项配置，优先级低于 slot 放入 `Checkbox` 组件 |

### CheckboxOptionItem

| key   | 类型             | 默认值 | 必填 | 说明                                  |
| ----- | ---------------- | ------ | ---- | ------------------------------------- |
| value | string \| number |        | 是   | 值， 同 `Checkbox` 组件 value         |
| label | string           |        | 是   | 描述，同 `Checkbox` 组件 slot default |

## CheckboxGroup Events

| 事件名称 | 描述                 | 回调函数参数                |
| -------- | -------------------- | --------------------------- |
| onChange | 选中项发生改变时触发 | value: (string \| number)[] |

## CheckboxGroup Slots

### children

```tsx
<FxCheckbox.Group>
  <FxCheckbox>开朗</FxCheckbox>
  <FxCheckbox>活泼</FxCheckbox>
  ...
</FxCheckbox.Group>
```
