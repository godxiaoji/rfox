import classNames from 'classnames'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { FC } from '../helpers/types'
import { rangeNumber } from '../helpers/util'
import { useTouch } from '../hooks/use-touch'
import { Image } from '../Image'
import type { OnLoad } from '../Image/types'
import { showToast } from '../Toast'
import type { DistanceOptions, ImageObject } from './types'
import { getDistance, getImageStyles, mergeLoadedData } from './util'

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

const ImagePreviewItem: FC<{
  src: string
  active: boolean
  imageHighRendering: boolean
}> = ({ src, active, imageHighRendering }) => {
  const [imageObject, setImageObject] = useState<ImageObject>({
    src,
    width: 0,
    height: 0,
    initialWidth: 0,
    initialHeight: 0,
    naturalWidth: 0,
    naturalHeight: 0,
    offsetTop: 0,
    offsetLeft: 0,
    loaded: false
  })

  const imageWrapperEl = useRef<HTMLDivElement>(null)
  const [zoomAnimated, setZoomAnimated] = useState(false)
  const coords = useRef<ImageCoords | null>(null)

  const classes = classNames('fx-preview-image_image-container', {
    animated: zoomAnimated
  })

  const styles = getImageStyles(imageObject)

  function getUpdateOffset({
    top,
    left,
    isScrollValue
  }: {
    top: number
    left: number
    isScrollValue: boolean
  }) {
    const { clientHeight, clientWidth } = document.documentElement

    let offsetTop: number
    let offsetLeft: number

    if (imageObject.height <= clientHeight) {
      offsetTop = 0
    } else {
      const diff = (imageObject.height - clientHeight) / 2
      offsetTop = rangeNumber(isScrollValue ? diff - top : top, -diff, diff)
    }

    if (imageObject.width <= clientWidth) {
      offsetLeft = 0
    } else {
      const diff = (imageObject.width - clientWidth) / 2

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
          width: imageObject.width,
          height: imageObject.height
        },
        inZoom: true
      }
    } else {
      const { clientWidth, clientHeight } = document.documentElement

      if (
        imageObject.width <= clientWidth &&
        imageObject.height <= clientHeight
      ) {
        // 图片小于屏幕，不劫持滑动操作
      } else {
        coords.current = {
          start: {
            pageX: e.touches[0].pageX,
            pageY: e.touches[0].pageY
          },
          scroll: {
            top:
              (imageObject.height - clientHeight) / 2 - imageObject.offsetTop,
            left:
              (imageObject.width - clientWidth) / 2 - imageObject.offsetLeft,
            maxTop: imageObject.height - clientHeight,
            maxLeft: imageObject.width - clientWidth
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

        imageObject.width =
          (coords.current.image as ImageCoordsImage).width * scale
        imageObject.height =
          (coords.current.image as ImageCoordsImage).height * scale
        setImageObject({ ...imageObject })
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
        const { offsetTop, offsetLeft } = getUpdateOffset({
          top: Math.max(0, Math.min(scroll.maxTop, scroll.top + offsetY)),
          left: Math.max(0, Math.min(scroll.maxLeft, scroll.left + offsetX)),
          isScrollValue: true
        })

        imageObject.offsetTop = offsetTop
        imageObject.offsetLeft = offsetLeft
        setImageObject({ ...imageObject })

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

      if (imageObject.width < imageObject.initialWidth) {
        imageObject.width = imageObject.initialWidth
      } else if (imageObject.width > imageObject.naturalWidth) {
        imageObject.width = imageObject.naturalWidth
      }
      if (imageObject.height < imageObject.initialHeight) {
        imageObject.height = imageObject.initialHeight
      } else if (imageObject.height > imageObject.naturalHeight) {
        imageObject.height = imageObject.naturalHeight
      }

      const { offsetTop, offsetLeft } = getUpdateOffset({
        top: imageObject.offsetTop,
        left: imageObject.offsetLeft,
        isScrollValue: false
      })
      imageObject.offsetTop = offsetTop
      imageObject.offsetLeft = offsetLeft

      setImageObject({ ...imageObject })
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
    el: imageWrapperEl,
    onTouchStart: onImageTouchStart,
    onTouchMove: onImageTouchMove,
    onTouchEnd: onImageTouchEnd
  })

  const onImageLoad: OnLoad = res => {
    if (imageHighRendering) {
      const dpr = window.devicePixelRatio || 1
      res.width = res.width / dpr
      res.height = res.height / dpr
    }

    setImageObject(imageObject => mergeLoadedData(imageObject, res))
  }

  useEffect(() => {
    setImageObject({
      ...imageObject,
      width: imageObject.initialWidth,
      height: imageObject.initialHeight,
      offsetTop: 0,
      offsetLeft: 0
    })
  }, [active])

  const renderImage = useMemo(
    () => (
      <Image
        className={classes}
        src={imageObject.src}
        mode="aspectFit"
        onLoaded={onImageLoad}
        style={styles}
      />
    ),
    [imageObject]
  )

  return (
    <div className="fx-swiper-item">
      <div className={classes} ref={imageWrapperEl}>
        {renderImage}
      </div>
    </div>
  )
}

export default ImagePreviewItem
