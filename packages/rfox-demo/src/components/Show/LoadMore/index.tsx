import { FxLoadMore, FxGroup } from '@/index'

export default function ExpLoadMore() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxLoadMore />
      </FxGroup>
      <FxGroup title="自定义内容">
        <FxLoadMore>暂无数据</FxLoadMore>
      </FxGroup>
      <FxGroup title="loading=true">
        <FxLoadMore loading>加载中...</FxLoadMore>
      </FxGroup>
    </>
  )
}
