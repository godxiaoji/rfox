# TabView/TabViewItem 标签页

<CodeDemo name="TabView">

<<< @/../../rfox-demo/src/components/Navigation/TabView/index.tsx

</CodeDemo>

## Import

```js
import { FxTabView, FxTabViewItem } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { TabViewOnChange, TabViewOnAnimated } from 'rfox'
```

## TabView Props

| 属性            | 类型    | 默认值 | 必填 | 说明                                       |
| --------------- | ------- | ------ | ---- | ------------------------------------------ |
| initialVertical | boolean | false  | 否   | 初始化是否侧边菜单展示方式                 |
| scrollThreshold | number  | 4      | 否   | 超过 `scrollThreshold` 个 Tab 使用滚动形式 |

## TabView Events

| 事件       | 描述           | 回调函数参数            | TypeScript 函数   |
| ---------- | -------------- | ----------------------- | ----------------- |
| onChange   | 切换时触发     | ( activeIndex: number ) | TabViewOnChange   |
| onAnimated | 动画结束时触发 | ( activeIndex: number ) | TabViewOnAnimated |

## TabView Slots

### children

注：其中只可放置 [TabViewItem](./TabView.md#tabviewitem-props) 组件，否则会导致未定义的行为。

```tsx
<FxTabView className="exp-tabView">
  <FxTabView.Item name="Tab 1">
    <FxScrollView
      className="exp-tabView-scroll-view"
      enablePullDirections={['down']}
      scrollY
      scrollX
      onRefreshing={onRefreshing}
    >
      <FxEmpty
        className="exp-tabView-empty"
        description="Tab 1 下拉刷新"
      ></FxEmpty>
    </FxScrollView>
  </FxTabView.Item>
  <FxTabView.Item name="Tab 2">
    <FxEmpty className="exp-tabView-empty" description="Tab 2"></FxEmpty>
  </FxTabView.Item>
</FxTabView>
```

## TabViewItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明           |
| ---- | ------ | ------ | ---- | -------------- |
| name | string |        | 是   | 对应的菜单名称 |

## TabViewItem Slots

### 内容（children）

```tsx
<FxTabView.Item name="Tab 2">
  <FxEmpty className="exp-tabView-empty" description="Tab 2"></FxEmpty>
</FxTabView.Item>
```
