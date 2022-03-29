import {
  showToast,
  showDatePicker,
  SelectorModelValue,
  DatePickerOptionFilter,
  FxGroup,
  FxCell,
  FxDatePicker
} from '@/index'
import dayjs from 'dayjs'

const title = 'DatePicker'
const minDate = dayjs().startOf('day').subtract(4, 'year').toDate()
const maxDate = dayjs().startOf('day').add(5, 'year').toDate()
const disableValue = new Date()

export default function ExpDatePicker() {
  const filter: DatePickerOptionFilter = (number, type) => {
    if (type === 'second' && number % 5 !== 0) {
      return false
    }

    return true
  }

  function onChange(res: SelectorModelValue) {
    console.log('change', res)
    showToast(`值改为 ${res}`)
  }

  function onCallApi() {
    showDatePicker({
      title,
      success: res => {
        console.log(res)
        if (res.cancel) {
          showToast('取消了')
        } else {
          showToast(`选择了 ${res.detail.label}`)
        }
      }
    })
  }

  return (
    <>
      <FxGroup title="initialMode">
        <FxCell label="日期 date">
          <FxDatePicker initialMode="date" />
        </FxCell>
        <FxCell label="时间 time">
          <FxDatePicker initialMode="time" />
        </FxCell>
        <FxCell label="日期时间 datetime">
          <FxDatePicker initialMode="datetime" />
        </FxCell>
        <FxCell label="分秒 minute-second">
          <FxDatePicker initialMode="minute-second" />
        </FxCell>
        <FxCell label="时分 hour-minute">
          <FxDatePicker initialMode="hour-minute" />
        </FxCell>
        <FxCell label="天时 day-hour">
          <FxDatePicker initialMode="day-hour" />
        </FxCell>
        <FxCell label="月日 month-day">
          <FxDatePicker initialMode="month-day" />
        </FxCell>
        <FxCell label="月日时 month-day-hour">
          <FxDatePicker initialMode="month-day-hour" />
        </FxCell>
        <FxCell label="月日时分 month-day-hour-minute">
          <FxDatePicker initialMode="month-day-hour-minute" />
        </FxCell>
        <FxCell label="年月 year-month">
          <FxDatePicker initialMode="year-month" />
        </FxCell>
        <FxCell label="年月日时 year-month-day-hour">
          <FxDatePicker initialMode="year-month-day-hour" />
        </FxCell>
        <FxCell label="年月日时分 year-month-day-hour-minute">
          <FxDatePicker initialMode="year-month-day-hour-minute" />
        </FxCell>
      </FxGroup>
      <FxGroup title="minDate & maxDate">
        <FxCell label="-5year ~ 5year">
          <FxDatePicker
            initialMode="date"
            minDate={maxDate}
            maxDate={minDate}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="filter">
        <FxCell label="秒步进5">
          <FxDatePicker initialMode="datetime" filter={filter} />
        </FxCell>
      </FxGroup>
      <FxGroup title="formatTemplate">
        <FxCell label="YYYY年MM月DD日">
          <FxDatePicker
            initialMode="date"
            formatTemplate="YYYY年MM月DD日"
            v-model="formatValue"
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="disabled">
        <FxCell label="禁用">
          <FxDatePicker initialMode="date" disabled value={disableValue} />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="change">
          <FxDatePicker initialMode="datetime" onChange={onChange} />
        </FxCell>
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showDatePicker" isLink onClick={() => onCallApi()} />
      </FxGroup>
    </>
  )
}
