import {
  FxCalendar,
  FxNoticeBar,
  FxCell,
  FxGroup,
  CalendarOnSelect,
  showToast
} from '@/index'
import { useState } from 'react'
import { formatter, parser } from '../Calendar/utils'

export default function ExpCalendarView() {
  const [viewValue, setViewValue] = useState('')
  const [viewRangeValue, setViewRangeValue] = useState('')

  const onSelect: CalendarOnSelect = res => {
    console.log('select', res)

    showToast(`选择：${res.label}`)
  }

  return (
    <>
      <FxNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 Calendar"
      />
      <FxGroup title="initialMode=single">
        <FxCell label="value:"> {viewValue} </FxCell>
        <FxCalendar.View
          value={viewValue}
          onChange={v => setViewValue(v as string)}
          formatter={formatter}
          parser={parser}
        />
      </FxGroup>
      <FxGroup title="initialMode=range">
        <FxCell label="value:"> {viewRangeValue} </FxCell>
        <FxCalendar.View
          initialMode="range"
          value={viewRangeValue}
          onChange={v => setViewRangeValue(v as string)}
          formatter={formatter}
          parser={parser}
        />
      </FxGroup>
      <FxGroup title="select 事件">
        <FxCalendar.View onSelect={onSelect} />
      </FxGroup>
    </>
  )
}
