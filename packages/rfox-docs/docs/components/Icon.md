# Icon 图标

<CodeDemo name="Icon">

<<< @/../../rfox-demo/src/components/Basic/Icon/index.tsx

</CodeDemo>

## Import

```js
import { FxIcon } from 'rfox'
```

具体的引入方式可以参考[引入组件](../guide/import.md)。

## Props

| 属性   | 类型                | 默认值 | 必填 | 说明                                           |
| ------ | ------------------- | ------ | ---- | ---------------------------------------------- |
| icon   | string \| ReactNode |        | 是   | 设置图标的名称（Sprite）或者传入自定义图标组件 |
| size   | number              | 24     | 否   | icon 的大小                                    |
| width  | number              |        | 否   | icon 的宽度                                    |
| height | number              |        | 否   | icon 的高度                                    |
| color  | string              |        | 否   | icon 的颜色                                    |

## 自定义 SVG 图标

### Vite 导入 SVG

`Vite` 开发者可以通过 [rollup-plugin-svg-sprites](https://github.com/godxiaoji/rollup-plugin-svg-sprites) 来将 SVG 作为 React 组件导入。

`vite.config.js`:

```js
import svgSprites from 'rollup-plugin-svg-sprites'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgSprites({
      exclude: ['node_modules/**']
    })
  ]
})
```

在单文件中：

```tsx
import QqSVG from './QqSVG.svg?jsx'

export function MyIcon() {
  return <FxIcon className="exp-icon-icon color-primary" icon={QqSVG} />
}
```

TypeScript 支持和更多用法可以查看[文档](https://github.com/godxiaoji/rollup-plugin-svg-sprites)。

### 批量导入 SVG

对于一个批量文件夹形式的图标集，可以通过 [svg-sprites-cli](https://github.com/godxiaoji/svg-sprites-cli) 转为 js。

#### 1. 安装 svg-sprites-cli

```sh
npm i -D svg-sprites-cli
```

#### 2. 通过指令执行：

```sh
svgjs -d ./icons -o path/to/lib/svg.js
```

假设 icons 目录下有：

```
- icons
  - Tab
    - home.svg
    - find.svg
    - user.svg
  - loading.svg
```

默认规则转出来的 id 为 `icon-homeTab`, `icon-findTab`, `icon-userTab`, `icon-loading`。

#### 3. 在入口中引入 js：

`main.ts`:

```js
import { FC } from 'react'
import { FxButton } from '@fox2/rfox'
import '@fox2/rfox/es/style'

import 'path/to/lib/svg.js'

const App: FC = () => (
  <div className="App">
    <FxButton type="primary">Button</FxButton>
  </div>
)

export default App
```

#### 4. Icon 组件通过展示

```tsx
<FxIcon icon="icon-homeTab" />
```

### 附录：示例图标库

组件示例使用了一套图标库，涵盖了一些日常使用图标，具体效果和使用方式可以查看 [@fox2/vfox-icons](https://github.com/godxiaoji/vfox/tree/main/packages/vfox-icons)。
