import classNames from 'classnames'
import type { OnChange, PaginationProps } from './types'
import type {
  CSSProperties,
  RenderChildren,
  RenderProp,
  VFC
} from '../helpers/types'
import { getNumber, isNumeric, rangeInteger } from '../helpers/util'
import { Icon } from '../Icon'
import LeftOutlined from '../Icon/icons/LeftOutlined'
import RightOutlined from '../Icon/icons/RightOutlined'
import { useEffect, useState } from 'react'

const FxPagination: VFC<
  PaginationProps & {
    onChange?: OnChange
    children?: RenderChildren<{
      current: number
      total: number
    }>
    renderPrev?: RenderProp
    renderNext?: RenderProp
    style?: CSSProperties
  }
> = ({ current, onChange, ...props }) => {
  const classes = classNames('fx-pagination', props.className)
  const [pageNum, setPageNum] = useState(-1)
  const total = Math.max(getNumber(props.total, 1), 1)

  function onClick(type: string) {
    const newPageNum = rangeInteger(
      type === 'next' ? pageNum + 1 : pageNum - 1,
      1,
      total
    )

    setPageNum(newPageNum)

    onChange && onChange(newPageNum)
  }

  useEffect(() => {
    if (isNumeric(current)) {
      setPageNum(rangeInteger(current, 0, total))
    } else if (pageNum === -1) {
      // 首次不传值的时候
      setPageNum(1)
      onChange && onChange(1)
    }
  }, [current])

  const children =
    typeof props.children === 'function'
      ? props.children({ current: pageNum, total })
      : props.children

  return (
    <div className={classes} style={props.style}>
      <button
        className="fx-pagination_prev"
        disabled={pageNum <= 1}
        onClick={() => onClick('prev')}
      >
        {props.renderPrev ? props.renderPrev() : <Icon icon={LeftOutlined} />}
      </button>
      <div className="fx-pagination_content">
        {children || `${pageNum} / ${total}`}
      </div>
      <button
        className="fx-pagination_next"
        disabled={pageNum >= total}
        onClick={() => onClick('next')}
      >
        {props.renderNext ? props.renderNext() : <Icon icon={RightOutlined} />}
      </button>
    </div>
  )
}

FxPagination.defaultProps = {
  current: 1,
  total: 1
}

export default FxPagination
