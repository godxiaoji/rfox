import { createContext } from 'react'

export const LayoutContext = createContext<{
  gutter: number[]
}>({
  gutter: [0, 0]
})
