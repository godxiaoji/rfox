# NavBar 导航栏

<CodeDemo name="NavBar">

<<< @/../../rfox-demo/src/components/Navigation/NavBar/index.tsx

</CodeDemo>

## Import

```js
import { FxNavBar } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

### Import Type

组件导出的类型定义：

```ts
import type {
  NavBarButtonOption,
  NavBarOnButtonClick,
  NavBarOnTitleDbClick
} from 'rfox'
```

## Props

| 属性         | 类型                 | 默认值 | 必填 | 说明                                   |
| ------------ | -------------------- | ------ | ---- | -------------------------------------- |
| title        | string               | ''     | 否   | 标题                                   |
| showBack     | boolean              | false  | 否   | 是否展示返回按钮                       |
| showHome     | boolean              | false  | 否   | 是否展示首页按钮                       |
| leftButtons  | NavBarButtonOption[] | []     |      | 左侧按钮列表，优先级高于首页和返回按钮 |
| rightButtons | NavBarButtonOption[] | []     |      | 右侧按钮列表                           |
| iconOnly     | boolean              | true   | 否   | 是否展示纯图标按钮                     |

### NavBarButtonOption 的结构

```ts
type NavBarButtonOption = {
  text: string
  icon?: IconData
  type?: StateType
}

const options: NavBarButtonOption[] = [{ icon: 'MenuOutlined', text: '菜单' }]
```

其中图标，使用 [Icon](./Icon.md) 组件。

## Events

| 事件               | 描述                                 | 回调函数参数                            | TypeScript 函数      |
| ------------------ | ------------------------------------ | --------------------------------------- | -------------------- |
| onBackClick        | 返回按钮点击时出发                   | payload: Payload, buttonEl: HTMLElement | NavBarOnButtonClick  |
| onHomeClick        | 到首页按钮点击时触发                 | payload: Payload, buttonEl: HTMLElement | NavBarOnButtonClick  |
| onTitleDbclick     | 标题双击时触发，可配合做双击返回顶部 | titleEl: HTMLElement                    | NavBarOnTitleDbClick |
| onLeftButtonClick  | 左侧按钮点击时触发                   | payload: Payload, buttonEl: HTMLElement | NavBarOnButtonClick  |
| onRightButtonClick | 右侧按钮点击时触发                   | payload: Payload, buttonEl: HTMLElement | NavBarOnButtonClick  |

### Payload

```ts
type Payload = {
  item: {
    text: string
  }
  index: number
}
```

| 参数      | 类型   | 描述             |
| --------- | ------ | ---------------- |
| item.text | string | 点击按钮的文本   |
| index     | number | 点击按钮的索引值 |

## Slots

### 左侧/右侧区域自定义（renderLeft/renderRight）

```tsx
<FxNavBar
  title="标题"
  showBack
  showHome
  renderLeft={() => (
    <div className="exp-navBar-left">
      <FxButton type="primary" icon="LeftOutlined" size="small">
        返回
      </FxButton>
    </div>
  )}
  renderRight={() => (
    <div className="exp-navBar-right">
      <FxButton type="primary" icon="MenuOutlined" size="small">
        菜单
      </FxButton>
    </div>
  )}
/>
```
