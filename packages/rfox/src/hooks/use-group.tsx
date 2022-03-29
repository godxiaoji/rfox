import { useContext, useEffect, useRef } from 'react'
import type { MutableRefObject } from 'react'
import type { GroupContext, GroupContextItemRef } from './types'
import { withProvider } from './with'
import type { Noop } from '../helpers/types'
import { noop } from '../helpers/util'

interface ListItemElement<T = any> extends HTMLDivElement {
  _fxRef: MutableRefObject<T>
}

export function getListItems<T>(
  itemClassName: string,
  listEl?: HTMLElement | null
): ListItemElement<T>[] {
  return listEl
    ? [].slice.call(listEl.querySelectorAll(`.${itemClassName}`), 0)
    : []
}

export function useGroup<T, P extends GroupContextItemRef>(
  ParentContext: GroupContext<T, P>,
  contextValue: T,
  { updateCallback }: { updateCallback?: Noop } = {}
) {
  const children = useRef<P[]>([])
  const doUpdate = useRef(noop)
  updateCallback && (doUpdate.current = updateCallback)

  function addItem(ref: MutableRefObject<P>) {
    children.current.push(ref.current)

    doUpdate.current()
  }

  function removeItem(ref: MutableRefObject<P>) {
    children.current.splice(children.current.indexOf(ref.current), 1)

    doUpdate.current()
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

export function useGroupItem<T, P extends GroupContextItemRef>(
  ParentContext: GroupContext<T, P>,
  object: P
) {
  const root = useRef<ListItemElement>(null)

  const { addItem, removeItem, ...values } = useContext(ParentContext)
  const ref = useRef(object)
  ref.current = object

  useEffect(() => {
    root.current && (root.current._fxRef = ref)

    addItem && addItem(ref)
    return () => {
      removeItem && removeItem(ref)
    }
  }, [])

  return { ...values, root }
}
