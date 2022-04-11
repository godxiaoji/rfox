import classNames from 'classnames'
import { useRef } from 'react'
import type { ButtonOption } from './types'
import { getButtonStyles } from './util'
import type { OnClick, VFC } from '../helpers/types'

const FxSwipeCellButton: VFC<{
  item: Required<ButtonOption>
  index: number
  buttonTranslateXs: number[]
  duration: number
  onButtonClick: (item: Required<ButtonOption>, index: number) => void
}> = ({ item, index, buttonTranslateXs, duration, onButtonClick }) => {
  const buttonEl = useRef<HTMLButtonElement>(null)

  const onClick: OnClick<HTMLButtonElement> = e => {
    onButtonClick(item, index)
    e.stopPropagation()
  }

  return (
    <button
      className={classNames(['fx-swipe-cell_button', 'type--' + item.type])}
      style={getButtonStyles({
        buttonTranslateXs,
        duration,
        index
      })}
      ref={buttonEl}
      onClick={onClick}
    >
      {item.text}
    </button>
  )
}

export default FxSwipeCellButton
