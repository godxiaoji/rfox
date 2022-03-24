import { createContext } from 'react'
import type { ListContext, ListContextValue } from '../hooks/types'

export const SwiperContext: ListContext = createContext<ListContextValue>({
  hasGroup: false
})
