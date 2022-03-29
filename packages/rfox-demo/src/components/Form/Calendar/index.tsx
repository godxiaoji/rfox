import {
  showToast,
  showCalendar,
  SelectorModelValue,
  FxGroup,
  FxCell,
  FxCalendar,
  SelectorDetail
} from '@/index'
import { formatter, parser } from './utils'
import dayjs from 'dayjs'

const minDate = dayjs().startOf('day').subtract(1, 'month').toDate()
const maxDate = dayjs().startOf('day').add(1, 'month').toDate()

const formatValue = (
  formatter(
    [dayjs().startOf('day').add(1, 'month').toDate()],
    'single'
  ) as SelectorDetail
).value
const disableValue = dayjs().startOf('day').add(1, 'month').toDate()

export default function ExpCalendar() {
  function onCallApi() {
    showCalendar({
      mode: 'range',
      showClose: true,
      success: res => {
        console.log('success', res)
        if (res.cancel) {
          showToast('取消了')
        } else {
          showToast(`选择了 ${res.detail.label}`)
        }
      }
    })
  }

  function onChange(res: SelectorModelValue) {
    console.log('change', res)

    showToast('change: ' + (res as any)[0])
  }

  return (
    <>
      <FxGroup title="initialMode=simple">
        <FxCell label="默认">
          <FxCalendar />
        </FxCell>
        <FxCell label="showConfirm=true">
          <FxCalendar showConfirm />
        </FxCell>
        <FxCell label="showClose=true">
          <FxCalendar showClose />
        </FxCell>
        <FxCell label="firstDayOfWeek=1">
          <FxCalendar firstDayOfWeek="1" />
        </FxCell>
        <FxCell label="minDate/maxDate +-1month">
          <FxCalendar minDate={minDate} maxDate={maxDate} />
        </FxCell>
        <FxCell label="formatter/parser">
          <FxCalendar
            formatter={formatter}
            parser={parser}
            value={formatValue}
          />
        </FxCell>
        <FxCell label="禁用">
          <FxCalendar disabled value={disableValue} />
        </FxCell>
      </FxGroup>
      <FxGroup title="initialMode=range">
        <FxCell label="默认">
          <FxCalendar initialMode="range" />
        </FxCell>
        <FxCell label="allowSameDay">
          <FxCalendar initialMode="range" allowSameDay />
        </FxCell>
        <FxCell label="maxRange=5">
          <FxCalendar initialMode="range" maxRange="5" />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="change">
          <FxCalendar onChange={onChange} />
        </FxCell>
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showCalendar" isLink onClick={() => onCallApi()} />
      </FxGroup>
    </>
  )
}
