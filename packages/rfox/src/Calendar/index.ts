import _Calendar from './Calendar'
import CalendarPopup from './CalendarPopup'
import CalendarView from './CalendarView'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { ShowCalendarOptions, CalendarDetail } from '../Calendar/types'

const showCalendar = createShowPopup<
  ShowCalendarOptions,
  PopupSuccessConfirmArgs<CalendarDetail>
>({
  apiName: 'showCalendar',
  component: CalendarPopup,
  createHook: createConfirmHook
})

const Calendar = Object.assign(_Calendar, {
  Popup: CalendarPopup,
  View: CalendarView
})

export { Calendar, CalendarPopup, CalendarView, showCalendar }

export default Calendar
