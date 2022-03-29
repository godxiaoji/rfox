import type { CSSProperties } from '../helpers/types'
import { cloneData } from '../helpers/util'
import type { DistanceOptions, ImageObject } from './types'

export const mergeLoadedData = (
  old: ImageObject,
  {
    width,
    height
  }: {
    width: number
    height: number
    src: string
  }
) => {
  const image = cloneData(old)
  const { clientWidth } = document.documentElement

  if (width > clientWidth) {
    image.width = clientWidth
    image.height = height * (clientWidth / width)
    // image.width = width
    // image.height = height
  } else {
    image.width = width
    image.height = height
  }
  image.naturalWidth = width
  image.naturalHeight = height
  image.initialWidth = image.width
  image.initialHeight = image.height
  image.loaded = true

  return image
}

export const getImagesOnLoad = (
  {
    width,
    height,
    src
  }: {
    width: number
    height: number
    src: string
  },
  images: ImageObject[],
  imageHighRendering?: boolean
) => {
  if (imageHighRendering) {
    const dpr = window.devicePixelRatio || 1
    width = width / dpr
    height = height / dpr
  }

  const newImages: ImageObject[] = []

  for (let i = 0; i < images.length; i++) {
    const image = cloneData(images[i])

    if (image.src === src) {
      const { clientWidth } = document.documentElement

      if (width > clientWidth) {
        image.width = clientWidth
        image.height = height * (clientWidth / width)
        // image.width = width
        // image.height = height
      } else {
        image.width = width
        image.height = height
      }
      image.naturalWidth = width
      image.naturalHeight = height
      image.initialWidth = image.width
      image.initialHeight = image.height
      image.loaded = true
    }
    newImages.push(image)
  }

  return newImages
}

export const getImagesOnUrlsChange = (
  urls: string[],
  images: ImageObject[]
) => {
  const map: Record<string, ImageObject> = {}

  images.forEach(v => {
    map[v.src] = v
  })

  const newImages: ImageObject[] = []

  urls.forEach(url => {
    if (map[url]) {
      newImages.push(map[url])
    } else {
      newImages.push({
        src: url,
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
    }
  })

  return newImages
}

export function getDistance(p1: DistanceOptions, p2: DistanceOptions) {
  const x = p2.pageX - p1.pageX
  const y = p2.pageY - p1.pageY
  return Math.sqrt(x * x + y * y)
}

export function getImageStyles(item: ImageObject) {
  return {
    width: item.width + 'px',
    height: item.height + 'px',
    marginLeft: item.offsetLeft + 'px',
    marginTop: item.offsetTop + 'px'
  } as CSSProperties
}
