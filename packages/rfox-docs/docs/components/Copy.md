# Copy 复制

注：

- 这是个包裹组件，本身不带展示效果，怎么展示通过 `slot` 来实现
- 不依赖 Flash，所以在某些老版本浏览器上可能失败

<CodeDemo name="Copy">

<<< @/../../rfox-demo/src/components/Other/Copy/index.tsx

</CodeDemo>

## Import

```js
import { FxCopy } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性 | 类型   | 默认值 | 必填 | 说明           |
| ---- | ------ | ------ | ---- | -------------- |
| text | string |        | 是   | 需要复制的文本 |

## Events

| 事件      | 描述           | 回调函数参数            |
| --------- | -------------- | ----------------------- |
| onSuccess | 复制成功时触发 | text: string 复制的文本 |
| onError   | 复制出错时触发 | e: Error                |

## Slots

```tsx
<FxCopy text="复制的文本">点击复制</FxCopy>
```
