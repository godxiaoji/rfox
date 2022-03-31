# Result 结果

<CodeDemo name="Result">

<<< @/../../rfox-demo/src/components/Show/Result/index.tsx

</CodeDemo>

## Import

```js
import { FxResult } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type { ResultType } from 'rfox'
```

## Props

| 属性        | 类型       | 默认值 | 必填 | 说明                                                                |
| ----------- | ---------- | ------ | ---- | ------------------------------------------------------------------- |
| type        | ResultType | 'info' | 否   | 类型，对应不同的提示图标，可选 'info', 'warning', 'success', 'fail' |
| title       | string     | ''     | 否   | 标题                                                                |
| description | string     | ''     | 否   | 小标题，副标题，描述                                                |
| showBack    | boolean    | true   | 否   | 是否显示返回按钮                                                    |
| confirmText | string     | '确定' | 否   | 确认按钮的文字                                                      |
| backText    | string     | '返回' | 否   | 返回按钮的文字                                                      |

## Events

| 事件      | 描述         | 回调函数参数 |
| --------- | ------------ | ------------ |
| onConfirm | 确认按钮点击 | e: Event     |
| onBack    | 返回按钮点击 | e: Event     |

## Slots

### 附加内容（children）

```tsx
<FxResult
  type="fail"
  title="支付失败"
  description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中展现。"
>
  <div className="exp-result-extra">
    在这里可以附加组件元素或者相应的提示文案，样式自定。
  </div>
</FxResult>
```
