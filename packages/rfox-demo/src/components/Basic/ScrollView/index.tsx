import {
  FxScrollView,
  FxGroup,
  ScrollViewOnRefreshing,
  ScrollViewOnScrollToLower,
  ScrollViewOnScrollToUpper,
  showToast
} from '@/index'

export default function ExpScrollView() {
  const onRefreshing: ScrollViewOnRefreshing = (res, done) => {
    setTimeout(() => {
      done()
    }, 2000)
  }

  const onScrollUpper: ScrollViewOnScrollToUpper = ({ direction }) => {
    showToast(`滚动到 ${direction}`)
  }

  const onScrollLower: ScrollViewOnScrollToLower = ({ direction }) => {
    showToast(`滚动到 ${direction}`)
  }

  return (
    <>
      <FxGroup title="垂直滚动">
        <FxScrollView className="exp-scrollView-box" scrollY>
          <div className="exp-scrollView-h-400">
            <p>垂直滚动条</p>
            <p>scrollY="true"</p>
          </div>
        </FxScrollView>
      </FxGroup>
      <FxGroup title="水平滚动">
        <FxScrollView className="exp-scrollView-box" scrollX>
          <div className="exp-scrollView-w-750">
            <p>水平滚动条 scrollX="true"</p>
          </div>
        </FxScrollView>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxScrollView
          className="exp-scrollView-box"
          scrollX
          scrollY
          onScrollToUpper={onScrollUpper}
          onScrollToLower={onScrollLower}
        >
          <div className="exp-scrollView-wh">
            <p>垂直水平滚动条</p>
            <p>scrollY="true"</p>
            <p>scrollX="true"</p>
            <p>监听到顶/底/最左/最右的事件</p>
          </div>
        </FxScrollView>
      </FxGroup>
      <FxGroup title="下拉刷新">
        <FxScrollView
          className="exp-scrollView-box"
          enablePullDirections={['down', 'right', 'up', 'left']}
          scrollY
          onRefreshing={onRefreshing}
        >
          <div className="exp-scrollView-h-400">
            <p>开启4个方向的拉动刷新</p>
            <p>scrollY="true"</p>
            <p>enablePullDirections="['down', 'right', 'up', 'left']"</p>
            <p>由于有 scrollY，上拉刷新要先滚到最底部</p>
          </div>
        </FxScrollView>
      </FxGroup>
      <FxGroup title="下拉刷新（自定义指示器）">
        <FxScrollView
          className="exp-scrollView-box"
          enablePullDirections="down"
          scrollY
          onRefreshing={onRefreshing}
          renderIndicator={slotProps => (
            <>
              方向：{slotProps.pullDirection} 状态：{slotProps.pullRefreshState}
            </>
          )}
        >
          <div className="exp-scrollView-h-400">
            <p>自定下拉义指示器</p>
            <p>scrollY="true"</p>
            <p>enablePullDirections="down"</p>
          </div>
        </FxScrollView>
      </FxGroup>
    </>
  )
}
