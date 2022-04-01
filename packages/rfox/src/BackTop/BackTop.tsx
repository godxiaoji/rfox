import { useRef, useState } from 'react'
import classNames from 'classnames'
import type { BackTopProps } from './types'
import { getBackTopStyles } from './util'
import type { FC, OnClick } from '../helpers/types'
import { getScrollTop, scrollTo } from '../helpers/dom'
import UpCircleOutlined from '../Icon/icons/UpCircleOutlined'
import { useScroll } from '../hooks/use-scroll'
import { useSafeAreaInsets } from '../hooks/use-safe-area-insets'
import { Icon } from '../Icon'

const FxBackTop: FC<
  BackTopProps & {
    onClick?: OnClick
  }
> = props => {
  const docEl = useRef(document.documentElement)
  const [isShow, setIsShow] = useState(false)
  const { safeAreaInsets } = useSafeAreaInsets(props.enableSafeAreaInsets)

  const classes = classNames('fx-back-top', props.className)
  const styles = getBackTopStyles(props.offset, isShow, safeAreaInsets)

  useScroll(docEl, e => {
    setIsShow(
      getScrollTop(e.currentTarget as HTMLElement) >=
        (props.visibleHeight as number)
    )
  })

  function toTop() {
    scrollTo(document, 0, props.animated)
  }

  const onClick: OnClick = e => {
    toTop()

    props.onClick && props.onClick(e)
  }

  return (
    <button className={classes} style={styles} onClick={onClick}>
      {props.children || <Icon icon={UpCircleOutlined} />}
    </button>
  )
}

FxBackTop.defaultProps = {
  visibleHeight: 200,
  animated: true,
  offset: 0,
  enableSafeAreaInsets: true
}

export default FxBackTop
