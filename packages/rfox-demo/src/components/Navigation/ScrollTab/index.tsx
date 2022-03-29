import { FxScrollTab, FxGroup, ScrollTabOnChange } from '@/index'

const offsetTop = 52
const offsetBottom = 12

export default function ExpScrollTab() {
  const onChange: ScrollTabOnChange = res => {
    console.log('change', res)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxScrollTab
          className="exp-scrollTab-boxs"
          stickyOffsetTop={offsetTop}
          stickyOffsetBottom={offsetBottom}
          onChange={onChange}
        >
          <FxScrollTab.Item name="Dust Red">
            <div className="exp-scrollTab-box box-1"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Volcano">
            <div className="exp-scrollTab-box box-2"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Sunset Orange">
            <div className="exp-scrollTab-box box-3"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Calendula Gold">
            <div className="exp-scrollTab-box box-4"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Sunrise Yellow">
            <div className="exp-scrollTab-box box-5"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Lime">
            <div className="exp-scrollTab-box box-6"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Polar Green">
            <div className="exp-scrollTab-box box-7"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Cyan">
            <div className="exp-scrollTab-box box-8"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Daybreak Blue">
            <div className="exp-scrollTab-box box-9"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Geek Blue">
            <div className="exp-scrollTab-box box-10"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Golden Purple">
            <div className="exp-scrollTab-box box-11"></div>
          </FxScrollTab.Item>
          <FxScrollTab.Item name="Magenta">
            <div className="exp-scrollTab-box box-12"></div>
          </FxScrollTab.Item>
        </FxScrollTab>
      </FxGroup>
    </>
  )
}
