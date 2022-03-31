# Swiper/SwiperItem 轮播

<CodeDemo name="Swiper">

<<< @/../../rfox-demo/src/components/Show/Swiper/index.tsx

</CodeDemo>

## Import

```js
import { FxSwiper, FxSwiperItem } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { SwiperOnChange, SwiperOnAnimated } from 'rfox'
```

## Swiper Props

| 属性                 | 类型    | 默认值                     | 必填 | 说明                                     |
| -------------------- | ------- | -------------------------- | ---- | ---------------------------------------- |
| indicatorDots        | boolean | false                      | 否   | 是否显示面板指示点                       |
| indicatorColor       | color   | 'rgba(0, 0, 0, 0.4)'       | 否   | 指示点颜色                               |
| indicatorCctiveColor | color   | 'rgba(255, 255, 255, 0.8)' | 否   | 当前选中的指示点颜色                     |
| autoplay             | boolean | false                      | 否   | 是否自动切换                             |
| activeIndex          | number  | 0                          | 否   | 当前所在滑块的 index                     |
| interval             | number  | 5000                       | 否   | 自动切换时间间隔                         |
| duration             | number  |                            | 否   | 滑动动画时长，没有设置时使用内置调优时长 |
| initialCircular      | boolean | false                      | 否   | 初始设置是否循环切换                     |
| initialVertical      | boolean | false                      | 否   | 初始设置是否为纵向滑动                   |
| navigationButtons    | boolean | false                      | 否   | 是否展示上一页/下一页按钮                |

## Swiper Events

| 事件       | 描述                         | 回调函数参数                                | TypeScript 函数  |
| ---------- | ---------------------------- | ------------------------------------------- | ---------------- |
| onChange   | 切换时触发                   | payload: { activeIndex: number } 当前项索引 | SwiperOnChange   |
| onAnimated | 动画结束时触发               | payload: { activeIndex: number } 当前项索引 | SwiperOnAnimated |
| onClick    | 点击时触发，为了区分滑动情况 |                                             |                  |

## Swiper Slots

### children

注：其中只可放置 [SwiperItem](./Swiper.md#swiperitem-slots) 组件，否则会导致未定义的行为。

```tsx
<fx-swiper>
  <FxSwiper.Item>
    <FxImage src="a.jpg" />
  </FxSwiper.Item>
  <FxSwiper.Item>
    <FxImage src="b.jpg" />
  </FxSwiper.Item>
  ...
</fx-swiper>
```

## SwiperItem Slots

### children

```tsx
<FxSwiper.Item>
  <FxImage src="b.jpg" />
</FxSwiper.Item>
```
