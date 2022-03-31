# Skeleton 骨架屏

<CodeDemo name="Skeleton">

<<< @/../../rfox-demo/src/components/Show/Skeleton/index.tsx

</CodeDemo>

## Import

```js
import { FxSkeleton } from 'rfox'
```

如果想要自定义布局，可以再引入子组件：

```js
import {
  SkeletonAvatar,
  SkeletonImage,
  SkeletonTitle,
  SkeletonParagraph,
  SkeletonButton
} from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { SkeletonAvatarShape, SkeletonButtonShape } from 'rfox'
```

## Skeleton Props

| 属性         | 类型                | 默认值    | 必填 | 说明                                        |
| ------------ | ------------------- | --------- | ---- | ------------------------------------------- |
| loading      | boolean             | true      | 否   | 是否显示骨架屏，传 false 时会展示子组件内容 |
| avatar       | boolean             | false     | 否   | 是否显示头像占位图                          |
| animated     | boolean             | false     | 否   | 是否开启动画                                |
| avatarShape  | SkeletonAvatarShape | 'default' | 否   | 可选 'default', 'circle'                    |
| buttonShape  | SkeletonButtonShape | 'default' | 否   | 可选 'default', 'round'                     |
| paragraphRow | number              | 3         | 否   | 段落占位图行数                              |

## Skeleton Slots

### children

```tsx
<FxSkeleton avatar loading={loading}>
  <div className="exp-skeleton-sub-component">
    <FxIcon icon="HeartFilled" size="32" />
    <h4 className="title">hello World</h4>
    <p className="paragraph">简单不先于复杂，而是在复杂之后。</p>
  </div>
</FxSkeleton>
```

### 骨架屏重新布局（renderLayout）

还可以通过 `renderLayout` 重新组合骨架屏，目前提供 [SkeletonAvatar](./Skeleton.md#skeletonavatar-props)、[SkeletonImage](./Skeleton.md#skeletonimage-props)、[SkeletonTitle](./Skeleton.md#skeletontitle-props)、[SkeletonParagraph](./Skeleton.md#skeletonparagraph-props)、[SkeletonButton](./Skeleton.md#skeletonbutton-props) 5 款子组件。

```tsx
<FxSkeleton
  className="exp-skeleton-custom"
  buttonShape={buttonShape}
  renderLayout={() => (
    <>
      <FxSkeleton.Image />
      <FxSkeleton.Title />
      <FxSkeleton.Paragraph row={2} />
      <FxSkeleton.Button />
    </>
  )}
></FxSkeleton>
```

## SkeletonAvatar Props

| 属性     | 类型                | 默认值    | 必填 | 说明                                     |
| -------- | ------------------- | --------- | ---- | ---------------------------------------- |
| shape    | SkeletonAvatarShape | 'default' | 否   | 可选 'default', 'circle'                 |
| animated | boolean             | false     | 否   | 是否开启动画，仅在单独使用头像骨架时生效 |

## SkeletonImage Props

| 属性     | 类型    | 默认值 | 必填 | 说明                                     |
| -------- | ------- | ------ | ---- | ---------------------------------------- |
| animated | boolean | false  | 否   | 是否开启动画，仅在单独使用头像骨架时生效 |

## SkeletonTitle Props

| 属性     | 类型    | 默认值 | 必填 | 说明                                     |
| -------- | ------- | ------ | ---- | ---------------------------------------- |
| animated | boolean | false  | 否   | 是否开启动画，仅在单独使用头像骨架时生效 |

## SkeletonParagraph Props

| 属性     | 类型    | 默认值 | 必填 | 说明                                     |
| -------- | ------- | ------ | ---- | ---------------------------------------- |
| row      | number  | 3      | 否   | 段落占位图行数                           |
| animated | boolean | false  | 否   | 是否开启动画，仅在单独使用头像骨架时生效 |

## SkeletonButton Props

| 属性     | 类型                | 默认值    | 必填 | 说明                                     |
| -------- | ------------------- | --------- | ---- | ---------------------------------------- |
| shape    | SkeletonButtonShape | 'default' | 否   | 可选 'default', 'round'                  |
| animated | boolean             | false     | 否   | 是否开启动画，仅在单独使用头像骨架时生效 |
