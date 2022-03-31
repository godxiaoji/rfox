import { useMemo, useRef } from 'react'
import { DatePickerCommonProps } from './types'
import dayjs from '../helpers/day'
import type { Dayjs } from '../helpers/types'
import { getEnumsValue } from '../helpers/validator'
import type {
  PickerOptionsHandler,
  PickerLabelFormatter,
  PickerHandlers
} from '../Picker/types'
import type {
  SelectorValueParser,
  SelectorValueFormatter
} from '../SelectorField/types'
import {
  array2Date,
  day2Array,
  getFormatTemplate,
  MODE_NAMES,
  parseRows
} from './date'
import { rangeNumber, returnTrue } from '../helpers/util'
import { withProvider } from '../hooks/with'
import { PickerContext } from '../Picker/context'

export function useHandlers(props: DatePickerCommonProps) {
  // 使用useRef保持生命周期一致
  const mode = useRef(getEnumsValue(MODE_NAMES, props.initialMode))
  const defaultMinData = useRef(
    dayjs().startOf('day').subtract(9, 'year').toDate()
  )
  const defaultMaxData = useRef(
    dayjs().add(1, 'day').startOf('day').subtract(1, 'second').toDate()
  )

  let minDate = props.minDate ?? defaultMinData.current
  let maxDate = props.maxDate ?? defaultMaxData.current
  if (minDate.getTime() > maxDate.getTime()) {
    // 兼容min max搞反的问题
    maxDate = [minDate, (minDate = maxDate)][0]
  }

  const filter = props.filter || returnTrue

  const optionsHandler: PickerOptionsHandler = (index, parent) => {
    return parseRows(index, parent || null, {
      filter,
      minDate,
      maxDate,
      mode: mode.current
    })
  }

  const parser: SelectorValueParser = value => {
    if (props.parser) {
      return props.parser(value)
    }

    let djs: Dayjs | null = null

    if (value instanceof Date) {
      djs = dayjs(value)
    } else if (
      props.formatTemplate &&
      value != null &&
      value !== '' &&
      typeof value === 'string'
    ) {
      djs = dayjs(value as string, props.formatTemplate, true)
    }

    return day2Array(djs, mode.current)
  }

  const defaultValueGetter = () => {
    return parser(
      new Date(rangeNumber(Date.now(), minDate.getTime(), maxDate.getTime()))
    )
  }

  const labelFormatter: PickerLabelFormatter = array => {
    return array.length === 0
      ? ''
      : dayjs(array2Date(array, mode.current)).format(
          getFormatTemplate(mode.current, props.formatTemplate)
        )
  }

  const formatter: SelectorValueFormatter = (valueArray, labelArray) => {
    if (props.formatter) {
      return props.formatter(valueArray, labelArray)
    }

    const label = labelFormatter(labelArray)
    return {
      value: props.formatTemplate
        ? label
        : array2Date(valueArray, mode.current),
      label
    }
  }

  const handlers: PickerHandlers = {
    optionsHandler,
    formatter,
    parser,
    defaultValueGetter,
    labelFormatter
  }

  const PickerProvider = useMemo(
    () => withProvider(PickerContext, handlers),
    [props.minDate, props.maxDate, props.formatTemplate, props.filter]
  )

  return { handlers, PickerProvider }
}
