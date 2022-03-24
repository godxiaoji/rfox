import {
  FxSwiper,
  FxGroup,
  FxImage,
  showToast,
  SwiperOnChange,
  SwiperOnAnimated
} from '@/index'

export default function ExpSwiper() {
  function renderItems() {
    return (
      <>
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <FxSwiper.Item key={item}>
              <div
                className={`exp-swiper-box-item ${
                  index % 2 === 1 ? 'even' : 'odd'
                }`}
              >
                {item}
              </div>
            </FxSwiper.Item>
          )
        })}
      </>
    )
  }

  function renderImages() {
    return (
      <>
        {[
          'https://cdn.fox2.cn/vfox/swiper/regular-1.jpg',
          'https://cdn.fox2.cn/vfox/swiper/regular-2.jpg',
          'https://cdn.fox2.cn/vfox/swiper/regular-3.jpg'
        ].map(item => {
          return (
            <FxSwiper.Item key={item}>
              <FxImage className="exp-swiper-image" src={item} />
            </FxSwiper.Item>
          )
        })}
      </>
    )
  }

  const onChange: SwiperOnChange = activeIndex => {
    showToast(`change 到第 ${activeIndex + 1} 张`)
    console.log('change', activeIndex)
  }

  const onAnimated: SwiperOnAnimated = activeIndex => {
    showToast(`第 ${activeIndex + 1} 张 animated`)
    console.log('animated', activeIndex)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxSwiper className="exp-swiper-box">{renderItems()}</FxSwiper>
      </FxGroup>
      <FxGroup title="显示面板指示点 indicatorDots=true">
        <FxSwiper className="exp-swiper-box" indicatorDots>
          {renderImages()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="显示切换按钮 navigation-buttons=true">
        <FxSwiper className="exp-swiper-box" navigationButtons>
          {renderImages()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="循环展示 initialCircular=true">
        <FxSwiper className="exp-swiper-box" indicatorDots initialCircular>
          {renderItems()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="垂直方向 initialVertical=true">
        <FxSwiper className="exp-swiper-box" indicatorDots initialVertical>
          {renderItems()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="更改指示点颜色">
        <FxSwiper
          className="exp-swiper-box"
          indicatorDots
          indicatorColor="rgba(255, 255, 255, 0.5)"
          indicatorActiveColor="#ff4d4f"
        >
          {renderItems()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="自动轮播（切换时长设置为3000ms）">
        <FxSwiper
          className="exp-swiper-box"
          indicatorDots
          autoplay
          interval="3000"
        >
          {renderImages()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="滑动过程时长（设置为2000ms）">
        <FxSwiper className="exp-swiper-box" indicatorDots duration="2000">
          {renderImages()}
        </FxSwiper>
      </FxGroup>
      <FxGroup title="事件监听（change/animated/click）">
        <FxSwiper
          className="exp-swiper-box"
          indicatorDots
          onChange={onChange}
          onAnimated={onAnimated}
          onClick={() => showToast('click 触发')}
        >
          {renderItems()}
        </FxSwiper>
      </FxGroup>
    </>
  )
}
