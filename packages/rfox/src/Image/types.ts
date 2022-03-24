import type { IconData } from '../Icon/types'
import type { OnError } from '../helpers/types'
import { HTMLAttributes } from 'react'

export type Mode =
  | 'scaleToFill'
  | 'aspectFit'
  | 'aspectFill'
  | 'widthFix'
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top left'
  | 'top right'
  | 'bottom left'
  | 'bottom right'

export type OnLoad = (payload: {
  width: number
  height: number
  src: string
}) => void

export interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  mode?: Mode
  lazyLoad?: boolean
  aspectRatio?: number | string
  draggable?: boolean
  loadingIcon?: IconData
  errorIcon?: IconData
  iconSize?: number | string
}

export interface ImageEmits {
  onLoaded?: OnLoad
  onLoadError?: OnError
}

export interface LoadedResource {
  naturalHeight: number
  naturalWidth: number
  src: string
  event: Event
}
