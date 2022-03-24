import type { SizeType, StateType } from '../helpers/types'

export type PatternType = 'light' | 'dark' | 'plain'

export interface TagProps {
  size?: SizeType
  type?: StateType
  pattern?: PatternType
  closable?: boolean
  disabled?: boolean
  color?: string
}
