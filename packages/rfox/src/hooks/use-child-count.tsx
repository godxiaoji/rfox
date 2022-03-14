import type { Noop } from '../helpers/types'
import { useState, createContext, useContext, useEffect } from 'react'
import type { Context, ReactNode } from 'react'

const ParentContext = createContext<{
  addCount?: Noop
  minusCount?: Noop
}>({})

function withProvider<T>(Ctx: Context<T>, value: T) {
  return function Provider(props: { children?: ReactNode }) {
    return <Ctx.Provider value={value} {...props} />
  }
}

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
