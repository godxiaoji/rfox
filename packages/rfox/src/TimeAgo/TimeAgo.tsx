import { useState, useEffect } from 'react'
import classNames from 'classnames'
import type { TimeAgoProps } from './types'
import { getDate } from './util'
import type { FC } from '../helpers/types'
import { format } from 'timeago.js'
import { useLocale } from '../ConfigProvider/context'
import { useTimer } from '../hooks/use-timer'

const FxTimeAgo: FC<TimeAgoProps> = props => {
  const classes = classNames('fx-time-ago', props.className)
  const [timeAgo, setTimeAgo] = useState('')
  const { locale } = useLocale()

  function update() {
    const d = getDate(props)

    setTimeAgo(d == null ? '' : format(d, locale.lang.replace('-', '_')))
  }

  useTimer(update, props.interval)

  useEffect(update, [props.time, props.formatTemplate])

  return <div className={classes}>{timeAgo}</div>
}

FxTimeAgo.defaultProps = {
  interval: 60
}

export default FxTimeAgo
