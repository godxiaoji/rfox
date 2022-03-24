import type { Noop } from '../helpers/types'
import { useState, createContext, useContext, useEffect } from 'react'
import { withProvider } from './with'

const ParentContext = createContext<{
  addCount?: Noop
  minusCount?: Noop
}>({})

export function useChildCountProvider() {
  const [count, setCount] = useState(0)

  return {
    childCount: count,
    ChildCountProvider: withProvider(ParentContext, {
      addCount: () => setCount(count => count + 1),
      minusCount: () => setCount(count => count - 1)
    })
  }
}

export function useChildCountConsumer() {
  const consumer = useContext(ParentContext)

  useEffect(() => {
    consumer.addCount && consumer.addCount()

    return () => consumer.minusCount && consumer.minusCount()
  }, [])

  return {}
}
