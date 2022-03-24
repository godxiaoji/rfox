import {
  showToast,
  PopupOnVisibleStateChange,
  FxCell,
  FxGroup,
  FxDropdown
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  visibleEvent?: boolean
}

export default function ExpDropdown() {
  const [visible, setVisible] = useState(false)
  const [selector, setSelector] = useState('')

  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector ?? '')

    visibleEvent.current = !!args.visibleEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('visible-state-change', res)
      showToast(`${res.state} 事件触发`)
    }

    if (res.state === 'hidden') {
      visibleEvent.current = false
    }
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell
          label="基础"
          isLink
          id="dropdownCell"
          onClick={() => onShow({ selector: '#dropdownCell' })}
        />
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell
          label="visible-state-change"
          id="dropdownCellEvent"
          onClick={() =>
            onShow({ selector: '#dropdownCellEvent', visibleEvent: true })
          }
        />
      </FxGroup>
      <FxDropdown
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></FxDropdown>
    </>
  )
}
