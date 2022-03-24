import { FxSideTab, FxGroup } from '@/index'
import { mixTabList, tabList } from '../Tab/data'

export default function ExpSideTab() {
  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-sideTab-box">
          <FxSideTab options={tabList} />
        </div>
      </FxGroup>
      <FxGroup title="Mix">
        <div className="exp-sideTab-box">
          <FxSideTab options={mixTabList} />
        </div>
      </FxGroup>
    </>
  )
}
