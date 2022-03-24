import Exception from '../helpers/exception'
import { capitalize } from '../helpers/util'
import { useContext, useEffect, useRef, useState } from 'react'
import { withProvider } from './with'
import type { ListContext, ListContextValue } from './types'
import { useMounted } from './use-life'

type ListUpdateCallback = ($items: HTMLElement[]) => void

/**
 * 创建默认更新方法，带错误提示
 * @param name 驼峰式
 */
export function createUpdateInItem(name: string) {
  name = capitalize(name)

  return function () {
    new Exception(`${name}Item is not in ${name}`, Exception.TYPE.DEFAULT, name)
  }
}

/**
 * useList
 * @param ParentContext
 * @param name eg: tabView
 * @param updateCallback 更新函数
 * @returns
 */
export function useList<T extends ListContextValue>(
  ParentContext: ListContext<T>,
  contextValue: T,
  {
    itemClassName,
    updateCallback
  }: { itemClassName: string; updateCallback: ListUpdateCallback }
) {
  const listEl = useRef<HTMLDivElement>(null)
  const updateTimer = useRef<number>()

  const { mounted } = useMounted({
    onMounted: () => update(0),
    onBeforeUnmount: () => clearTimeout(updateTimer.current)
  })

  function doUpdate() {
    const $items = getItems()

    $items.forEach(($item, index) => {
      $item._fxSetIndex && $item._fxSetIndex(index)
    })

    updateCallback($items)
  }

  function update(lazy = 17) {
    if (!mounted.current) {
      return
    }

    if (lazy === 0) {
      doUpdate()
    } else {
      clearTimeout(updateTimer.current)
      updateTimer.current = window.setTimeout(() => {
        if (mounted.current) {
          doUpdate()
        }
      }, lazy)
    }
  }

  function getItems(): ListItemElement[] {
    return listEl.current
      ? [].slice.call(listEl.current.querySelectorAll(`.${itemClassName}`), 0)
      : []
  }

  const ListProvider = withProvider(ParentContext, { ...contextValue, update })

  return {
    listEl,
    getItems,
    update,
    ListProvider
  }
}

interface ListItemElement extends HTMLDivElement {
  _fxSetIndex?(_index: number): void
}

/**
 * useListItem
 * @param ParentContext
 * @returns
 */
export function useListItem<T extends ListContextValue>(
  ParentContext: ListContext<T>
) {
  const root = useRef<ListItemElement>(null)
  const [index, setIndex] = useState(-1)
  const Consumer = useContext(ParentContext)

  useEffect(() => {
    root.current && (root.current._fxSetIndex = _index => setIndex(_index))

    Consumer.update && Consumer.update()

    return () => Consumer.update && Consumer.update()
  }, [])

  return {
    ...Consumer,
    root,
    index
  }
}
