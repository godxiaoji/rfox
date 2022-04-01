# Sticky/StickyView/StickyViewItem 粘性布局

<CodeDemo name="Sticky">

<<< @/../../rfox-demo/src/components/Navigation/Sticky/index.tsx

</CodeDemo>

## Import

```js
import { FxSticky, FxStickyView, FxStickyViewItem } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { StickyViewOnChange } from 'rfox'
```

## Sticky

粘性容器。

## Sticky Props

| 属性            | 类型                              | 默认值   | 必填 | 说明                                                                            |
| --------------- | --------------------------------- | -------- | ---- | ------------------------------------------------------------------------------- |
| containSelector | string \| HTMLElement \| Document | document | 否   | 基于哪个容器，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| offsetTop       | string \| number                  | 0        | 否   | 数值默认是 px，也支持 vw/vh                                                     |
| offsetBottom    | string \| number                  | 0        | 否   | 数值默认是 px，也支持 vw/vh                                                     |

## Sticky Slots

### children

```tsx
<FxSticky>自定义内容</FxSticky>
```

## StickyView

粘性布局。

## StickyView Props

| 属性            | 类型                              | 默认值   | 必填 | 说明                                                                            |
| --------------- | --------------------------------- | -------- | ---- | ------------------------------------------------------------------------------- |
| activeIndex     | number                            | 0        | 否   | 当前布局中展现的子项 index                                                      |
| containSelector | string \| HTMLElement \| Document | document | 否   | 基于哪个容器，如果是 string，则为可以被 document.querySelector(selector) 获取到 |
| offsetTop       | string \| number                  | 0        | 否   | 数值默认是 px，也支持 vw/vh                                                     |

## StickyView Events

| 事件     | 描述       | 回调函数参数                     | TypeScript 函数    |
| -------- | ---------- | -------------------------------- | ------------------ |
| onChange | 切换时触发 | (activeIndex: number) 当前项索引 | StickyViewOnChange |

## StickyView Slots

### children

注：其中只可放置 [StickyViewItem](./Sticky.md#stickyviewitem-props) 组件，否则会导致未定义的行为。

```tsx
<FxGroup title="Sticky View">
  <FxStickyView className="exp-sticky-box" onChange={onChange}>
    <FxStickyView.Item name="Sticky 1">
      <div className="exp-sticky-box-1"></div>
    </FxStickyView.Item>
    <FxStickyView.Item name="Sticky 2">
      <div className="exp-sticky-box-2"></div>
    </FxStickyView.Item>
    <FxStickyView.Item name="Sticky 3">
      <div className="exp-sticky-box-3"></div>
    </FxStickyView.Item>
    <FxStickyView.Item name="Sticky 4">
      <div className="exp-sticky-box-4"></div>
    </FxStickyView.Item>
  </FxStickyView>
</FxGroup>
```

## StickyViewItem Props

| 属性 | 类型   | 默认值 | 必填 | 说明                 |
| ---- | ------ | ------ | ---- | -------------------- |
| name | string |        | 是   | 分组名，也应用于吸附 |

## StickyViewItem Slots

### children

```tsx
<FxStickyView.Item name="Sticky 1">
  <div className="exp-sticky-box-1"></div>
</FxStickyView.Item>
```
