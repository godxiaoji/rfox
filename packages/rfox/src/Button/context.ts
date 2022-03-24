import { createContext } from 'react'
import type { ButtonGroupProps } from './types'

export const GroupContext = createContext<
  ButtonGroupProps & {
    hasGroup: boolean
  }
>({ hasGroup: false })
