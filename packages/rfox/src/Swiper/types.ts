import type { Noop, OnClick } from '../helpers/types'
import type { ListContextValue } from '../hooks/types'

export type OnChange = (index: number, fromIndex: number) => void

export type OnAnimated = OnChange

export type OnResetItems = (
  items: {
    name: string
    subName: string
    index: number
  }[]
) => void

export interface SwiperProps {
  indicatorDots?: boolean // 是否显示面板指示点
  indicatorColor?: string
  indicatorActiveColor?: string
  navigationButtons?: boolean
  autoplay?: boolean
  interval?: number | string
  duration?: number | string
  initialCircular?: boolean
  initialActiveIndex?: number
  initialVertical?: boolean
  bounces?: boolean // 边界弹性控制
}

export interface SwiperEmits {
  onChange?: OnChange
  onAnimated?: OnAnimated
  onClick?: OnClick
  onResetItems?: OnResetItems
}

export type SwiperItemProps = {
  className?: string
}

export type SwipeTo = (newIndex: number) => void

export type SwiperRef = {
  swipeTo: SwipeTo
  prev: Noop
  next: Noop
}

export interface SwiperContextValue extends ListContextValue {
  vertical: boolean
  activeIndex: number
}
