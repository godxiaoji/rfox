import Exception from '../helpers/exception'
import { capitalize } from '../helpers/util'
import { useContext, useEffect, useRef, useState } from 'react'
import { withProvider } from './with'
import type { ListContext, ListContextValue, ListUpdateCallback } from './types'
import { useMounted } from './use-life'

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

type ValueWithoutUpdate<P> = P extends any
  ? 'update' extends keyof P
    ? Pick<P, Exclude<keyof P, 'update'>>
    : P
  : P

/**
 * useList
 * @param ParentContext
 * @param name eg: tabView
 * @param updateCallback 更新函数
 * @returns
 */
export function useList<T extends ListContextValue>(
  ParentContext: ListContext<T>,
  contextValue: ValueWithoutUpdate<T>,
  {
    throttle,
    itemClassName,
    updateCallback
  }: {
    throttle: boolean
    itemClassName: string
    updateCallback: ListUpdateCallback
  }
) {
  const listEl = useRef<HTMLDivElement>(null)
  const updateTimer = useRef<number>(-1)

  const { mounted } = useMounted({
    onMounted: update,
    onBeforeUnmount: () => cancelAnimationFrame(updateTimer.current)
  })

  function doUpdate() {
    const $items = getItems()

    $items.forEach(($item, index) => {
      $item._fxSetIndex && $item._fxSetIndex(index)
    })

    updateCallback($items)
  }

  function update() {
    cancelAnimationFrame(updateTimer.current)

    if (!throttle && mounted.current) {
      doUpdate()
    } else {
      updateTimer.current = requestAnimationFrame(() => {
        if (mounted.current) {
          doUpdate()
        }
      })
    }
  }

  function getItems(): ListItemElement[] {
    return listEl.current
      ? [].slice.call(listEl.current.querySelectorAll(`.${itemClassName}`), 0)
      : []
  }

  const ListProvider = withProvider(ParentContext, {
    ...contextValue,
    update
  } as T)

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
