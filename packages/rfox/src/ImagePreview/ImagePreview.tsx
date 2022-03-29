import classNames from 'classnames'
import type { ImageObject, ImagePreviewEmits, ImagePreviewProps } from './types'
import type { FRFC, RenderProp } from '../helpers/types'
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { PopupRef } from '../popup/types'
import { usePopup } from '../popup/use-popup'
import { createPortal } from 'react-dom'
import { Button } from '../Button'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { Swiper } from '../Swiper'
import { OnChange as SwiperOnChange, SwiperRef } from '../Swiper/types'
import ImagePreviewItem from './ImagePreviewItem'
import { useStableState } from '../hooks/use'

const FxImagePreview: FRFC<
  PopupRef,
  ImagePreviewProps &
    ImagePreviewEmits & {
      renderClose?: RenderProp<{ activeIndex: number }>
    }
> = (
  {
    urls = [],
    imageHighRendering = true,
    showClose = false,
    current,
    ...props
  },
  ref
) => {
  const swiperRef = useRef<SwiperRef>(null)
  const [getActiveIndex2, setActiveIndex2] = useStableState(0)
  const [images, setImages] = useState<ImageObject[]>([])

  const { popupStyles, popupClasses, customCancel, onCloseClick } = usePopup(
    props,
    ref,
    {}
  )

  const classes = classNames([
    'fx-preview-image',
    popupClasses,
    props.className
  ])

  const onSwiperAnimated = useCallback(() => {
    images.forEach((item, index) => {
      if (index !== getActiveIndex2()) {
        // 切走的图片恢复原有大小
        item.width = item.initialWidth
        item.height = item.initialHeight
        item.offsetTop = 0
        item.offsetLeft = 0
      }
    })
  }, [images, getActiveIndex2()])

  const onSwiperChange: SwiperOnChange = (index, fromIndex) => {
    if (index === getActiveIndex2(true)) {
      return
    }

    setActiveIndex2(index)
    props.onChange && props.onChange(urls[index], index, fromIndex)
  }

  function onPreviewClick() {
    customCancel('previewClick')
  }

  // useEffect(() => {
  //   if (activeIndex2 !== 0) {
  //   }
  //   const index = current ? urls.indexOf(current) : -1
  //   setActiveIndex2(index === -1 ? 0 : index)
  // }, [])

  const renderImages = useMemo(
    () => urls.map(url => <ImagePreviewItem src={url} key={url} />),
    [urls]
  )

  useEffect(() => {
    if (current && urls.indexOf(current) !== -1) {
      const _index = urls.indexOf(current)
      setActiveIndex2(_index)
      swiperRef.current?.swipeTo(_index)
    }
  }, [current])

  return createPortal(
    <div className={classes} style={popupStyles}>
      <div className="fx-mask"></div>
      <Swiper
        ref={swiperRef}
        navigationButtons={props.navigationButtons}
        onClick={onPreviewClick}
        onChange={onSwiperChange}
        onAnimated={onSwiperAnimated}
      >
        {renderImages}
      </Swiper>
      <div className="fx-preview-image_pagination">
        {getActiveIndex2() + 1} / {urls.length}
      </div>
      <div className="fx-preview-image_close">
        {props.renderClose ? (
          props.renderClose({
            activeIndex: getActiveIndex2()
          })
        ) : showClose ? (
          <Button
            onClick={onCloseClick}
            icon={CloseOutlined}
            size="large"
            pattern="borderless"
            shape="square"
            ghost
          />
        ) : (
          <></>
        )}
      </div>
    </div>,
    document.body
  )
}

export default forwardRef(FxImagePreview)
