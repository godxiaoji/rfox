# Badge 徽标数

注：

- 这是个包裹组件，需要 `slot` 中提供被挂在的内容。

<CodeDemo name="Badge">

<<< @/../../rfox-demo/src/components/Show/Badge/index.tsx

</CodeDemo>

## Import

```js
import { FxBadge } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性     | 类型             | 默认值 | 必填 | 说明                                                                               |
| -------- | ---------------- | ------ | ---- | ---------------------------------------------------------------------------------- |
| content  | number \| string | 0      | 否   | 消息条数或者文本                                                                   |
| maxCount | number \| string | 99     | 否   | 最大完全显示消息条数                                                               |
| dot      | boolean          | false  | 否   | 是否显示为小红点                                                                   |
| showZero | boolean          | false  | 否   | 消息数为 0 时是否显示                                                              |
| offset   | number[]         | [0, 0] | 否   | 偏移量，格式为 [x, y]                                                              |
| animated | boolean          | false  | 否   | 是否开启动画                                                                       |
| color    | string           |        | 否   | 自定义色彩，支持 hex rgb hsl 等写法，详细效果[查看](../design/color.md#自定义色彩) |

## Slots

### children

```tsx
<FxBadge count={1} showZero>
  <FxButton>badge</FxButton>
</FxBadge>
```
