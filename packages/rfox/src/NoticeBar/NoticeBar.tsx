import classNames from 'classnames'
import type { NoticeBarEmits, NoticeBarProps } from './types'
import {
  getNoticeBarClasses,
  getNoticeBarContentClasses,
  getNoticeBarContentStyles,
  getNoticeBarStyles
} from './util'
import type { FC, OnClick } from '../helpers/types'
import { useEffect, useRef, useState } from 'react'
import type { Mode } from './types'
import RightOutlined from '../Icon/icons/RightOutlined'
import CloseOutlined from '../Icon/icons/CloseOutlined'
import type { IconData } from '../Icon/types'
import { Icon } from '../Icon'

const modeMaps = new Map<Mode, IconData | null>([
  ['default', null],
  ['clickable', RightOutlined],
  ['closable', CloseOutlined]
])

const FxNoticeBar: FC<NoticeBarProps & NoticeBarEmits> = props => {
  const [marqueeX, setMarqueeX] = useState(0)
  const [marqueeDuration, setMarqueeDuration] = useState(0)
  const marqueeTimer = useRef<number>()
  const contentEl = useRef<HTMLDivElement | null>(null)

  const classes = classNames(getNoticeBarClasses(props), props.className)
  const styles = getNoticeBarStyles(props)
  const contentClasses = classNames(getNoticeBarContentClasses(props))
  const contentStyles = getNoticeBarContentStyles(marqueeX, marqueeDuration)

  function marqueeStep(x: number, pW: number) {
    setMarqueeX(pW)
    setMarqueeDuration(0)

    marqueeTimer.current = window.setTimeout(() => {
      setMarqueeX(-x)
      setMarqueeDuration(x / 30)
      marqueeTimer.current = window.setTimeout(() => {
        marqueeStep(x, pW)
      }, (x / 28) * 1000)
    }, 17)
  }

  function stopMarquee() {
    clearTimeout(marqueeTimer.current)

    setMarqueeX(0)
    setMarqueeDuration(0)
  }

  function startMarquee() {
    stopMarquee()

    if (!contentEl.current || !contentEl.current.parentElement) {
      return
    }

    const w = contentEl.current.offsetWidth
    const pW = contentEl.current.parentElement.offsetWidth
    if (w > pW) {
      marqueeStep(w, pW)
    }
  }

  function resetMarquee() {
    props.marquee ? startMarquee() : stopMarquee()
  }

  useEffect(resetMarquee, [props.marquee, props.title])
  useEffect(() => stopMarquee, [])

  const rightIcon2 =
    props.rightIcon || (props.mode && modeMaps.get(props.mode)) || null

  const onRightIconClick: OnClick = e => {
    if (props.mode === 'closable') {
      // if (!notifyExist) {
      //   hide()
      // }

      props.onCloseClick && props.onCloseClick(e)
    }
  }

  return (
    <div className={classes} style={styles}>
      {props.leftIcon ? (
        <div className="fx-notice-bar_left-icon">
          <Icon icon={props.leftIcon} />
        </div>
      ) : (
        <></>
      )}
      <div className="fx-notice-bar_content">
        <div ref={contentEl} className={contentClasses} style={contentStyles}>
          {props.children || props.title}
        </div>
      </div>
      {rightIcon2 ? (
        <div className="fx-notice-bar_right-icon" onClick={onRightIconClick}>
          <Icon icon={rightIcon2} />
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

FxNoticeBar.defaultProps = {
  visible: true,
  title: '',
  marquee: false
}

export default FxNoticeBar
