import { FxStickyView, FxGroup, StickyViewOnChange } from '@/index'

export default function ExpSticky() {
  const onChange: StickyViewOnChange = res => {
    console.log('change', res)
  }

  return (
    <>
      <FxGroup title="Sticky View">
        <FxStickyView className="exp-sticky-box" onChange={onChange}>
          <FxStickyView.Item name="Sticky 1">
            <div className="exp-sticky-box-1"></div>
          </FxStickyView.Item>
          <FxStickyView.Item name="Sticky 2">
            <div className="exp-sticky-box-2"></div>
          </FxStickyView.Item>
          <FxStickyView.Item name="Sticky 3">
            <div className="exp-sticky-box-3"></div>
          </FxStickyView.Item>
          <FxStickyView.Item name="Sticky 4">
            <div className="exp-sticky-box-4"></div>
          </FxStickyView.Item>
        </FxStickyView>
      </FxGroup>
    </>
  )
}
