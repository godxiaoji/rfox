# Rfox

基于 React 17.x 移动端组件库。

## 简介

1. 该组件库是基于 [Vfox](https://github.com/godxiaoji/vfox) 的 React 实现。
2. 现阶段现学现写的，所以不具备用于生产的条件，组件库会不断完善。
3. 该版本会尽量抽出非框架逻辑，以做到和 Vfox 的共用。
4. 该版本尽量属性参数和接口的设计对齐 Vfox，但是由于框架不同，使用有些许不同：

   | 属性           | Vue                                                                | React                                                 |
   | -------------- | ------------------------------------------------------------------ | ----------------------------------------------------- |
   | 事件           | `<FxCell @closeClick="foo" />`                                     | `<FxCell onCloseClick={foo} />`                       |
   | 默认插槽       | `<FxCell>插槽内容</FxCell>`                                        | `<FxCell>插槽内容</FxCell>`                           |
   | 其他插槽       | `<FxCell><template #icon>插槽内容</template></FxCell>`             | `<FxCell renderIcon={() => (<>{ '插槽内容' }</>)} />` |
   | 带参数默认插槽 | `<FxCell><template #default="data">{{ data }}</template></FxCell>` | `<FxCell render={(data) => (<>{ data }</>)} />`       |
   | 带参数其他插槽 | `<FxCell><template #icon="data">{{ data }}</template></FxCell>`    | `<FxCell renderIcon={(data) => (<>{ data }</>)} />`   |

## 体验网址

[Demo](https://cdn.fox2.cn/rfox/)

## LICENSE

[MIT](https://github.com/godxiaoji/rfox/blob/main/LICENSE)
