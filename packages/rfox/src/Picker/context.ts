import { createContext } from 'react'
import type { PickerHandlers } from './types'

export const PickerContext = createContext<Partial<PickerHandlers>>({})
