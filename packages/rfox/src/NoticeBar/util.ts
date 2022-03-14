import { getEnumsValue } from '../helpers/validator'
import { STATE_TYPES } from '../helpers/constants'
import type { NoticeBarProps } from './types'
import type { CSSProperties } from '../helpers/types'
import { getColorObject } from '../helpers/color'

export const getNoticeBarClasses = (props: NoticeBarProps) => {
  return ['fx-notice-bar', 'type--' + getEnumsValue(STATE_TYPES, props.type)]
}

export const getNoticeBarStyles = (props: NoticeBarProps) => {
  const styles: CSSProperties = {}

  const colorObj = getColorObject(props.color)
  if (colorObj.hasColor) {
    styles[`--fx-color`] = colorObj.varBackgroundColor
    styles[`--fx-front-color`] = colorObj.varFrontColor
  }

  if (!props.visible) {
    styles.display = 'none'
  }

  return styles
}

export const getNoticeBarContentClasses = (props: NoticeBarProps) => {
  return [
    'fx-notice-bar_content-inner',
    {
      marquee: !!props.marquee
    }
  ]
}

export const getNoticeBarContentStyles = (
  marqueeX: number,
  marqueeDuration: number
) => {
  const styles: CSSProperties = {}

  marqueeX !== 0 && (styles.transform = `translateX(${marqueeX}px)`)
  marqueeDuration > 0 && (styles.transitionDuration = `${marqueeDuration}s`)

  return styles
}
