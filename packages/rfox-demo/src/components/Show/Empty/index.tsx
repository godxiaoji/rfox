import { FxImage, FxButton, FxGroup, FxEmpty } from '@/index'

export default function ExpEmpty() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxEmpty description="暂无内容" />
      </FxGroup>
      <FxGroup title="其他类型">
        <FxEmpty description="出错了" type="error" />
        <FxEmpty description="网络错误" type="network" />
        <FxEmpty description="搜索不到" type="search" />
      </FxGroup>
      <FxGroup title="Slot default">
        <FxEmpty description="网络错误" type="network">
          <FxButton type="primary" size="small">
            刷新试试
          </FxButton>
        </FxEmpty>
      </FxGroup>
      <FxGroup title="renderImage">
        <FxEmpty
          description="网站被小猫咪吃了"
          renderImage={() => (
            <FxImage
              className="exp-empty-custom-image"
              src="https://cdn.fox2.cn/vfox/swiper/different-1.jpg"
            />
          )}
        />
      </FxGroup>
    </>
  )
}
