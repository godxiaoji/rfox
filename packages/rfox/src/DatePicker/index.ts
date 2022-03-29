import _DatePicker from './DatePicker'
import DatePickerPopup from './DatePickerPopup'
import DatePickerView from './DatePickerView'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ShowDatePickerOptions } from '../DatePicker/types'
import type { SelectorDetail } from '../SelectorField/types'

const showDatePicker = createShowPopup<
  ShowDatePickerOptions,
  PopupSuccessConfirmArgs<SelectorDetail>
>({
  apiName: 'showDatePicker',
  component: DatePickerPopup,
  createHook: createConfirmHook
})

const DatePicker = Object.assign(_DatePicker, {
  Popup: DatePickerPopup,
  View: DatePickerView
})

export { DatePicker, DatePickerPopup, DatePickerView, showDatePicker }

export default DatePicker
