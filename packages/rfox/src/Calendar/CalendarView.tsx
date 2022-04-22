import type { UIEventHandler } from 'react'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import classNames from 'classnames'
import type {
  CalendarViewEmits,
  CalendarViewProps,
  CalendarViewRef,
  DayInfo
} from './types'
import type { OnClick, Dayjs, FRVFC } from '../helpers/types'
import dayjs from '../helpers/day'
import { cloneData, getNumber, isSameArray } from '../helpers/util'
import { showToast } from '../Toast'
import {
  getFirstDayOfWeek,
  getMaxTime,
  getMinTime,
  getTimeByDate,
  getViewBodyTitleStyles,
  printError
} from './util'
import { useHandlers } from './use-calendar'
import { useLocale } from '../ConfigProvider/context'

import ViewMonth from './CalendarViewMonth'
import { useStableState } from '../hooks/use'
import { CSSProperties2CssText, getScrollTop } from '../helpers/dom'
import VirtualList from '../VirtualList'

type WeekDay = '0' | '1' | '2' | '3' | '4' | '5' | '6'

interface SelectDay {
  dateString: string
  timestamp: number
  monthIndex: number
  dayIndex: number
  state?: string
}

interface Month {
  caption: string
  monthString: string
  days: DayInfo[]
  startDay: number
}

const defaultWeekDays: WeekDay[] = ['0', '1', '2', '3', '4', '5', '6']

function getDefaultSelectDay(): SelectDay {
  return {
    dateString: '',
    timestamp: 0,
    monthIndex: 0,
    dayIndex: 0
  }
}

const FxCalendarView: FRVFC<
  CalendarViewRef,
  CalendarViewProps & CalendarViewEmits
> = (props, ref) => {
  const { locale } = useLocale()
  const { formatter, parser, mode } = useHandlers(props)
  const [weekDays, setWeekDays] = useState<WeekDay[]>([])
  const [getMonths, setMonths] = useStableState<Month[]>([])
  const start = useRef(getDefaultSelectDay())
  const end = useRef(getDefaultSelectDay())
  const bodyEl = useRef<HTMLDivElement>(null)
  const bodyTitleEl = useRef<HTMLDivElement>(null)

  const maxRange = getNumber(props.maxRange, Infinity)
  const firstDayOfWeek = getFirstDayOfWeek(props.firstDayOfWeek)

  function getSelectedInfo(timestamp: number): SelectDay | null {
    const _months = getMonths(true)

    for (let i = 0; i < _months.length; i++) {
      for (let j = 0; j < _months[i].days.length; j++) {
        const day = _months[i].days[j]

        if (day.state !== 'disabled') {
          if (timestamp === day.timestamp) {
            return {
              dateString: day.dateString,
              timestamp,
              monthIndex: i,
              dayIndex: j
            }
          }
        }
      }
    }

    return null
  }

  function updateValue(val: unknown) {
    return updateOriginalValue(parser(val))
  }

  function updateOriginalValue(timeArr: number[]) {
    if (timeArr.length === 1) {
      timeArr.push(0)
    }

    if (
      !isSameArray(timeArr, [start.current.timestamp, end.current.timestamp])
    ) {
      if (timeArr.length === 0) {
        setSelected('start', null)
        setSelected('end', null)
        updateStates()
      } else if (mode === 'range') {
        const _start = getSelectedInfo(timeArr[0])
        const _end = getSelectedInfo(timeArr[1])

        if (_start && _end) {
          const { rangeCount, hasDisabled } = getRangeInfo(_start, _end)

          if (hasDisabled) {
            printError('The range of "value" contains disabled days.')
          } else if (rangeCount > maxRange) {
            printError(
              `The range of "value" contains ${rangeCount} days, no more than ${maxRange} days.`
            )
          } else {
            setSelected('start', _start)
            setSelected('end', _end)
            updateStates()
          }
        } else {
          printError('The range of "value" is not in the optional range.')
        }
      } else {
        const select = getSelectedInfo(timeArr[0])

        if (select) {
          setSelected('start', select)
          setSelected('end', null)
          updateStates()
        } else {
          printError('The range of "value" is not in the optional range.')
        }
      }
    }

    return getDetail()
  }

  function setSelected(name: 'start' | 'end', day: SelectDay | null) {
    if (day) {
      name === 'start' ? (start.current = day) : (end.current = day)
    } else {
      name === 'start'
        ? (start.current = getDefaultSelectDay())
        : (end.current = getDefaultSelectDay())
    }
  }

  function getState(timestamp: number) {
    let state = ''

    if (
      (mode === 'range' &&
        timestamp >= start.current.timestamp &&
        timestamp <= end.current.timestamp) ||
      timestamp === start.current.timestamp
    ) {
      state = 'selected'
    }
    if (mode === 'range' && state == 'selected') {
      if (timestamp === end.current.timestamp) {
        state = 'endSelected'
      } else if (timestamp === start.current.timestamp) {
        state = 'startSelected'
      }
    }

    return state
  }

  function getDayInfo(day: Dayjs, extend: { state: string }): DayInfo {
    const dateString = day.format('YYYY-MM-DD')
    const state = extend.state

    let dayInfo: DayInfo = {
      topHighlight: false,
      topText:
        state === 'startSelected'
          ? locale.calendarSelectedStartText
          : state === 'endSelected'
          ? locale.calendarSelectedEndText
          : '',
      state,
      bottomHighlight: false,
      bottomText: '',
      text: day.date().toString(),
      dateString,
      timestamp: day.valueOf()
    }

    if (props.dayHandler) {
      dayInfo.date = day.toDate()
      dayInfo = props.dayHandler(Object.assign(dayInfo, extend))
      delete dayInfo.date
    }

    if (dayInfo.state === 'disabled' && !extend.state) {
      extend.state = 'disabled'
    }

    return Object.assign(dayInfo, extend, {
      dateString,
      timestamp: day.valueOf()
    })
  }

  function getStartMonth(day: Dayjs) {
    const month: Month = {
      caption: day.format(locale.calendarMonthCaption),
      monthString: day.format('YYYY-MM'),
      days: [],
      startDay: day.date()
    }

    let day2 = day.startOf('month')

    // 头部周偏移占位
    for (let i = 0, len = day2.day() - firstDayOfWeek; i < len; i++) {
      month.days.push({
        cover: true,
        text: '',
        state: 'disabled',
        dateString: '',
        timestamp: 0
      })
    }

    while (day2.date() < month.startDay) {
      month.days.push(getDayInfo(day2, { state: 'disabled' }))
      day2 = day2.add(1, 'day')
    }

    return month
  }

  function updateWeekDays() {
    let i = firstDayOfWeek
    const newWeekDays: WeekDay[] = []

    let weekDay: WeekDay
    while (newWeekDays.length < 7) {
      weekDay = defaultWeekDays[i]
      newWeekDays.push(weekDay)
      i = (i + 1) % 7
    }

    setWeekDays(newWeekDays)
  }

  const minTimestamp = useRef(0)
  const maxTimestamp = useRef(0)
  const defaultMixTime = useRef(getMinTime())

  function updateOptions() {
    if (props.minDate instanceof Date) {
      minTimestamp.current = getTimeByDate(props.minDate)
    } else {
      minTimestamp.current = defaultMixTime.current
    }

    if (props.maxDate instanceof Date) {
      if (props.maxDate.getTime() < minTimestamp.current) {
        printError(
          'The value of "maxDate" cannot be less than the value of "minDate".'
        )
        maxTimestamp.current = getMaxTime(minTimestamp.current)
      } else {
        maxTimestamp.current = getTimeByDate(props.maxDate)
      }
    } else {
      maxTimestamp.current = getMaxTime(minTimestamp.current)
    }

    updateWeekDays()

    const maxDay = dayjs(maxTimestamp.current)
    const _months: Month[] = []

    let day = dayjs(minTimestamp.current)
    let monthKey = day.month()
    let month = getStartMonth(day)

    while (!day.isAfter(maxDay)) {
      if (day.month() !== monthKey) {
        monthKey = day.month()
        _months.push(month)
        month = getStartMonth(day)
      }

      const dayInfo = getDayInfo(day, {
        state: getState(day.valueOf())
      })

      // if (
      //   dayInfo.state === 'startSelected' ||
      //   (mode === 'single' && dayInfo.state === 'selected')
      // ) {
      //   setSelected('start', dayInfo, _months.length, month.days.length)
      // } else if (dayInfo.state === 'endSelected') {
      //   setSelected('end', dayInfo, _months.length, month.days.length)
      // }

      month.days.push(dayInfo)
      day = day.add(1, 'day')
    }

    // 补上最后一个月结尾的天数
    while (day.month() === monthKey) {
      month.days.push(
        getDayInfo(day, {
          state: 'disabled'
        })
      )

      day = day.add(1, 'day')
    }

    _months.push(month)

    setMonths(_months)

    updateBodyFixed(bodyScrollTop.current)
  }

  function dayInfo2SelectDay(
    day: DayInfo,
    monthIndex: number,
    dayIndex: number
  ): SelectDay {
    return {
      dateString: day.dateString,
      timestamp: day.timestamp,
      state: day.state,
      monthIndex,
      dayIndex
    }
  }

  const onDaysClick: OnClick = e => {
    const target = e.target as HTMLElement
    let $day: HTMLElement | null = null

    if (target.tagName === 'SPAN') {
      $day = target.parentElement as HTMLElement
    } else if (target !== e.currentTarget) {
      $day = target
    }

    if (!$day) {
      return
    }

    const monthIndex = parseInt(
      (e.currentTarget as HTMLElement).dataset.index as string
    )
    const dayIndex = parseInt($day.dataset.index as string)
    const day = getMonths(true)[monthIndex].days[dayIndex]

    if (day.state === 'disabled') {
      return
    }

    const newDay = dayInfo2SelectDay(day, monthIndex, dayIndex)

    if (mode === 'range') {
      // 范围
      if (
        (start.current.dateString && end.current.dateString) ||
        !start.current.dateString
      ) {
        setSelected('end', null)
      } else {
        if (
          day.timestamp > start.current.timestamp ||
          (props.allowSameDay && day.timestamp === start.current.timestamp)
        ) {
          // 范围
          const { rangeCount, hasDisabled } = getRangeInfo(start.current, {
            monthIndex,
            dayIndex
          })

          if (!hasDisabled) {
            if (rangeCount > maxRange) {
              showToast(
                locale.calendarMaxRangeTips.replace(
                  '{{maxRange}}',
                  maxRange.toString()
                )
              )
            } else {
              setSelected('end', newDay)
              // this.rangeCount = rangeCount
              updateStates()
              onSelect()
            }
            return
          }
        }
      }
    } else {
      // 单选
      setSelected('start', newDay)
      // this.rangeCount = 1
      updateStates()
      onSelect()
      return
    }

    // range 设置开始时间
    setSelected('start', newDay)
    updateStates()
  }

  function updateStates() {
    const _months = cloneData(getMonths(true))

    for (let i = 0; i < _months.length; i++) {
      for (let j = 0; j < _months[i].days.length; j++) {
        const day = _months[i].days[j]

        if (day.state !== 'disabled') {
          const newState = getState(day.timestamp)

          if (newState !== day.state) {
            _months[i].days[j] = getDayInfo(dayjs(day.timestamp), {
              state: newState
            })
          }
        }
      }
    }

    setMonths(_months)
  }

  const timeValue = useRef([start.current.timestamp, end.current.timestamp])

  function onChange() {
    if (
      isSameArray(
        [start.current.timestamp, end.current.timestamp],
        timeValue.current
      )
    ) {
      return
    }

    timeValue.current = [start.current.timestamp, end.current.timestamp]
    props.onChange && props.onChange(getDetail().value)
  }

  function onSelect() {
    onChange()
    props.onSelect && props.onSelect(getDetail())
  }

  function getDetail() {
    return formatter([start.current.timestamp, end.current.timestamp])
  }

  /**
   * 判断所选范围内有没有 disabled
   */
  function getRangeInfo(
    start: { monthIndex: number; dayIndex: number },
    end: { monthIndex: number; dayIndex: number }
  ) {
    let hasDisabled = false
    let rangeCount =
      start.monthIndex === end.monthIndex && start.dayIndex === end.dayIndex
        ? 1
        : 2

    for (let i = start.monthIndex; i <= end.monthIndex; i++) {
      for (
        let j = i === start.monthIndex ? start.dayIndex + 1 : 0,
          len =
            i === end.monthIndex
              ? end.dayIndex
              : getMonths(true)[i].days.length;
        j < len;
        j++
      ) {
        const day = getMonths(true)[i].days[j]

        if (!day.cover) {
          if (day.state === 'disabled') {
            hasDisabled = true
          } else {
            rangeCount++
          }
        }
      }
    }

    return {
      hasDisabled,
      rangeCount
    }
  }

  const monthActiveIndex = useRef(0)
  const bodyScrollTop = useRef(0)

  const onScroll: UIEventHandler<HTMLDivElement> = e => {
    bodyScrollTop.current = getScrollTop(e.currentTarget as HTMLDivElement)

    updateBodyFixed(bodyScrollTop.current)
  }

  function updateBodyTitle(t: string, tY: number | null) {
    if (!bodyTitleEl.current) {
      return
    }

    bodyTitleEl.current.textContent = t
    bodyTitleEl.current.style.cssText = CSSProperties2CssText(
      getViewBodyTitleStyles(tY)
    )
  }

  function updateBodyFixed(scrollTop: number) {
    const h = 28
    const $items: HTMLDivElement[] = bodyEl.current
      ? [].slice.call(
          bodyEl.current.querySelectorAll('.fx-virtual-list_item'),
          0
        )
      : []

    function getItemName(_index: number) {
      const realIndex = $items[_index]
        ? parseInt($items[_index].dataset.index as string)
        : -1

      return realIndex === -1 ? '' : getMonths()[realIndex].caption
    }

    if ($items.length === 0) {
      updateBodyTitle('', null)
      return
    }

    const _index = monthActiveIndex.current
    const nextIndex = _index + 1
    const offsetTops = $items.map($el => {
      const matches = $el.style.cssText.match(
        /translate3d\(\w+,\s*(\d+)px,\s*\w+\)/
      )

      return matches && matches[1] ? parseFloat(matches[1]) : -1
    })

    const current = offsetTops[_index]
    const next =
      offsetTops[nextIndex] != null ? offsetTops[nextIndex] : Infinity
    const first = offsetTops[0]

    if (scrollTop < first) {
      updateBodyTitle('', null)
    } else if (scrollTop >= current) {
      if (scrollTop >= next) {
        monthActiveIndex.current = nextIndex
        updateBodyTitle(getItemName(nextIndex), 0)

        if (
          offsetTops[nextIndex + 1] &&
          scrollTop >= offsetTops[nextIndex + 1]
        ) {
          // 超过了
          updateBodyFixed(scrollTop)
        }
      } else if (next - scrollTop < h) {
        updateBodyTitle(getItemName(_index), next - scrollTop - h)
      } else {
        updateBodyTitle(getItemName(_index), 0)
      }
    } else {
      if (current - scrollTop < h) {
        updateBodyTitle(getItemName(_index - 1), current - scrollTop - h)
      } else {
        monthActiveIndex.current = _index - 1
        updateBodyTitle(getItemName(_index - 1), 0)

        if (offsetTops[_index - 1] && offsetTops[_index - 1] > scrollTop) {
          updateBodyFixed(scrollTop)
        }
      }
    }
  }

  function getItemSize(index: number) {
    return Math.ceil((getMonths()[index]?.days.length ?? 0) / 7) * 64 + 28
  }

  useEffect(() => {
    updateOptions()
    updateValue(props.value)
  }, [props.minDate, props.maxDate, locale])

  useEffect(() => {
    updateValue(props.value)
  }, [props.value])

  const renderWeekdays = useMemo(
    () =>
      weekDays.map(weekDay => {
        const weekDayClasses = classNames('fx-calendar-view_weekday', {
          highlight: weekDay === '0' || weekDay === '6'
        })
        return (
          <span className={weekDayClasses} key={weekDay}>
            {locale.calendarWeekDayTexts[weekDay]}
          </span>
        )
      }),
    [locale, weekDays]
  )

  const renderMonths = useMemo(
    () => (
      <VirtualList
        onScroll={onScroll}
        ids={getMonths().map(v => v.caption)}
        itemSize={getItemSize}
        render={({ index }) => {
          const month = getMonths()[index]

          return (
            <ViewMonth
              month={month}
              monthIndex={index}
              onDaysClick={onDaysClick}
              mode={mode}
            />
          )
        }}
      />
    ),
    [getMonths(), onDaysClick]
  )

  const classes = classNames('fx-calendar-view', props.className)

  useImperativeHandle(
    ref,
    () => ({
      getDetail
    }),
    []
  )

  return (
    <div className={classes}>
      <div className="fx-calendar-view_header">
        <div className="fx-calendar-view_weekdays">{renderWeekdays}</div>
      </div>
      <div className="fx-calendar-view_body" ref={bodyEl}>
        {renderMonths}
        <div
          className="fx-calendar-view_month-caption fixed"
          ref={bodyTitleEl}
        ></div>
      </div>
    </div>
  )
}

export default forwardRef(FxCalendarView)
