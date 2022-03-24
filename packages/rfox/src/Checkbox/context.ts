import { createContext } from 'react'
import type { GroupContext } from '../hooks/types'
import type { CheckboxContextRef, CheckboxContextValue } from './types'

export const CheckboxContext: GroupContext<
  CheckboxContextValue,
  CheckboxContextRef
> = createContext<CheckboxContextValue>({ hasGroup: false })
