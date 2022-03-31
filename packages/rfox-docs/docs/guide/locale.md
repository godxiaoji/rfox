# 国际化

## 简介

组件库默认的文案语言是中文，支持多语言切换，目前支持 **中文** 和 **英文**。

## ConfigProvider

如果想要使用英文：

```tsx
import React from 'react'
import ReactDOM from 'react-dom'
import { FxConfigProvider } from 'rfox'
import enUS from 'rfox/es/locale/lang/en-US'
import App from './App'

ReactDOM.render(
  <FxConfigProvider locale={enUS}>
    <App />
  </FxConfigProvider>,
  document.getElementById('root')
)
```

注：

- 也可以对语言包做部分修改后传入。
