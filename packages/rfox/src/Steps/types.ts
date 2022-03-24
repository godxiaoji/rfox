import type { ListContextValue } from '../hooks/types'

export interface StepsProps {
  activeIndex?: number
  dot?: boolean
  horizontal?: boolean
}

export interface StepProps {
  title?: string
}

export interface StepContextValue extends ListContextValue {
  activeIndex: number
}
