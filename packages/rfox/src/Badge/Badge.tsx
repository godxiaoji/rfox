import classNames from 'classnames'
import type { BadgeProps } from './types'
import type { CSSProperties, FC, RenderProp } from '../helpers/types'
import {
  defaultMaxCount,
  getBadgeBadgeClasses,
  getBadgeBadgeStyles,
  getBadgeClasses,
  getDefaultContent,
  getShowContent
} from './util'
import { getNumber, isNumber, isString, rangeInteger } from '../helpers/util'
import { useEffect, useState } from 'react'
import { useFrameTask } from '../hooks/use-frame-task'

const FxBadge: FC<
  BadgeProps & {
    style?: CSSProperties
    renderBadge?: RenderProp<{
      showContent: string
    }>
  }
> = props => {
  const [content2, setCoutent2] = useState(getDefaultContent(props))
  const { frameStart, frameStop } = useFrameTask()

  const classes = classNames(getBadgeClasses(props), props.className)
  const badgeStyles = getBadgeBadgeStyles(props)
  const badgeClass = classNames(getBadgeBadgeClasses(props))
  const showContent = getShowContent(props, content2)

  useEffect(() => {
    frameStop()

    const val = props.content

    if (isString(val) || isString(content2)) {
      setCoutent2(getDefaultContent(props))
      return
    }

    if (!isNumber(val)) {
      return
    }

    const currentIsShow = props.showZero || content2 > 0
    const isReadyToHide = !props.showZero && val === 0

    if (!currentIsShow || isReadyToHide) {
      setCoutent2(val)
    } else {
      const to = rangeInteger(
        val,
        0,
        getNumber(props.maxCount, defaultMaxCount)
      )

      frameStart({
        from: content2,
        to,
        duration: Math.min(Math.abs(to - content2) * 50, 1000),
        progress: ({ current, frameIndex }) => {
          if (frameIndex % 3 === 0) {
            setCoutent2(Math.round(current))
          }
        },
        complete: ({ current }) => {
          setCoutent2(current)
        }
      })
    }
  }, [props.content])

  return (
    <div className={classes} style={props.style}>
      {props.children}
      {props.content != null ? (
        <div className={badgeClass} style={badgeStyles}>
          {props.renderBadge
            ? props.renderBadge({
                showContent
              })
            : showContent}
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

FxBadge.defaultProps = {
  maxCount: defaultMaxCount,
  dot: false,
  showZero: false,
  animated: false
}

export default FxBadge
