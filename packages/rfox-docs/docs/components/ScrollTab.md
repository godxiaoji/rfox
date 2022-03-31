# ScrollTab/ScrollTabItem 标签滚动布局

<CodeDemo name="ScrollTab">

<<< @/../../rfox-demo/src/components/Navigation/ScrollTab/index.tsx

</CodeDemo>

## Import

```js
import { FxScrollTab, FxScrollTabItem } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { ScrollTabOnChange } from 'rfox'
```

## ScrollTab Props

| 属性               | 类型             | 默认值 | 必填 | 说明                        |
| ------------------ | ---------------- | ------ | ---- | --------------------------- |
| stickyOffsetTop    | string \| number | 0      | 否   | 数值默认是 px，也支持 vw/vh |
| stickyOffsetBottom | string \| number | 0      | 否   | 数值默认是 px，也支持 vw/vh |

## ScrollTab Events

| 事件     | 描述       | 回调函数参数                       | TypeScript 函数   |
| -------- | ---------- | ---------------------------------- | ----------------- |
| onChange | 切换时触发 | ( activeIndex: number ) 当前项索引 | ScrollTabOnChange |

## ScrollTab Slots

注：其中只可放置 [ScrollTabItem](./ScrollTab.md#scrolltabitem-props) 组件，否则会导致未定义的行为。

```tsx
<FxScrollTab className="exp-scrollTab-boxs">
  <FxScrollTab.Item name="Dust Red">
    <div className="exp-scrollTab-box box-1"></div>
  </FxScrollTab.Item>
  <FxScrollTab.Item name="Volcano">
    <div className="exp-scrollTab-box box-2"></div>
  </FxScrollTab.Item>
</FxScrollTab>
```

## ScrollTabItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明                       |
| ---- | ------ | ------ | ---- | -------------------------- |
| name | string |        | 是   | 分组名，也应用于吸附和菜单 |

## ScrollTabItem Slots

```tsx
<FxScrollTab.Item name="Dust Red">
  <div className="exp-scrollTab-box box-1"></div>
</FxScrollTab.Item>
```
