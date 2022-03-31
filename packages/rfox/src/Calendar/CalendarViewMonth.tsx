import classNames from 'classnames'
import type { CalendarViewMonthProps } from './types'
import type { VFC } from '../helpers/types'

const FxCalendarViewMonth: VFC<CalendarViewMonthProps> = ({
  mode,
  month,
  monthIndex,
  onDaysClick
}) => {
  const renderDays = () =>
    month.days.map((day, dayIndex) => {
      const dayClasses = classNames('fx-calendar-view_day', {
        disabled: day.state === 'disabled',
        selected:
          day.state === 'selected' ||
          day.state === 'startSelected' ||
          day.state === 'endSelected',
        'in-range': mode === 'range' && day.state === 'selected'
      })

      const topTextClasses = classNames('fx-calendar-view_day-top-text', {
        highlight: day.topHighlight
      })
      const bottomTextClasses = classNames('fx-calendar-view_day-bottom-text', {
        highlight: day.bottomHighlight
      })

      return (
        <div className={dayClasses} key={dayIndex} data-index={dayIndex}>
          {day.topText ? (
            <span className={topTextClasses}>{day.topText}</span>
          ) : (
            <></>
          )}
          {day.text}
          {day.bottomText ? (
            <span className={bottomTextClasses}>{day.bottomText}</span>
          ) : (
            <></>
          )}
        </div>
      )
    })

  return (
    <>
      <div className="fx-calendar-view_month-caption">{month.caption}</div>
      <div
        className="fx-calendar-view_days"
        data-index={monthIndex}
        onClick={onDaysClick}
      >
        {renderDays()}
      </div>
    </>
  )
}

export default FxCalendarViewMonth
