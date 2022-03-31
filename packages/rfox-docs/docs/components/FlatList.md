# FlatList 虚拟列表

注：

- 需要给 `FlatList` 组件一个固定高度，通过 CSS 设置 height。
- 如果列表内容存在不固定宽高的图片，由于图片加载的机制，每个 item 的 DOM 渲染了，图片可能还未加载，导致每个 item 的位置计算错误，所以作为调用方，需要将未加载的图片用样式固定住。在已知宽高比（比如常见的正方形商品图），可以使用 `Image` 组件内置 `aspectRatio` 来固定图片宽高。
- 该组件使用的是 Virtual List 虚拟列表技术，将渲染的数据控制在一定范围内，在海量数据滚动中达到更好的性能和体验。
- 如果数据量过大（大几百以上），强烈建议设置 `itemSize`，未设置时使用动态计算高度会带来渲染性能的下降。

<CodeDemo name="FlatList">

<<< @/../../rfox-demo/src/components/Show/FlatList/index.tsx

</CodeDemo>

## Import

```js
import { FxFlatList } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type {
  FlatListOnRefreshing,
  FlatListOnScroll,
  FlatListOnEndReached,
  FlatListOnVisibleItemsChange,
  FlatListRef
} from 'rfox'
```

## Props

| 属性                     | 类型                                | 默认值 | 必填 | 说明                                                                                                                                                                                |
| ------------------------ | ----------------------------------- | ------ | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ids                      | (string \| number)[]                |        | 是   | id 列表，会在渲染的时候作为参数回调                                                                                                                                                 |
| horizontal               | boolean                             | false  | 否   | 设置为 true 则变为水平布局模式                                                                                                                                                      |
| itemSize                 | number \| (index: number) => number |        | 否   | 设置列表项尺寸                                                                                                                                                                      |
| endReachedThreshold      | number                              | 0.5    | 否   | 决定当距离内容最底部还有多远时触发 onEndReached 回调。注意此参数是一个比值而非像素单位。比如，0.5 表示距离内容最底部的距离为当前列表可见长度的 50%时触发                            |
| enablePullRefresh        | boolean                             | false  | 否   | 是否开启下拉刷，如果时水平列表则为左拉刷新，搭配 `onRefreshing` 事件使用新                                                                                                          |
| lowerLoading             | boolean                             | false  | 否   | 开启后会在列表最后展示加载更多效果，配合 `onEndReached` 事件加载无限列，当多次加载完所有数据后设置为 false 关闭                                                                     |
| initialWaterfallCount    | number                              | 1      | 否   | 开启瀑布流展示并设置瀑布流列数，支持 1 ~ 5 列，1 就是没开                                                                                                                           |
| approvedItemVisibleScale | number                              | 0.5    | 否   | 可选 0-1， 主要是配合 `onVisibleItemsChange` 事件使用，0.5 表示每项需要展示超过自身 50%才认为是可视 visible=true，在一些数数据统计和展示触发行为常用                                |
| preLoad                  | number                              | 1.5    | 否   | 预加载屏数，1.5 标识在在可视窗口之外再预加载大于 1.5 个窗口的数据，防止滚动过程中产生的白屏。预加载的屏数设置越高，加载的数据越多，高速滚动产生白屏的几率越小，但是相应性能消耗更大 |

## Events

| 事件                 | 描述                     | 回调函数参数                                                                                                                                  | TypeScript 函数              |
| -------------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| onVisibleItemsChange | 列表项可视情况变化时触发 | payload: { items: { index: number, visible: boolean }[] }                                                                                     | FlatListOnVisibleItemsChange |
| onEndReached         | 滚动到末尾时触发         | payload: { distanceFromEnd: number } 其中 distanceFromEnd 为距离末尾的距离，单位 px                                                           | FlatListOnEndReached         |
| onScroll             | 滚动时触发               | payload: { scrollLeft: number, scrollTop: number, scrollWidth: number, scrollHeight: number }                                                 | FlatListOnScroll             |
| onRefreshing         | 下拉刷新时触发           | payload: ({ pullDirection: 'up' \| 'right' \| 'down' \| 'left' }, done: () =>void) 其中 pullDirection 指下拉的方向，done 指刷新完毕回调的函数 | FlatListOnRefreshing         |

### onVisibleItemsChange 的 items 参数

| item    | 类型    | 说明                                                                                     |
| ------- | ------- | ---------------------------------------------------------------------------------------- |
| visible | boolean | 这里的可视情况受到 `approvedItemVisibleScale` 字段影响，可以配置它来达到你认可的可视情况 |
| index   | number  | 第 index 项                                                                              |

## Slots

### 列表项（render）

```tsx
<FxFlatList
  className="exp-flatList-box"
  ids={list.map(v => v.id)}
  render={({ index }) => (
    <div className="exp-flatList-item">{list[index].text}</div>
  )}
/>
```

### 列表为空（renderEmpty）

```tsx
<FxFlatList
  className="exp-flatList-box"
  ids={[]}
  renderEmpty={() => <FxEmpty description="暂无列表" />}
  render={() => <></>}
/>
```

### 分割线（renderSeparator）

```tsx
<FxFlatList
  className="exp-flatList-box"
  ids={list.map(v => v.id)}
  render={({ index }) => (
    <div className="exp-flatList-item">{list[index].text}</div>
  )}
  renderSeparator={({ index }) =>
    index < list.length - 1 ? (
      <div className="exp-flatList-item-separator"></div>
    ) : (
      <></>
    )
  }
/>
```

注： `itemSize` 设定值需要把分割线也考虑进去。

## Methods

| 方法名            | 说明                                                 | 参数                                                                       |
| ----------------- | ---------------------------------------------------- | -------------------------------------------------------------------------- |
| scrollToIndex     | 将位于指定位置的元素滚动到可视区的指定位置           | ({ index: number, animated: boolean, viewPosition: ViewPosition }) => void |
| scrollTo          | 滚动列表到指定的偏移，单位 px                        | ({ offset: number, animated: boolean }) => void                            |
| scrollToEnd       | 滚动到底部                                           | ( animated: boolean ) => void                                              |
| recordInteraction | 主动通知列表发生了一个事件，以使列表重新计算可视区域 | () => void                                                                 |

### scrollToIndex 的参数

| 属性         | 类型    | 默认值  | 必填 | 说明                                                          |
| ------------ | ------- | ------- | ---- | ------------------------------------------------------------- |
| index        | number  |         | 是   | 列表第 `index` 项滚动到可视区的指定位置                       |
| animated     | boolean | true    | 否   | 滚动过程中是否使用过度动画                                    |
| viewPosition | string  | 'start' | 否   | 'start'/'center'/'end'/0/0.5/1 显示在屏幕的头部/中间/末尾位置 |
