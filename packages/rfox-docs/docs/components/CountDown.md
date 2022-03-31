# CountDown 倒计时

注：

- 本组件没有指定样式，默认情况下可对文字样式进行自定义。

<CodeDemo name="CountDown">

<<< @/../../rfox-demo/src/components/Show/CountDown/index.tsx

</CodeDemo>

## Import

```js
import { FxCountDown } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type {
  CountTime,
  CountDownOnEnd,
  CountDownOnPause,
  CountDownOnResume,
  CountDownRef
} from 'rfox'
```

## Props

| 属性          | 类型    | 默认值 | 必填 | 说明                    |
| ------------- | ------- | ------ | ---- | ----------------------- |
| initialTiming | number  | 99     | 否   | 初始倒计时时长，单位 ms |
| showDays      | boolean | false  | 否   | 是否显示天数            |

## Events

| 事件     | 描述           | 回调函数参数                                                                                              | TypeScript 函数   |
| -------- | -------------- | --------------------------------------------------------------------------------------------------------- | ----------------- |
| onPause  | 计时暂停时触发 | payload: { remainTime: number } remainTime 剩余时间，单位 ms                                              | CountDownOnPause  |
| onResume | 恢复计时时触发 | payload: { remainTime: number } remainTime 剩余时间，单位 ms                                              | CountDownOnResume |
| onEnd    | 计时结束时触发 | payload: { startTime: number, endTime: number } startTime 本地开始时间戳，endTime 本地结束时间戳，单位 ms | CountDownOnEnd    |

## Methods

| 方法名 | 说明             | 参数                                    |
| ------ | ---------------- | --------------------------------------- |
| pause  | 暂停倒计时       |                                         |
| resume | 恢复倒计时       |                                         |
| pause  | 主动取消动画变化 | timing: number 重置为多少 ms 开始倒计时 |

## Slots

### render(countTime)

```tsx
<FxCountDown
  initialTiming={300 * 1000}
  render={countTime =>
    `${countTime.fullHours}时${countTime.minutes}分${countTime.seconds}秒`
  }
/>
```

### countTime 的结构

| 字段名             | 类型   | 说明                                        |
| ------------------ | ------ | ------------------------------------------- |
| time               | number | 持续时间                                    |
| days               | string | 天数                                        |
| hours              | string | 小时数（<24），需要跟 days 配合，保留 2 位  |
| fullHours          | string | 小时数，含天数综合，如 '124'，至少保留 2 位 |
| thousandsFullHours | string | 千分位形式的小时数，含天数综合，如 '1,234'  |
| minutes            | string | 分钟数，保留 2 位                           |
| seconds            | string | 秒钟数，保留 2 位                           |
| milliseconds       | string | 毫秒数，保留 3 位                           |
