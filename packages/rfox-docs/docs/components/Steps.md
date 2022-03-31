# Steps 步骤条

<CodeDemo name="Steps">

<<< @/../../rfox-demo/src/components/Show/Steps/index.tsx

</CodeDemo>

## Import

```js
import { FxSteps, FxStep } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Steps Props

| 属性        | 类型    | 默认值 | 必填 | 说明                 |
| ----------- | ------- | ------ | ---- | -------------------- |
| activeIndex | number  | 0      | 否   | 当前步骤对应的索引值 |
| dot         | boolean | false  | 否   | 是否开启小点样式     |

## Steps Slots

### children

注：其中只可放置 [Step](./Steps.md#step-props) 组件，否则会导致未定义的行为。

```tsx
<fx-steps>
  <FxSteps.Step title="标题">自定义内容</FxSteps.Step>
</fx-steps>
```

## Step Props

| 属性  | 类型   | 默认值 | 必填 | 说明         |
| ----- | ------ | ------ | ---- | ------------ |
| title | string |        | 否   | 步骤子项标题 |

## Step Slots

### 内容（children）

```tsx
<FxSteps.Step title="标题">自定义内容</FxSteps.Step>
```

### 标题（renderTitle）

```tsx
<FxSteps.Step
  renderTitle={() => (
    <>
      【珠海市】【珠海一部】快递小哥正在派件（
      <a href="tel:10000">10000</a>）
    </>
  )}
>
  2021-04-13 11:22:16
</FxSteps.Step>
```

注：优先级高于 Props `title`。

### 步骤标（renderStep）

```tsx
<FxSteps.Step
  key={index}
  title={item.title}
  renderStep={({ finish, active }) => (
    <>
      {finish ? (
        <FxIcon icon="CheckOutlined"></FxIcon>
      ) : active ? (
        <FxIcon icon="LoadingOutlined" spin></FxIcon>
      ) : (
        <></>
      )}
    </>
  )}
>
  {item.content}
</FxSteps.Step>
```

注：只推荐写入 text 和 [Icon](./Icon.md) 组件，其他元素或组件可能会导致未定义的行为。
