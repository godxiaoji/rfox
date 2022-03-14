import { FxImage, FxCol, FxRow, FxGroup } from '@/index'

const imageUrl = 'https://cdn.fox2.cn/vfox/swiper/center-2.jpg'

export default function ExpImage() {
  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-image-flex">
          <FxRow gutter={[16, 16]}>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
              ></FxImage>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="填充模式">
        <div className="exp-image-flex">
          <FxRow gutter={[16, 16]}>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="scaleToFill"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">scaleToFill</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="aspectFit"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">aspectFit</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="aspectFill"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">aspectFill</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="widthFix"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">widthFix</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="top"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">top</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">bottom</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="left"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">left</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="right"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">right</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="top left"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">top left</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="top right"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">top right</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom left"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">bottom left</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                mode="bottom right"
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">bottom right</span>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="设置宽高比（设置后高度按比例缩放）">
        <div className="exp-image-flex">
          <FxRow gutter={[16, 16]} align="bottom">
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
              ></FxImage>
              <span className="exp-image-text">aspect-ratio=1</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1.5}
              ></FxImage>
              <span className="exp-image-text">aspect-ratio=1.5</span>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={0.5}
              ></FxImage>
              <span className="exp-image-text">aspect-ratio=0.5</span>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="加载/加载错误">
        <div className="exp-image-flex">
          <FxRow gutter={[16, 16]}>
            <FxCol span="8">
              <FxImage className="exp-image-image" aspectRatio={1}></FxImage>
            </FxCol>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src="error"
                aspectRatio={1}
              ></FxImage>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="懒加载">
        <div className="exp-image-flex">
          <FxRow gutter={[16, 16]}>
            <FxCol span="8">
              <FxImage
                className="exp-image-image"
                src={imageUrl}
                aspectRatio={1}
                lazyLoad
              ></FxImage>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
    </>
  )
}
