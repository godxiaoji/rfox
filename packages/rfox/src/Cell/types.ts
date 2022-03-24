import type { HTMLAttributes } from 'react'
import type { IconData } from '../Icon/types'

export type ArrowDirection = 'right' | 'up' | 'down' | 'left'

export interface CellProps extends HTMLAttributes<HTMLDivElement> {
  icon?: IconData
  label?: string
  description?: string
  content?: string
  clickable?: boolean
  required?: boolean
  isLink?: boolean
  disabled?: boolean
  arrowDirection?: ArrowDirection
}
