import { FxBackTop, FxGroup } from '@/index'

export default function ExpBackTop() {
  return (
    <>
      <FxGroup title="基础用法">
        <ul className="exp-backTop-box">
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
          <li>Scroll to bottom 往下滑</li>
        </ul>
      </FxGroup>
      <FxBackTop />
      <FxBackTop offset={[0, -50]}>UP</FxBackTop>
    </>
  )
}
