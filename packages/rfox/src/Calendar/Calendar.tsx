import classNames from 'classnames'
import type {
  CalendarEmits,
  CalendarPopupRef,
  CalendarProps,
  CalendarDetail
} from './types'
import type { FC } from '../helpers/types'
import { SelectorField } from '../SelectorField'
import CalendarPopup from './CalendarPopup'
import { useHandlers } from './use-calendar'
import { useEffect, useRef, useState } from 'react'
import { getDefaultDetail } from './util'
import { cloneDetail, isSameValue } from '../Picker/util'
import type { SelectorModelValue } from '../SelectorField/types'

const FxCalendar: FC<CalendarProps & CalendarEmits> = props => {
  const [isInitPopup, setIsInitPopup] = useState(false)
  const [popupVisible, setPopupVisible] = useState(true)
  const [fieldValue, setFieldValue] = useState('')
  const [fieldLabel, setFieldLabel] = useState('')
  const popupRef = useRef<CalendarPopupRef>(null)
  const detail = useRef<CalendarDetail>(getDefaultDetail())
  const changeValue = useRef<SelectorModelValue | null>(null)

  const { formatter, parser } = useHandlers(props)

  function updateValue(val: unknown) {
    if (popupRef.current) {
      // value 已经通过props传下去了
      return updateDetail(popupRef.current.getDetail())
    } else {
      return updateDetail(formatter(parser(val)))
    }
  }

  function updateDetail(_detail: CalendarDetail) {
    detail.current = _detail

    setFieldLabel(_detail.label)
    setFieldValue(
      _detail.value != null
        ? _detail.valueArray.map(v => v.join('-')).join(',')
        : ''
    )

    return getDetail()
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

  function onConfirm(_detail: CalendarDetail) {
    if (isSameValue(detail.current.value, _detail.value)) {
      return
    }

    updateDetail(_detail)

    changeValue.current = getDetail().value

    props.onChange && props.onChange(getDetail().value)
  }

  function onUpdateVisible(v: boolean) {
    setPopupVisible(v)
  }

  useEffect(() => {
    if (
      !(
        changeValue.current != null &&
        isSameValue(props.value, changeValue.current)
      )
    ) {
      updateValue(props.value)
    }

    changeValue.current = null
  }, [props.value])

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
