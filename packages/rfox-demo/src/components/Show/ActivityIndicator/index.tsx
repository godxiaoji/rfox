import { FxActivityIndicator, FxGroup } from '@/index'

export default function ExpActivityIndicator() {
  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-activityIndicator-box">
          <FxActivityIndicator />
        </div>
      </FxGroup>
      <FxGroup title="颜色 color=#ff4d4f">
        <div className="exp-activityIndicator-box">
          <FxActivityIndicator color="#ff4d4f" />
        </div>
      </FxGroup>
      <FxGroup title="大小 size=48">
        <div className="exp-activityIndicator-box">
          <FxActivityIndicator size="48" />
        </div>
      </FxGroup>
    </>
  )
}
