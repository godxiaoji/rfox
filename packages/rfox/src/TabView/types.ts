import { OnChange, OnAnimated } from '../Swiper/types'

export interface TabViewProps {
  initialVertical?: boolean
  scrollThreshold?: number
  backUpperWhenChange?: boolean
}

export interface TabViewEmits {
  onChange?: OnChange
  onAnimated?: OnAnimated
}

export interface TabViewItemProps {
  name?: string
  subName?: string
}

export interface TabViewRef {
  switchToIndex?: (index: number) => void
}
