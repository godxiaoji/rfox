import { useContext, useEffect, useRef } from 'react'
import type { MutableRefObject } from 'react'
import type {
  GroupContext,
  GroupContextItemRef,
  GroupContextValue
} from './types'
import { withProvider } from './with'

export function useGroup<
  T extends GroupContextValue,
  P extends GroupContextItemRef
>(ParentContext: GroupContext<T, P>, contextValue: T) {
  const children = useRef<P[]>([])

  function addItem(ref: MutableRefObject<P>) {
    children.current.push(ref.current)
  }

  function removeItem(ref: MutableRefObject<P>) {
    children.current.splice(children.current.indexOf(ref.current), 1)
  }

  const GroupProvider = withProvider(ParentContext, {
    ...contextValue,
    addItem,
    removeItem,
    hasGroup: true
  })

  return {
    children,
    GroupProvider
  }
}

export function useGroupItem<
  T extends GroupContextValue,
  P extends GroupContextItemRef
>(ParentContext: GroupContext<T, P>, object: P) {
  const Consumer = useContext(ParentContext)
  const ref = useRef(object)
  ref.current = object

  useEffect(() => {
    Consumer.addItem && Consumer.addItem(ref)
    return () => {
      Consumer.removeItem && Consumer.removeItem(ref)
    }
  }, [])

  return Consumer
}
