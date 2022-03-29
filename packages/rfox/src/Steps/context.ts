import type { StepContextValue } from './types'
import type { ListContext } from '../hooks/types'
import { createContext } from 'react'

export const StepListContext: ListContext<StepContextValue> =
  createContext<StepContextValue>({
    activeIndex: -1
  })
