import {
  showToast,
  SelectorModelValue,
  PickerOnConfirm,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  FxCell,
  FxGroup,
  FxNoticeBar,
  FxDatePicker
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  visibleEvent?: boolean
  changeEvent?: boolean
  clickEvent?: boolean
}

export default function ExpDatePickerPopup() {
  const [popupValue, setPopupValue] = useState('')
  const [visible, setVisible] = useState(false)
  const clickEvent = useRef(false)
  const changeEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    visibleEvent.current = !!args.visibleEvent
    changeEvent.current = !!args.changeEvent
    clickEvent.current = !!args.clickEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', res)
      showToast(`${res.state} 事件触发`)
    }

    if (res.state === 'hidden') {
      clickEvent.current = false
      visibleEvent.current = false
      changeEvent.current = false
    }
  }

  const onConfirm: PickerOnConfirm = res => {
    if (clickEvent.current) {
      console.log('onConfirm', res)
      showToast(`点击确定按钮`)
    }
  }

  function onChange(res: SelectorModelValue) {
    if (changeEvent.current) {
      console.log('onChange', res)
      showToast(`值改为 ${res}`)
    }

    setPopupValue(res as string)
  }

  const onCancel: PopupOnCancel = res => {
    if (clickEvent.current) {
      console.log('onCancel', res)

      if (res.source === 'cancelClick') {
        showToast('点击了取消按钮')
      } else if (res.source === 'maskClick') {
        showToast('点击了蒙层')
      }
    }
  }

  return (
    <>
      <FxNoticeBar
        className="top-notice-bar"
        title="基础展示参数可以参考 DatePicker"
      />
      <FxGroup title="基础用法">
        <FxCell label="默认" isLink onClick={() => onShow({})}>
          {popupValue}
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell
          label="onChange"
          isLink
          onClick={() => onShow({ changeEvent: true })}
        />
        <FxCell
          label="onConfirm/onCancel"
          isLink
          onClick={() => onShow({ clickEvent: true })}
        />
        <FxCell
          label="onVisibleStateChange"
          isLink
          onClick={() => onShow({ visibleEvent: true })}
        />
      </FxGroup>
      <FxDatePicker.Popup
        visible={visible}
        initialMode="date"
        formatTemplate="YYYY年MM月DD日"
        title="DatePickerPopup"
        value={popupValue}
        onChange={onChange}
        onConfirm={onConfirm}
        onCancel={onCancel}
        onVisibleStateChange={onVisibleStateChange}
        onUpdateVisible={v => setVisible(v)}
      />
    </>
  )
}
