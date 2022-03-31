# Progress 进度条

<CodeDemo name="Progress">

<<< @/../../rfox-demo/src/components/Show/Progress/index.tsx

</CodeDemo>

## Import

```js
import { FxProgress } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性       | 类型             | 默认值 | 必填 | 说明                                                                                                |
| ---------- | ---------------- | ------ | ---- | --------------------------------------------------------------------------------------------------- |
| percentage | string \| number |        | 是   | 百分比，例如：50                                                                                    |
| showText   | boolean          | false  | 否   | 是否展示文字                                                                                        |
| fixedBar   | boolean          | false  | 否   | 是否固定进度条宽度，配合 `showText=true` 使用，防止由于文字 5% 和 100% 宽度不一样导致进度条长短不一 |

## Slots

### 内容区（children）

```tsx
<FxProgress percentage="5">
  {({ progress }) => <>{'已抢' + progress}</>}
</FxProgress>
```

注：添加 slot 后 `showText` prop 属性失效。
