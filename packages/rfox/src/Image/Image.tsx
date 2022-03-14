import React, { useRef, useEffect, useState } from 'react'
import classNames from 'classnames'
import type { ImageEvents, ImageProps, LoadedResource } from './types'
import { getImageRatioStyles, getModeClassName } from './util'
import {
  addLazyQueue,
  loadNow,
  removeComponentFromLazy,
  withCheckInView
} from './load-image'
import type { FC, TypeException } from '../helpers/types'
import ImageOutlined from '../Icon/icons/ImageOutlined'
import ImageBreakOutlined from '../Icon/icons/ImageBreakOutlined'
import { Icon } from '../Icon'

const FxImage: FC<ImageProps & ImageEvents> = props => {
  const root = useRef<HTMLDivElement | null>(null)
  const classes = classNames('fx-image', props.className)
  const imgClasses = classNames('fx-image_img', getModeClassName(props.mode))
  const ratioStyles = getImageRatioStyles(props)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [currentSrc, setCurrentSrc] = useState<string | null>(null)

  const uid = useRef(Symbol())

  function load(src: string) {
    ;(props.lazyLoad ? addLazyQueue : loadNow)({
      src,
      uid: uid.current,
      checkInView: withCheckInView(root.current as HTMLElement),
      onLoad,
      onError
    })
  }

  function onLoad(res: LoadedResource) {
    if (res.src === props.src) {
      // 防止多次变更图片导致的图片不正确
      setLoading(false)
      setError(false)
      setCurrentSrc(res.src)
    }

    props.onLoad &&
      props.onLoad({
        width: res.naturalWidth,
        height: res.naturalHeight,
        src: res.src
      })
  }

  function onError(e: TypeException) {
    setLoading(false)
    setError(true)

    props.onError && props.onError(e)
  }

  const onDrag: React.DragEventHandler<HTMLImageElement> = e => {
    if (!props.draggable) {
      e.preventDefault()
    }
  }

  useEffect(() => {
    props.src && load(props.src)
  }, [props.src])

  useEffect(() => {
    return () => removeComponentFromLazy(uid.current)
  }, [])

  return (
    <div className={classes} ref={root}>
      {props.aspectRatio != null && props.aspectRatio > 0 ? (
        <span className="fx-image_ratio" style={ratioStyles}></span>
      ) : (
        <></>
      )}
      {loading ? (
        <i className="fx-image_loading">
          <Icon
            icon={props.loadingIcon || ImageOutlined}
            size={props.iconSize}
          />
        </i>
      ) : (
        <></>
      )}
      {error ? (
        <i className="fx-image_error">
          <Icon
            icon={props.errorIcon || ImageBreakOutlined}
            size={props.iconSize}
          />
        </i>
      ) : (
        <></>
      )}
      {currentSrc ? (
        <img className={imgClasses} src={currentSrc} onDragStart={onDrag} />
      ) : (
        <></>
      )}
    </div>
  )
}

FxImage.defaultProps = {
  loadingIcon: ImageOutlined,
  errorIcon: ImageBreakOutlined,
  lazyLoad: false,
  draggable: true,
  src: ''
}

export default FxImage
