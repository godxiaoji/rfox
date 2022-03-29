import { createContext } from 'react'
import type { ListContext } from '../hooks/types'
import { SwiperContextValue } from './types'

export const SwiperContext: ListContext<SwiperContextValue> =
  createContext<SwiperContextValue>({
    activeIndex: -1,
    vertical: false
  })
