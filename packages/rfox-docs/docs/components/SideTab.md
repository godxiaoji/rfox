# SideTab 侧边标签栏

<CodeDemo name="SideTab">

<<< @/../../rfox-demo/src/components/Navigation/SideTab/index.tsx

</CodeDemo>

## Import

```js
import { FxSideTab } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { SideTabOnChange, TabOptions, BadgeOption } from 'rfox'
```

## Props

| 属性        | 类型             | 默认值 | 必填 | 说明                         |
| ----------- | ---------------- | ------ | ---- | ---------------------------- |
| options     | TabOptions       | []     | 是   | tab 数据集                   |
| activeValue | string \| number |        | 否   | 当前激活项的 value 值        |
| color       | string           |        | 否   | 自定义默认态字体和图标颜色   |
| activeColor | string           |        | 否   | 自定义激活态的字体和图标颜色 |

### TabOptions

```ts
type TabOptions = (
  | number
  | string
  | {
      label: string
      value: number | string
      icon?: string | IconData
      activeIcon?: string | IconData
      badge?: BadgeOption
    }
)[]
```

| key        | 类型                | 默认值 | 必填 | 说明                                                       |
| ---------- | ------------------- | ------ | ---- | ---------------------------------------------------------- |
| value      | string \| number    |        | 是   | 唯一值（v-model:active-value 使用）                        |
| label      | string              |        | 是   | 标签名                                                     |
| icon       | string \| Component |        | 否   | 设置图标，使用 [Icon](./Icon.md) 组件，也支持图像 URL      |
| activeIcon | string \| Component |        | 否   | 设置激活态图标，也支持图像 URL，没有设置则沿用 `icon` 属性 |
| badge      | BadgeOption         |        | 否   | 徽标，使用 [Badge](./Badge.md) 组件                        |

```js
const options = [
  {
    value: 1,
    label: '首页',
    icon: 'HomeOutlined',
    badge: '热'
  },
  {
    value: 2,
    label: '搜索',
    icon: 'SearchOutlined',
    badge: {
      dot: true,
      content: 1
    }
  }
]
```

也可以直接设置为 `string[]` 或 `number[]`，如：

```js
const options = ['aaa', 'bbb', 'ccc']
```

将被转为：

```js
const options = [
  {
    value: 'aaa',
    label: 'aaa'
  },
  {
    value: 'bbb',
    label: 'bbb'
  }
  {
    value: 'ccc',
    label: 'ccc'
  }
]
```

注：注意数组项要保持唯一性。

### BadgeOption

```ts
type BadgeOption =
  | number
  | string
  | Partial<{
      color: string
      content: string | number
      offset: number[]
      animated: boolean
      dot: boolean
      maxCount: number
      showZero: boolean
    }>
```

参数主要是基于 [Badge](./Badge.md) 组件的 props，如果传入是 `number` 或者 `string` 则设置直接设置 content 属性。

## Events

| 事件     | 描述                | 回调函数参数                             | TypeScript 函数 |
| -------- | ------------------- | ---------------------------------------- | --------------- |
| onChange | 点击切换 tab 时触发 | (value：string \| number, index: number) | SideTabOnChange |

### onChange 的回调参数

| 参数  | 类型             | 描述                  |
| ----- | ---------------- | --------------------- |
| value | string \| number | 当前激活项的 value 值 |
| index | number           | 当前激活项的索引值    |

## Methods

| 方法名        | 说明                 | 参数                              |
| ------------- | -------------------- | --------------------------------- |
| switchTo      | 切换到指定 Tab       | (value: string \| number) => void |
| switchToIndex | 切换到指定索引的 Tab | (index: number) => void           |
