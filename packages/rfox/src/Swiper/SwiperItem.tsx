import classNames from 'classnames'
import { useMemo } from 'react'
import type { FC } from '../helpers/types'
import { useListItem } from '../hooks/use-list'
import { SwiperContext } from './context'
import type { SwiperItemProps } from './types'

const FxSwiperItem: FC<SwiperItemProps> = props => {
  const classes = classNames('fx-swiper-item', props.className)
  const { root } = useListItem(SwiperContext)

  const render = useMemo(
    () => (
      <div className={classes} ref={root}>
        {props.children}
      </div>
    ),
    [props.children]
  )

  return render
}

export default FxSwiperItem
