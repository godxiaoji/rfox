# 快速上手

## 使用 Vite 创建项目

```sh
# npm 6.x
npm create vite@latest my-react-app --template react-ts

# npm 7+, extra double-dash is needed:
npm create vite@latest my-react-app -- --template react-ts

# yarn
yarn create vite my-react-app --template react-ts

# pnpm
pnpm create vite my-react-app -- --template react-ts
```

## 引入 rfox

```sh
# npm
npm i -S @fox2/rfox

# yarn
yarn add @fox2/rfox

# pnpm
pnpm add @fox2/rfox
```

修改 `src/App.tsx`，引入 rfox 的按钮组件。

```tsx
import { FC } from 'react'
import { FxButton } from '@fox2/rfox'
import '@fox2/rfox/es/style'
// import '@fox2/rfox/es/style/sass' // use sass

const App: FC = () => (
  <div className="App">
    <FxButton type="primary">Button</FxButton>
  </div>
)

export default App
```

## API 调用

API 调用需要先引入对应的组件，方可调用，引用方式同上。

```tsx
import { showToast } from '@fox2/rfox'
import '@fox2/rfox/es/Toast/style'

const App: FC = () => (
  <div className="App">
    <FxButton
      type="primary"
      onClick={() =>
        showToast({
          title: '成功',
          type: 'success',
          duration: 2000
        })
      }
    >
      Button
    </FxButton>
  </div>
)

export default App
```
