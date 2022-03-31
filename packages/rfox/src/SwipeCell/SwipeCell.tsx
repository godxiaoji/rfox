import classNames from 'classnames'
import { useMemo, useRef, useState } from 'react'
import type { ButtonOption, SwipeCellEmits, SwipeCellProps } from './types'
import type { FC } from '../helpers/types'
import {
  getButtons,
  getSwipeCellButtonStyles,
  getSwipeCellInnerStyles
} from './util'
import { cloneData, getSameValueArray, rangeNumber } from '../helpers/util'
import { getStretchOffset } from '../helpers/animation'
import { useBlur, useStop } from '../hooks/use-event'
import { useTouch } from '../hooks/use-touch'

interface SwipeCellCoords {
  startX: number
  buttonsW: number
  isShow: boolean
  isSwipe: boolean
}

interface OnButtonClick {
  (item: Required<ButtonOption>, index: number): void
}

function SwipeCellButton({
  item,
  index,
  buttonTranslateXs,
  duration,
  onButtonClick
}: {
  item: Required<ButtonOption>
  index: number
  buttonTranslateXs: number[]
  duration: number
  onButtonClick: OnButtonClick
}) {
  const buttonEl = useRef<HTMLButtonElement>(null)

  useStop(buttonEl, 'click', () => onButtonClick(item, index))

  return (
    <button
      className={classNames(['fx-swipe-cell_button', 'type--' + item.type])}
      style={getSwipeCellButtonStyles({
        buttonTranslateXs,
        duration,
        index
      })}
      ref={buttonEl}
    >
      {item.text}
    </button>
  )
}

const FxSwipeCell: FC<SwipeCellProps & SwipeCellEmits> = props => {
  const classes = classNames(
    'fx-swipe-cell',
    'fx-horizontal-hairline',
    props.className
  )

  const root = useRef<HTMLDivElement>(null)
  const buttonsEl = useRef<HTMLDivElement>(null)
  const [translateX, setTranslateX] = useState(0)
  const [duration, setDuration] = useState(0)
  const [buttonTranslateXs, setButtonTranslateXs] = useState<number[]>([])
  const coords = useRef<SwipeCellCoords | null>(null)
  const enableBlur = useRef(false)

  function show(x: number) {
    setTranslateX(x)
    setDuration(0.6)

    setButtonTranslateXs(xs => getSameValueArray(0, xs.length))

    enableBlur.current = true
  }

  function hide() {
    setTranslateX(0)
    setDuration(0.6)

    setButtonTranslateXs(xs => getSameValueArray(0, xs.length))

    enableBlur.current = false
  }

  useBlur(() => {
    enableBlur.current && hide()
  })

  function onButtonClick(item: Required<ButtonOption>, index: number) {
    props.onButtonClick &&
      props.onButtonClick({
        item: cloneData(item),
        index
      })

    hide()
  }

  useTouch({
    el: root,
    onTouchStart(e) {
      if (props.buttons.length === 0) {
        return
      }

      coords.current = {
        startX: e.touchObject.clientX,
        buttonsW: (buttonsEl.current as HTMLElement).clientWidth,
        isShow: translateX > 0,
        isSwipe: false
      }

      if (coords.current.isShow) {
        e.stopPropagation()
      }
    },
    onTouchMove(e) {
      if (!coords.current) {
        return
      }

      const { startX, buttonsW, isSwipe, isShow } = coords.current

      let x = startX - e.touchObject.clientX

      if (!isShow && !isSwipe && x < 0) {
        coords.current = null
        return
      }
      coords.current.isSwipe = true

      if (isShow) {
        x += buttonsW
      }

      const max = rangeNumber(x, 0, buttonsW)

      const $children = (buttonsEl.current as HTMLElement).children

      const _xs: number[] = []

      for (let i = 0, len = $children.length; i < len; i++) {
        _xs.push(
          (($children[i] as HTMLElement).offsetLeft * (buttonsW - max)) /
            buttonsW
        )
      }

      setButtonTranslateXs(_xs)
      setTranslateX(max + (x > buttonsW ? getStretchOffset(x - buttonsW) : 0))
      setDuration(0)

      e.stopPropagation()
    },
    onTouchEnd(e) {
      if (coords.current) {
        const { isSwipe, buttonsW } = coords.current

        if (isSwipe && translateX > buttonsW / 2) {
          // 展示
          show(buttonsW)
        } else {
          hide()
        }

        coords.current = null
        e.stopPropagation()
      }
    }
  })

  const renderButtons = useMemo(() => {
    return getButtons(props.buttons).map((item, index) => (
      <SwipeCellButton
        item={item}
        index={index}
        buttonTranslateXs={buttonTranslateXs}
        duration={duration}
        onButtonClick={onButtonClick}
        key={item.text}
      />
    ))
  }, [buttonTranslateXs, duration, props.onButtonClick])

  return (
    <div className={classes} ref={root}>
      <div
        className="fx-swipe-cell_inner"
        style={getSwipeCellInnerStyles({ duration, translateX })}
      >
        {props.children}
        <div className="fx-swipe-cell_buttons" ref={buttonsEl}>
          {renderButtons}
        </div>
      </div>
    </div>
  )
}

export default FxSwipeCell
