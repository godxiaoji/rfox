import { FxTab, FxGroup, TabOnChange, showToast } from '@/index'
import { shortTabList, tabList, mixTabList, subTabList } from './data'

export default function ExpTab() {
  const onChange: TabOnChange = (value, index) => {
    console.log('change', value, index)
    showToast(`切换到第${index + 1}个`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-tab-box">
          <FxTab options={shortTabList} />
        </div>
      </FxGroup>
      <FxGroup title="滚动（阈值 scrollThreshold = 4）">
        <div className="exp-tab-box">
          <FxTab options={tabList} />
        </div>
      </FxGroup>
      <FxGroup title="Mix">
        <div className="exp-tab-box">
          <FxTab options={mixTabList} initialActiveValue={2} />
        </div>
      </FxGroup>
      <FxGroup title="带副标签">
        <div className="exp-tab-box">
          <FxTab options={subTabList} />
        </div>
      </FxGroup>
      <FxGroup title="change 事件">
        <div className="exp-tab-box">
          <FxTab options={shortTabList} onChange={onChange} />
        </div>
      </FxGroup>
    </>
  )
}
