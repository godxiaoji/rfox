# SwipeCell 滑动单元格

<CodeDemo name="SwipeCell">

<<< @/../../rfox-demo/src/components/Feedback/SwipeCell/index.tsx

</CodeDemo>

## Import

```js
import { FxSwipeCell } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { SwipeCellButtonOption, SwipeCellOnButtonClick } from 'rfox'
```

## Props

| 属性    | 类型                    | 默认值 | 必填 | 说明     |
| ------- | ----------------------- | ------ | ---- | -------- |
| buttons | SwipeCellButtonOption[] |        | 是   | 按钮列表 |

### SwipeCellButtonOption 的结构

```ts
type SwipeCellButtonOption = {
  text: string
  type?: StateType
}

const buttons: SwipeCellButtonOption[] = [
  {
    text: '加入收藏',
    type: 'warning'
  }
]
```

#### StateType 的合法值

| 值      | 说明 |
| ------- | ---- |
| primary | 主要 |
| default | 次要 |
| success | 成功 |
| warning | 警告 |
| danger  | 危险 |

## Events

| 事件          | 描述           | 回调函数参数                                            | TypeScript 函数        |
| ------------- | -------------- | ------------------------------------------------------- | ---------------------- |
| onbuttonClick | 点击按钮时触发 | payload: { item: SwipeCellButtonOption, index: number } | SwipeCellOnButtonClick |

## Slots

### 被挂载元素（children）

```tsx
<FxSwipeCell buttons={buttons}>
  <FxCell label="单元格" content="向左划"></FxCell>
</FxSwipeCell>
```
