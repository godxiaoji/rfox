import classNames from 'classnames'
import type {
  CalendarPopupEmits,
  CalendarPopupProps,
  CalendarPopupRef,
  CalendarViewRef,
  CalendarDetail
} from './types'
import type { FRFC } from '../helpers/types'
import CalendarView from './CalendarView'
import { Drawer } from '../Drawer'
import { Button } from '../Button'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import type {
  PopupCustomCancel,
  PopupCustomConfirm,
  PopupRef
} from '../popup/types'
import { cloneDetail, isSameDetail } from '../Picker/util'
import { useLocale } from '../ConfigProvider/context'
import { getDefaultDetail } from './util'

const FxCalendarPopup: FRFC<
  CalendarPopupRef,
  CalendarPopupProps & CalendarPopupEmits
> = (props, ref) => {
  const { locale } = useLocale()
  const popupRef = useRef<PopupRef>(null)
  const viewRef = useRef<CalendarViewRef>(null)
  const [valueSize, setValueSize] = useState(0)
  const detail = useRef<CalendarDetail>(getDefaultDetail())

  function onCancelClick() {
    popupRef.current?.onCancelClick()
  }

  const customConfirm: PopupCustomConfirm = detail => {
    popupRef.current?.customConfirm(detail)
  }

  const customCancel: PopupCustomCancel = (key, focus) => {
    popupRef.current?.customCancel(key, focus)
  }

  function onViewSelect() {
    if (!props.showConfirm) {
      confirm()
    } else if (viewRef.current) {
      // 判断下是否可以confirm

      const newDetail = viewRef.current.getDetail()
      setValueSize(newDetail.valueArray.length)
    }
  }

  function onConfirmClick() {
    confirm()
  }

  function confirm() {
    if (!viewRef.current) {
      return
    }

    const newDetail = viewRef.current.getDetail()
    const isChange = !isSameDetail(newDetail, detail.current)

    updateDetail(newDetail)

    isChange && props.onChange && props.onChange(getDetail().value)

    customConfirm(getDetail())
  }

  function getDetail() {
    return cloneDetail(detail.current)
  }

  function updateDetail(_detail: CalendarDetail) {
    detail.current = _detail
    setValueSize(detail.current.valueArray.length)
  }

  useEffect(() => {
    viewRef.current && updateDetail(viewRef.current.getDetail())
  }, [])

  const classes = classNames('fx-calendar-popup', props.className)

  useImperativeHandle(
    ref,
    () => ({
      customConfirm,
      customCancel,
      onCancelClick,
      getDetail
    }),
    []
  )

  return (
    <Drawer
      ref={popupRef}
      className={classes}
      placement="bottom"
      showClose={props.showClose}
      visible={props.visible}
      onConfirm={props.onConfirm}
      onCancel={props.onCancel}
      onVisibleStateChange={props.onVisibleStateChange}
      onUpdateVisible={props.onUpdateVisible}
    >
      <CalendarView
        ref={viewRef}
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
        onSelect={onViewSelect}
      />
      {props.showConfirm ? (
        <div className="fx-calendar-popup_confirm">
          <Button
            type="primary"
            onClick={onConfirmClick}
            disabled={valueSize == 0}
          >
            {locale.calendarConfirmText}
          </Button>
        </div>
      ) : (
        <></>
      )}
    </Drawer>
  )
}

export default forwardRef(FxCalendarPopup)
