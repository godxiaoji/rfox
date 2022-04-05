import { useRef, useState } from 'react'
import classNames from 'classnames'
import type {
  CollapseContextItemRef,
  CollapseContextValue,
  CollapseItemEmits,
  CollapseItemProps
} from './types'
import type { FC } from '../helpers/types'
import { useGroupItem } from '../hooks/use-group'
import { CollapseContext } from './context'
import Exception from '../helpers/exception'
import { getItemClasses } from './util'
import { Cell } from '../Cell'

const FxCollapseItem: FC<CollapseItemProps & CollapseItemEmits> = ({
  name = '',
  ...props
}) => {
  const uid = useRef(Symbol())
  const bodyEl = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const isActive = useRef(false)

  const { onChange } = useGroupItem<
    CollapseContextValue,
    CollapseContextItemRef
  >(CollapseContext, {
    uid: uid.current,
    show,
    hide,
    getName: () => name,
    isActive: () => isActive.current
  })

  function handleChange(uid: symbol) {
    if (onChange) {
      onChange(uid)
    } else {
      new Exception(
        `CollapseItemItem is not in CollapseItem`,
        Exception.TYPE.DEFAULT,
        'CollapseItemItem'
      )
    }
  }

  const visibleTimer = useRef<number>()

  function show(isClick = false) {
    if (isActive.current) {
      return
    }
    isActive.current = true
    setActive(true)
    clearTimeout(visibleTimer.current)

    if (!bodyEl.current) {
      return
    }

    const $body = bodyEl.current
    $body.style.cssText = 'position: absolute; opacity: 0;'
    const contentHeight = $body.getBoundingClientRect().height
    $body.style.cssText = 'height: 0px;'

    visibleTimer.current = window.setTimeout(() => {
      $body.style.cssText = `height: ${contentHeight}px;`

      visibleTimer.current = window.setTimeout(() => {
        $body.style.cssText = ''
      }, 210)
    }, 17)

    emitToggle(true)

    isClick && handleChange(uid.current)
  }

  function hide(isClick = false) {
    if (!isActive.current) {
      return
    }
    isActive.current = false
    setActive(false)

    if (!bodyEl.current) {
      return
    }

    clearTimeout(visibleTimer.current)

    const $body = bodyEl.current
    $body.style.cssText = `height: ${$body.getBoundingClientRect().height}px;`

    visibleTimer.current = window.setTimeout(() => {
      $body.style.cssText = 'height: 0px;'

      visibleTimer.current = window.setTimeout(() => {
        $body.style.cssText = 'display: none;'
      }, 210)
    }, 17)

    emitToggle(false)

    isClick && handleChange(uid.current)
  }

  function emitToggle(spread: boolean) {
    props.onToggle &&
      props.onToggle({
        name,
        spread
      })
  }

  function onClick() {
    isActive.current ? hide(true) : show(true)
  }

  const classes = classNames(getItemClasses(active))

  return (
    <div className={classes}>
      <Cell
        className="fx-collapse-item_header"
        label={props.title}
        icon={props.icon}
        disabled={props.disabled}
        isLink
        arrowDirection={active ? 'up' : 'down'}
        onClick={onClick}
      />
      <div
        className="fx-collapse-item_body fx-horizontal-hairline"
        style={{ display: 'none' }}
        ref={bodyEl}
      >
        <div className="fx-collapse-item_content">{props.children}</div>
      </div>
    </div>
  )
}

export default FxCollapseItem
