import classNames from 'classnames'
import type { PaginationProps } from './types'
import type { CSSProperties, FC, RenderProp } from '../helpers/types'
import { rangeInteger } from '../helpers/util'
import { Icon } from '../Icon'
import LeftOutlined from '../Icon/icons/LeftOutlined'
import RightOutlined from '../Icon/icons/RightOutlined'

const FxPagination: FC<
  PaginationProps & {
    onChange?: (payload: number) => void
    render?: RenderProp<{
      current: number
      total: number
    }>
    renderPrev?: RenderProp
    renderNext?: RenderProp
    style?: CSSProperties
  }
> = props => {
  const classes = classNames('fx-pagination', props.className)

  function onClick(type: string) {
    const newPageNum = rangeInteger(
      type === 'next' ? props.current + 1 : props.current - 1,
      0,
      props.total
    )

    props.onChange && props.onChange(newPageNum)
  }

  return (
    <div className={classes} style={props.style}>
      <button
        className="fx-pagination_prev"
        disabled={props.current <= 1}
        onClick={() => onClick('prev')}
      >
        {props.renderPrev ? props.renderPrev() : <Icon icon={LeftOutlined} />}
      </button>
      <div className="fx-pagination_content">
        {props.render
          ? props.render({
              current: props.current,
              total: props.total
            })
          : `${props.current} / ${props.total}`}
      </div>
      <button
        className="fx-pagination_next"
        disabled={props.current >= props.total}
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
