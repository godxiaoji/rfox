import { useRef } from 'react'
import dayjs from '../helpers/day'
import { getDefaultDetail, MODE_NAMES } from './util'
import type { Mode, CalendarDetail, CalendarCommonProps } from './types'
import type { SelectorModelValue, SelectorDetail } from '../SelectorField/types'
import { getEnumsValue } from '../helpers/validator'

function valueParser(val: unknown, mode: Mode) {
  const values: number[] = []

  if (val == null || val === 0 || val === '') {
    return values
  }

  if (Array.isArray(val)) {
    const s = (val as string[])[0]
    const e = (val as string[])[1]

    if (s != null && dayjs(s).isValid()) {
      values.push(dayjs(s).startOf('day').valueOf())
    }
    if (e != null && dayjs(e).isValid()) {
      values.push(dayjs(e).startOf('day').valueOf())
    }
  } else if (dayjs(val as string).isValid()) {
    values.push(
      dayjs(val as string)
        .startOf('day')
        .valueOf()
    )
  }

  if (values[0] && (!values[1] || values[1] < values[0])) {
    values[1] = dayjs(values[0]).add(1, 'day').valueOf()
  }

  if (values.length > 0 && mode !== 'range') {
    values[1] = 0
  }
  return values
}

function detailFormatter(timeArray: number[], mode: Mode) {
  const detail = getDefaultDetail()
  const start = timeArray[0]
  const end = timeArray[1]

  if (start) {
    const startDjs = dayjs(start)

    if (mode === 'range') {
      if (start && end) {
        const endDjs = dayjs(end)
        detail.value.push(startDjs.toDate())
        detail.value.push(endDjs.toDate())
        detail.valueArray.push(startDjs.toArray().slice(0, 3))
        detail.valueArray.push(endDjs.toArray().slice(0, 3))

        if (start === end) {
          detail.label = startDjs.format('YYYY-MM-DD')
        } else {
          detail.label = [
            startDjs.format('MM-DD'),
            endDjs.format('MM-DD')
          ].join(' ~ ')
        }

        detail.rangeCount = Math.floor((end - start) / (24 * 3600 * 1000)) + 1
      }
    } else {
      detail.value.push(startDjs.toDate())
      detail.valueArray.push(startDjs.toArray().slice(0, 3))
      detail.label = startDjs.format('YYYY-MM-DD')
      detail.rangeCount = 1
    }
  }

  return detail
}

export function useHandlers(props: CalendarCommonProps) {
  const mode = useRef(getEnumsValue(MODE_NAMES, props.initialMode))

  const parser = function (val: unknown) {
    if (props.parser) {
      return props.parser(val, mode.current).map((d: Date) => {
        return d.getTime()
      })
    }
    return valueParser(val, mode.current)
  }

  const formatter = function (valueArray: number[]) {
    const detail: CalendarDetail = detailFormatter(valueArray, mode.current)

    if (props.formatter) {
      const ret = props.formatter(
        valueArray.map(v => new Date(v)),
        mode.current
      )

      if ((ret as SelectorDetail)?.label) {
        detail.label = (ret as SelectorDetail).label
        detail.value = (ret as SelectorDetail).value
      } else {
        detail.value = ret as SelectorModelValue
      }
    }

    return detail
  }

  return {
    mode: mode.current,
    parser,
    formatter,
    getDefaultDetail: () => formatter([])
  }
}
