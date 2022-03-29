import type { HTMLAttributes } from 'react'

export interface GroupProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  strongHeader?: boolean
}
