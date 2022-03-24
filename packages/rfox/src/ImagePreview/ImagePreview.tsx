import classNames from 'classnames'
import type {
  DistanceOptions,
  ImageObject,
  ImagePreviewEmits,
  ImagePreviewProps
} from './types'
import type { CSSProperties, FC, FRFC, RenderProp } from '../helpers/types'
import { getDistance, getImagesOnLoad, getImagesOnUrlsChange } from './util'
import { rangeNumber } from '../helpers/util'
import { OnLoad } from '../Image/types'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
import { Image } from '../Image'
import { useTouch } from '../hooks/use-touch'
import { PopupRef } from '../popup/types'
import { usePopup } from '../popup/use-popup'
import { createPortal } from 'react-dom'
import { Button } from '../Button'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { Swiper } from '../Swiper'
import { OnChange as SwiperOnChange } from '../Swiper/types'
import { ImageOnLoad } from '..'

type ImageCoordsImage = {
  width: number
  height: number
}

type ImageCoordsScroll = {
  top: number
  left: number
  maxTop: number
  maxLeft: number
}

interface ImageCoords {
  start: {
    pageX: number
    pageY: number
  }
  start2?: {
    pageX: number
    pageY: number
  }
  image?: ImageCoordsImage
  scroll?: ImageCoordsScroll
  inZoom?: boolean
  inZoomEnd?: boolean
  hasZoom?: boolean
  inMove?: boolean
}

const ImageView: FC<
  ImageObject & {
    onLoad: OnLoad
  }
> = item => {
  const imageWrapperEl = useRef<HTMLDivElement>(null)
  const imageEl = useRef<HTMLDivElement | null>(null)
  const [zoomAnimated, setZoomAnimated] = useState(false)
  const coords = useRef<ImageCoords | null>(null)

  const classes = classNames('fx-preview-image_image-container', {
    animated: zoomAnimated
  })

  const styles = {
    width: item.width + 'px',
    height: item.height + 'px',
    marginLeft: item.offsetLeft + 'px',
    marginTop: item.offsetTop + 'px'
  } as CSSProperties

  function getUpdateOffset(
    {
      top,
      left,
      isScrollValue
    }: { top: number; left: number; isScrollValue: boolean },
    item: ImageObject
  ) {
    const { clientHeight, clientWidth } = document.documentElement

    let offsetTop: number
    let offsetLeft: number

    if (item.height <= clientHeight) {
      offsetTop = 0
    } else {
      const diff = (item.height - clientHeight) / 2
      offsetTop = rangeNumber(isScrollValue ? diff - top : top, -diff, diff)
    }

    if (item.width <= clientWidth) {
      offsetLeft = 0
    } else {
      const diff = (item.width - clientWidth) / 2

      offsetLeft = rangeNumber(isScrollValue ? diff - left : left, -diff, diff)
    }

    return {
      offsetTop,
      offsetLeft
    }
  }

  function onImageTouchStart(e: TouchEvent) {
    setZoomAnimated(false)

    if (e.touches.length >= 2) {
      e.preventDefault()
      e.stopPropagation()

      coords.current = {
        start: {
          pageX: e.touches[0].pageX,
          pageY: e.touches[0].pageY
        },
        start2: {
          pageX: e.touches[1].pageX,
          pageY: e.touches[1].pageY
        },
        image: {
          width: item.width,
          height: item.height
        },
        inZoom: true
      }
    } else {
      const { clientWidth, clientHeight } = document.documentElement

      if (item.width <= clientWidth && item.height <= clientHeight) {
        // 图片小于屏幕，不劫持滑动操作
      } else {
        coords.current = {
          start: {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY
          },
          scroll: {
            top: (item.height - clientHeight) / 2 - item.offsetTop,
            left: (item.width - clientWidth) / 2 - item.offsetLeft,
            maxTop: item.height - clientHeight,
            maxLeft: item.width - clientWidth
          }
        }
      }
    }
  }

  function onImageTouchMove(e: TouchEvent) {
    if (!coords.current) {
      return
    }

    if (coords.current.inZoom) {
      if (!coords.current.inZoomEnd) {
        coords.current.hasZoom = true
        const scale =
          getDistance(e.touches[0], e.touches[1]) /
          getDistance(
            coords.current.start,
            coords.current.start2 as DistanceOptions
          )

        item.width = (coords.current.image as ImageCoordsImage).width * scale
        item.height = (coords.current.image as ImageCoordsImage).height * scale
      } else {
        // 放开一只手指就不执行缩放操作
      }
      e.preventDefault()
      e.stopPropagation()
    } else {
      const touch = e.touches[0]
      const scroll = coords.current.scroll as ImageCoordsScroll

      const offsetX = coords.current.start.pageX - touch.pageX
      const offsetY = coords.current.start.pageY - touch.pageY

      if (!coords.current.inMove) {
        const verticalMove = Math.abs(offsetY) > Math.abs(offsetX)

        if (
          (verticalMove && offsetY > 0 && scroll.top < scroll.maxTop) ||
          (verticalMove && offsetY < 0 && scroll.top > 0) ||
          (!verticalMove && offsetX > 0 && scroll.left < scroll.maxLeft) ||
          (!verticalMove && offsetX < 0 && scroll.left > 0)
        ) {
          coords.current.inMove = true
        }
      }

      if (coords.current.inMove) {
        const { offsetTop, offsetLeft } = getUpdateOffset(
          {
            top: Math.max(0, Math.min(scroll.maxTop, scroll.top + offsetY)),
            left: Math.max(0, Math.min(scroll.maxLeft, scroll.left + offsetX)),
            isScrollValue: true
          },
          item
        )

        item.offsetTop = offsetTop
        item.offsetLeft = offsetLeft

        e.preventDefault()
        e.stopPropagation()
      } else {
        coords.current = null
      }
    }
  }

  function onImageTouchEnd(e: TouchEvent) {
    if (!coords.current) {
      return
    }

    e.preventDefault()
    e.stopPropagation()

    if (coords.current.hasZoom) {
      setZoomAnimated(true)

      if (item.width < item.initialWidth) {
        item.width = item.initialWidth
      } else if (item.width > item.naturalWidth) {
        item.width = item.naturalWidth
      }
      if (item.height < item.initialHeight) {
        item.height = item.initialHeight
      } else if (item.height > item.naturalHeight) {
        item.height = item.naturalHeight
      }

      const { offsetTop, offsetLeft } = getUpdateOffset(
        {
          top: item.offsetTop,
          left: item.offsetLeft,
          isScrollValue: false
        },
        item
      )
      item.offsetTop = offsetTop
      item.offsetLeft = offsetLeft
    }

    if (e.touches.length > 0) {
      // 放开一只手指
      coords.current.inZoomEnd = true
    } else {
      // 放开两只手指
      coords.current = null
    }
  }

  useTouch({
    el: imageEl,
    onTouchStart: onImageTouchStart,
    onTouchMove: onImageTouchMove,
    onTouchEnd: onImageTouchEnd
  })

  useEffect(() => {
    imageEl.current =
      (imageWrapperEl.current?.firstElementChild as HTMLImageElement) || null

    return () => {
      imageEl.current = null
    }
  })

  return (
    <Swiper.Item>
      <div className="fx-preview-image_image-container" ref={imageWrapperEl}>
        <Image
          // ref={imageEl}
          className={classes}
          src={item.src}
          mode="aspectFit"
          onLoaded={item.onLoad}
          style={styles}
        />
      </div>
    </Swiper.Item>
  )
}

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
  const [activeIndex2, setActiveIndex2] = useState(0)
  const [images, setImages] = useState<ImageObject[]>([])

  const { popupStyles, popupClasses, customCancel, onMaskClick, onCloseClick } =
    usePopup(props, ref, {})

  const classes = classNames([
    'fx-preview-image',
    popupClasses,
    props.className
  ])

  const onSwiperAnimated = useCallback(() => {
    images.forEach((item, index) => {
      if (index !== activeIndex2) {
        // 切走的图片恢复原有大小
        item.width = item.initialWidth
        item.height = item.initialHeight
        item.offsetTop = 0
        item.offsetLeft = 0
      }
    })
  }, [images, activeIndex2])

  const onSwiperChange: SwiperOnChange = (index, fromIndex) => {
    const current = urls[index]

    if (current) {
      setActiveIndex2(index)
      props.onUpdateCurrent && props.onUpdateCurrent(current)
      props.onChange && props.onChange(index, fromIndex)
    }
  }

  function onPreviewClick() {
    customCancel('previewClick')
  }

  const imagesRef = useRef<ImageObject[]>([])

  function updateImages(_images: ImageObject[]) {
    imagesRef.current = _images
    setImages(imagesRef.current)
  }

  /**
   * @todo 沒有处理imageHighRendering及时更新问题
   * @param res
   */
  const onImageLoad: ImageOnLoad = res => {
    updateImages(getImagesOnLoad(res, imagesRef.current, imageHighRendering))
  }

  useEffect(() => {
    updateImages(getImagesOnUrlsChange(urls, imagesRef.current))
  }, [urls])

  useEffect(() => {
    const index = current ? urls.indexOf(current) : -1
    setActiveIndex2(index === -1 ? 0 : index)
  }, [current])

  const renderImages = useCallback(() => {
    return images.map(image => {
      return <ImageView {...image} onLoad={onImageLoad} key={image.src} />
    })
  }, [images])

  return createPortal(
    <div className={classes} style={popupStyles}>
      <div className="fx-mask"></div>
      <Swiper
        activeIndex={activeIndex2}
        navigationButtons={props.navigationButtons}
        onClick={onPreviewClick}
        onChange={onSwiperChange}
        onAnimated={onSwiperAnimated}
      >
        {renderImages()}
      </Swiper>
      <div className="fx-preview-image_pagination">
        {activeIndex2 + 1} / {urls.length}
      </div>
      <div className="fx-preview-image_close">
        {props.renderClose ? (
          props.renderClose({
            activeIndex: activeIndex2
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
