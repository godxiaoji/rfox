import {
  FxTabView,
  FxScrollView,
  FxEmpty,
  FxGroup,
  ScrollViewOnRefreshing
} from '@/index'

export default function ExpTabView() {
  const onRefreshing: ScrollViewOnRefreshing = (res, done) => {
    setTimeout(() => {
      done()
    }, 2000)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxTabView className="exp-tabView">
          <FxTabView.Item name="Tab 1">
            <FxScrollView
              className="exp-tabView-scroll-view"
              enablePullDirections={['down']}
              scrollY
              scrollX
              onRefreshing={onRefreshing}
            >
              <FxEmpty
                className="exp-tabView-empty"
                description="Tab 1 下拉刷新"
              ></FxEmpty>
            </FxScrollView>
          </FxTabView.Item>
          <FxTabView.Item name="Tab 2">
            <FxEmpty
              className="exp-tabView-empty"
              description="Tab 2"
            ></FxEmpty>
          </FxTabView.Item>
        </FxTabView>
      </FxGroup>
      <FxGroup title="垂直">
        <FxTabView className="exp-tabView" initialVertical scrollThreshold={1}>
          <FxTabView.Item name="Tab 1">
            <FxScrollView
              className="exp-tabView-scroll-view"
              enablePullDirections={['down']}
              scroll-y
              onRefreshing={onRefreshing}
            >
              <FxEmpty
                className="exp-tabView-empty"
                description="Tab 1 下拉刷新"
              ></FxEmpty>
            </FxScrollView>
          </FxTabView.Item>
          <FxTabView.Item name="Tab 2">
            <FxEmpty
              className="exp-tabView-empty"
              description="Tab 2"
            ></FxEmpty>
          </FxTabView.Item>
        </FxTabView>
      </FxGroup>
    </>
  )
}
