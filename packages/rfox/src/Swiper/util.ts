import { SwiperProps } from './types'

export const getSwiperClasses = (direction: string) => {
  return [
    'fx-swiper',
    {
      vertical: direction === 'y'
    }
  ]
}

export const getSwiperIndicatorsClasses = (direction: string) => {
  return [
    'fx-swiper_indicators',
    {
      vertical: direction === 'y'
    }
  ]
}

export const getPaginationItemClasses = (
  pageIndex: number,
  activeIndex: number
) => {
  return [
    'fx-swiper_indicator',
    {
      active: pageIndex === activeIndex
    }
  ]
}

export const getPaginationItemStyles = (
  { indicatorActiveColor, indicatorColor }: SwiperProps,
  pageIndex: number,
  activeIndex: number
) => {
  return {
    background:
      pageIndex === activeIndex ? indicatorActiveColor : indicatorColor
  }
}
