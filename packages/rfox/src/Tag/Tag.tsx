import classNames from 'classnames'
import type { TagProps } from './types'
import type { FC, Noop, OnSVGClick } from '../helpers/types'
import { getTagClasses, getTagStyles } from './util'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import { Icon } from '../Icon'
import { useRef } from 'react'
import { useStop, useLongPress } from '../hooks/use-event'

const FxTag: FC<
  TagProps & {
    onClick?: Noop
    onClose?: Noop
    onLongPress?: Noop
  }
> = props => {
  const root = useRef<HTMLDivElement>(null)
  const closeEl = useRef<HTMLButtonElement>(null)

  const classes = classNames(getTagClasses(props), props.className)
  const styles = getTagStyles(props)

  const onClose: OnSVGClick = () => {
    if (!props.disabled) {
      props.onClose && props.onClose()
    }
  }

  useStop(closeEl)

  useLongPress(root, e => {
    if (!props.disabled) {
      switch (e.type) {
        case 'click':
          props.onClick && props.onClick()
          break
        case 'long-press':
          props.onLongPress && props.onLongPress()
          break
        default:
          break
      }
    }
  })

  return (
    <div className={classes} style={styles} ref={root}>
      {props.children}
      {props.closable ? (
        <button className="fx-tag_close" ref={closeEl}>
          <Icon icon={CloseOutlined} onClick={onClose} />
        </button>
      ) : (
        <></>
      )}
    </div>
  )
}

FxTag.defaultProps = {
  closable: false,
  disabled: false
}

export default FxTag
