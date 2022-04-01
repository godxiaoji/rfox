import classNames from 'classnames'
import { useRef } from 'react'
import type { SwiperCellButtonProps } from './types'
import { getSwipeCellButtonStyles } from './util'
import type { OnClick, VFC } from '../helpers/types'

const FxSwipeCellButton: VFC<SwiperCellButtonProps> = ({
  item,
  index,
  buttonTranslateXs,
  duration,
  onButtonClick
}) => {
  const buttonEl = useRef<HTMLButtonElement>(null)

  const onClick: OnClick<HTMLButtonElement> = e => {
    onButtonClick(item, index)
    e.stopPropagation()
  }

  return (
    <button
      className={classNames(['fx-swipe-cell_button', 'type--' + item.type])}
      style={getSwipeCellButtonStyles({
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
