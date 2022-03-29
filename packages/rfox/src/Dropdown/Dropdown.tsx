import { createPortal } from 'react-dom'
import classNames from 'classnames'
import type { DropdownEmits, DropdownProps } from './types'
import type { FRFC, RenderProp } from '../helpers/types'
import { usePopup } from '../popup/use-popup'
import type { PopupRef } from '../popup/types'
import { forwardRef, useMemo, useRef, useState } from 'react'
import Exception from '../helpers/exception'
import { querySelector } from '../helpers/dom'
import { useResizeObserver } from '../hooks/use-resize-observer'

const FxDropdown: FRFC<
  PopupRef,
  DropdownProps &
    DropdownEmits & {
      render?: RenderProp<{ height: number }>
    }
> = (props, ref) => {
  const root = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(-1)
  const [height, setHeight] = useState(0)

  const { popupStyles, popupClasses, onMaskClick } = usePopup(props, ref, {
    afterShow: updatePos,
    afterHidden: () => {
      setTop(-1)
    }
  })

  const classes = classNames(['fx-dropdown', popupClasses, props.className])

  const styles = Object.assign(
    {
      top: top === -1 ? '100vh' : top + 'px'
    },
    popupStyles
  )

  function updatePos() {
    const $target = querySelector(props.selector)

    if (!$target) {
      console.error(
        new Exception(
          'Cannot find element through "selector"',
          Exception.TYPE.PROP_ERROR,
          'Dropdown'
        )
      )
      return
    }

    const { bottom } = ($target as HTMLElement).getBoundingClientRect()

    setTop(bottom)
  }

  useResizeObserver(root, rect => {
    setHeight(rect.height)
  })

  const renderChildren = useMemo(() => {
    return props.render
      ? props.render({
          height
        })
      : props.children
  }, [props.children, props.render, height])

  return createPortal(
    <div className={classes} style={styles} ref={root}>
      <div className="fx-mask" onClick={onMaskClick}></div>
      <div className="fx-dropdown_inner">{renderChildren}</div>
    </div>,
    document.body
  )
}

export default forwardRef(FxDropdown)
