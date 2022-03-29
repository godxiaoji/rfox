import classNames from 'classnames'
import type { IndexViewEmits, IndexViewProps, IndexViewRef } from './types'
import type { CSSProperties, FRFC } from '../helpers/types'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { isString, rangeInteger } from '../helpers/util'
import type { OnResetItems, StickyViewRef } from '../StickyView/types'
import type { ResetContainer } from '../Sticky/types'
import { StickyView } from '../StickyView'
import { useTouch } from '../hooks/use-touch'

interface Coords {
  size: number
  offsetY: number
  startY: number
  current: number
  isChange: boolean
}

const FxIndexView: FRFC<
  IndexViewRef,
  IndexViewProps &
    IndexViewEmits & {
      style?: CSSProperties
    }
> = (props, ref) => {
  const navEl = useRef<HTMLUListElement>(null)
  const bodyRef = useRef<StickyViewRef>(null)
  const classes = classNames('fx-index-view', props.className)

  const [indexList, setIndexList] = useState<
    {
      value: number
      label: string
    }[]
  >([])

  const onResetItems: OnResetItems = items => {
    setIndexList(
      items.map(({ name }, index) => {
        return {
          value: index,
          label: name
        }
      })
    )
  }

  const [activeIndex, setActiveIndex] = useState(0)

  function onStickyViewChange(index: number | string) {
    if (isString(index)) {
      return
    }

    if (index === activeIndex) {
      return
    }

    props.onChange && props.onChange(index, activeIndex)

    setActiveIndex(index)
  }

  function switchToIndex(index: number) {
    bodyRef.current?.scrollToIndex(index)
  }

  const resetContainer: ResetContainer = selector => {
    bodyRef.current?.resetContainer(selector)
  }

  const changeTimer = useRef<number>()
  const coords = useRef<Coords | null>(null)

  useTouch({
    el: navEl,
    onTouchStart(e) {
      const { clientY } = e.touchObject

      const $target = e.target as HTMLElement
      const value = parseInt($target.dataset.value as string)
      const rects = $target.getClientRects()[0]

      coords.current = {
        size: rects.height,
        offsetY: clientY - rects.top,
        startY: clientY,
        current: value,
        isChange: false
      }

      clearTimeout(changeTimer.current)
      changeTimer.current = window.setTimeout(() => {
        switchToIndex(value)
      }, 500)

      e.preventDefault()
    },

    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      const { clientY } = e.touchObject
      const { startY, size, offsetY, current } = coords.current

      const y = clientY - startY

      let offsetCount = 0

      if (y > 0) {
        offsetCount = Math.floor(y / size) + (y % size > size - offsetY ? 1 : 0)
      } else if (y < 0) {
        offsetCount = -Math.floor(-y / size) + (-y % size > offsetY ? -1 : 0)
      }

      if (offsetCount !== 0) {
        clearTimeout(changeTimer.current)
        coords.current.isChange = true

        changeTimer.current = window.setTimeout(() => {
          switchToIndex(
            rangeInteger(current + offsetCount, 0, indexList.length - 1)
          )
        }, 100)
      }

      e.stopPropagation()
    },

    onTouchEnd(e) {
      if (coords.current) {
        if (!coords.current.isChange) {
          clearTimeout(changeTimer.current)
          switchToIndex(coords.current.current)
        }

        coords.current = null
        e.stopPropagation()
      }
    }
  })

  useEffect(() => {
    resetContainer(document.documentElement)

    return () => {
      clearTimeout(changeTimer.current)
    }
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      switchToIndex
    }),
    []
  )

  const renderIndexItems = useMemo(
    () =>
      indexList.map(item => (
        <li
          className={item.value === activeIndex ? 'active' : ''}
          data-value={item.value}
          key={item.value}
        >
          {item.label}
        </li>
      )),
    [activeIndex, indexList]
  )

  return (
    <div className={classes} style={props.style}>
      <div className="fx-index-view_sidebar">
        <ul className="fx-index-view_list" ref={navEl}>
          {renderIndexItems}
        </ul>
      </div>
      <div className="fx-index-view_body">
        <StickyView
          offsetTop={props.stickyOffsetTop}
          onResetItems={onResetItems}
          onChange={onStickyViewChange}
          ref={bodyRef}
        >
          {props.children}
        </StickyView>
      </div>
    </div>
  )
}

export default forwardRef(FxIndexView)
