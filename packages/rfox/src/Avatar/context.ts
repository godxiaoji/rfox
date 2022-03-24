import { createContext } from 'react'
import type { UserSizeType } from './types'

export const GroupContext = createContext<{
  size?: UserSizeType
  hasGroup: boolean
}>({ hasGroup: false })
