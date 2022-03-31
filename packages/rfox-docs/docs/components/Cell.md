# Cell 单元格

单元格为列表中的单个展示项。

<CodeDemo name="Cell">

<<< @/../../rfox-demo/src/components/Show/Cell/index.tsx

</CodeDemo>

## Import

```js
import { FxCell } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { CellArrowDirection } from 'rfox'
```

## Props

| 属性           | 类型               | 默认值  | 必填 | 说明                                                                |
| -------------- | ------------------ | ------- | ---- | ------------------------------------------------------------------- |
| label          | string             |         | 是   | 左侧文字                                                            |
| description    | string             |         | 否   | 左侧附加描述文字                                                    |
| content        | string             |         | 否   | 右侧文字                                                            |
| required       | boolean            | false   | 否   | true 在左侧文字边上会展示一个 红色`*`箭头                           |
| clickable      | boolean            | false   | 否   | 是否开启点击反馈，clickable=true 有点击态和箭头                     |
| isLink         | boolean            | false   | 否   | 是否展示右侧箭头并开启点击反馈                                      |
| arrowDirection | CellArrowDirection | 'right' | 否   | isLink=true 时展示的箭头方向，可选值：'right', 'up', 'down', 'left' |

## Slots

### 内容区（children）

```tsx
<FxCell label="右侧图标">
  <FxIcon icon="CloseOutlined" />
</FxCell>
```

注：添加 slot 后 `content` prop 属性失效。
