import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import type {
  CalendarEmits,
  CalendarPopupRef,
  CalendarProps,
  CalendarDetail
} from './types'
import type { VFC } from '../helpers/types'
import { SelectorField } from '../SelectorField'
import CalendarPopup from './CalendarPopup'
import { useHandlers } from './use-calendar'
import { cloneDetail, isSameValue } from '../Picker/util'

const FxCalendar: VFC<CalendarProps & CalendarEmits> = props => {
  const { formatter, parser, getDefaultDetail } = useHandlers(props)
  const [isInitPopup, setIsInitPopup] = useState(false)
  const [popupVisible, setPopupVisible] = useState(true)
  const [fieldValue, setFieldValue] = useState('')
  const [fieldLabel, setFieldLabel] = useState('')
  const popupRef = useRef<CalendarPopupRef>(null)
  const detail = useRef<CalendarDetail>(getDefaultDetail())

  function updateValue(val: unknown) {
    if (val == null) {
      // 解决 formily 强制null的问题
      return
    }

    updateDetail(formatter(parser(val)))
  }

  function updateDetail(newDetail: CalendarDetail) {
    detail.current = newDetail

    setFieldLabel(newDetail.label)
    setFieldValue(
      newDetail.value != null
        ? newDetail.valueArray.map(v => v.join('-')).join(',')
        : ''
    )
  }

  function onFieldClick() {
    if (!props.disabled) {
      if (!isInitPopup) {
        setIsInitPopup(true)
      } else {
        setPopupVisible(true)
      }
    }
  }

  function getDetail() {
    return cloneDetail(detail.current)
  }

  function onConfirm(newDetail: CalendarDetail) {
    if (isSameValue(detail.current.value, newDetail.value)) {
      return
    }

    updateDetail(newDetail)

    props.onChange && props.onChange(getDetail().value)
  }

  function onUpdateVisible(v: boolean) {
    setPopupVisible(v)
  }

  useEffect(() => updateValue(props.value), [props.value])

  useEffect(() => {
    if (isInitPopup && popupVisible) {
      props.onFocus && props.onFocus()
    } else if (!popupVisible) {
      props.onBlur && props.onBlur()
    }
  }, [isInitPopup, popupVisible])

  const classes = classNames('fx-calendar', props.className)

  return (
    <div className={classes}>
      <SelectorField
        label={fieldLabel}
        value={fieldValue}
        disabled={props.disabled}
        name={props.name}
        placeholder={props.placeholder}
        onFieldClick={onFieldClick}
      />
      {isInitPopup ? (
        <CalendarPopup
          ref={popupRef}
          value={props.value}
          minDate={props.minDate}
          maxDate={props.maxDate}
          initialMode={props.initialMode}
          allowSameDay={props.allowSameDay}
          maxRange={props.maxRange}
          dayHandler={props.dayHandler}
          firstDayOfWeek={props.firstDayOfWeek}
          formatter={props.formatter}
          parser={props.parser}
          title={props.placeholder}
          showConfirm={props.showConfirm}
          showClose={props.showClose}
          visible={popupVisible}
          onUpdateVisible={onUpdateVisible}
          onConfirm={onConfirm}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default FxCalendar
