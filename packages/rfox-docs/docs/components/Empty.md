# Empty 空状态

<CodeDemo name="Empty">

<<< @/../../rfox-demo/src/components/Show/Empty/index.tsx

</CodeDemo>

## Import

```js
import { FxEmpty } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { EmptyType } from 'rfox'
```

## Props

| 属性        | 类型      | 默认值    | 必填 | 说明                                                   |
| ----------- | --------- | --------- | ---- | ------------------------------------------------------ |
| description | string    |           | 否   | 描述文字                                               |
| type        | EmptyType | 'default' | 否   | 图片类型，可选 'default', 'error', 'network', 'search' |

## Slots

### 底部（children）

```tsx
<FxEmpty description="网络错误" type="network">
  <FxButton type="primary" size="small">
    刷新试试
  </FxButton>
</FxEmpty>
```

### 图片区域（renderImage）

```tsx
<FxEmpty
  description="网站被小猫咪吃了"
  renderImage={() => (
    <FxImage
      className="exp-empty-custom-image"
      src="https://cdn.fox2.cn/vfox/swiper/different-1.jpg"
    />
  )}
/>
```

注：优先级比内置图片高。
