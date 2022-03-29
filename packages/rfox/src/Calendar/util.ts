import type { CalendarOriginalDetail, Mode } from './types'
import Exception from '../helpers/exception'
import { getNumber, isInNumberRange } from '../helpers/util'

export const DEFAULT_MONTH_RANGE = 6
export const MODE_NAMES: Mode[] = ['single', 'range']

export function getDefaultDetail(): CalendarOriginalDetail {
  return {
    value: [],
    valueArray: [],
    label: '',
    rangeCount: 0
  }
}

export function printError(message: string) {
  console.error(new Exception(message, Exception.TYPE.PROP_ERROR, 'Calendar'))
}

export function getFirstDayOfWeek(firstDayOfWeek?: number | string) {
  const num = getNumber(firstDayOfWeek, 0)

  return isInNumberRange(num, 0, 6) ? Math.round(num) : 0
}
