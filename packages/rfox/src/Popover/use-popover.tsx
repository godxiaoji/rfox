import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ForwardedRef } from 'react'
import { getEnumsValue } from '../helpers/validator'
import { querySelector } from '../helpers/dom'
import { PLACEMENT_TYPES } from '../helpers/constants'
import { usePopup } from '../popup/use-popup'
import {
  getDefaultPos,
  getPopoverArrowStyles,
  getPopoverInnerStyles,
  getShowPos
} from './util'
import type { PopoverProps } from './types'
import type { PopupRef } from '../popup/types'
import { useResizeObserver } from '../hooks/use-resize-observer'
import type { FC } from '../helpers/types'
import classNames from 'classnames'

export function usePopover(
  props: PopoverProps & {
    className?: string
  },
  ref: ForwardedRef<PopupRef>
) {
  const docEl = useRef(document.documentElement)
  const container = useRef<HTMLElement | null>(null)
  const innerEl = useRef<HTMLDivElement>(null)
  const isShow = useRef(false)
  const [showPos, setShowPos] = useState(getDefaultPos())

  const updatePos = useCallback(
    (source?: string) => {
      if (!container.current || !innerEl.current || !isShow.current) {
        setShowPos(getDefaultPos())
        return
      }

      setShowPos(
        getShowPos(
          container.current,
          innerEl.current,
          getEnumsValue(PLACEMENT_TYPES, props.placement)
        )
      )
    },
    [props.placement]
  )

  const popup = usePopup(props, ref, {
    afterShow() {
      isShow.current = true
      updatePos('show')
    },
    afterHidden() {
      isShow.current = false
      updatePos('show')
    }
  })

  const arrowStyles = useMemo(
    () => getPopoverArrowStyles(isShow.current, showPos),
    [showPos]
  )
  const innerStyles = useMemo(
    () => getPopoverInnerStyles(isShow.current, showPos),
    [showPos]
  )

  useEffect(() => {
    const showMask = props.showMask !== false

    popup.setForbidScroll(showMask)
    popup.setEnableBlurCancel(!showMask)
  }, [props.showMask])

  useEffect(() => {
    container.current = querySelector(props.selector)
    updatePos('selector change')
  }, [props.selector])

  useResizeObserver(container, () => updatePos('container resize'))
  useResizeObserver(docEl, () => updatePos('window resize'))

  const PopoverWrapper: FC = ({ children, className }) => {
    const classes = classNames([
      'fx-popover',
      popup.popupClasses,
      props.className,
      className
    ])

    return (
      <div className={classes} style={popup.popupStyles}>
        {props.showMask !== false ? (
          <div className="fx-mask" onClick={popup.onMaskClick}></div>
        ) : (
          <></>
        )}
        <div className="fx-popover_inner" ref={innerEl} style={innerStyles}>
          <i className="fx-popover_arrow" style={arrowStyles}></i>
          <div className="fx-popover_content">{children}</div>
        </div>
      </div>
    )
  }

  return {
    ...popup,
    PopoverWrapper
  }
}
