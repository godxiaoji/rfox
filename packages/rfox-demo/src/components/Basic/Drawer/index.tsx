import {
  FxDrawer,
  FxCell,
  FxGroup,
  PlacementType,
  showToast,
  PopupOnVisibleStateChange,
  PopupOnCancel
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  title?: string
  placement?: PlacementType
  showClose?: boolean
  visibleEvent?: boolean
  cancelEvent?: boolean
}

export default function ExpDrawer() {
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [placement, setPlacement] = useState<PlacementType>()
  const [showClose, setShowClose] = useState(false)

  const visibleEvent = useRef(false)
  const cancelEvent = useRef(false)

  function onShow(args: showArgs) {
    setTitle(args.title ?? '')
    setPlacement(args.placement)
    setShowClose(!!args.showClose)

    visibleEvent.current = !!args.visibleEvent
    cancelEvent.current = !!args.cancelEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', state)
      showToast(`${state} 事件触发`)
    }
    if (state === 'hidden') {
      visibleEvent.current = false
      cancelEvent.current = false
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (cancelEvent.current) {
      console.log('cancel', res)
      showToast('取消')
    }
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell
          label="顶部弹出"
          isLink
          onClick={() => onShow({ title: '顶部弹出', placement: 'top' })}
        ></FxCell>
        <FxCell
          label="底部弹出"
          isLink
          onClick={() => onShow({ title: '底部弹出', placement: 'bottom' })}
        ></FxCell>
        <FxCell
          label="左侧弹出"
          isLink
          onClick={() => onShow({ title: '左侧弹出', placement: 'left' })}
        ></FxCell>
        <FxCell
          label="右侧弹出"
          isLink
          onClick={() => onShow({ title: '右侧弹出', placement: 'right' })}
        ></FxCell>
      </FxGroup>
      <FxGroup title="无标题">
        <FxCell
          label="底部弹出"
          isLink
          onClick={() => onShow({ placement: 'bottom' })}
        ></FxCell>
        <FxCell
          label="右侧弹出"
          isLink
          onClick={() => onShow({ placement: 'right' })}
        ></FxCell>
      </FxGroup>
      <FxGroup title="展示关闭按钮">
        <FxCell
          label="有标题-底部"
          isLink
          onClick={() =>
            onShow({ title: '标题', placement: 'bottom', showClose: true })
          }
        ></FxCell>
        <FxCell
          label="有标题-右侧"
          isLink
          onClick={() =>
            onShow({ title: '标题', placement: 'right', showClose: true })
          }
        ></FxCell>
        <FxCell
          label="无标题"
          isLink
          onClick={() => onShow({ placement: 'bottom', showClose: true })}
        ></FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell
          label="onVisibleStateChange"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              placement: 'bottom',
              showClose: true,
              visibleEvent: true
            })
          }
        ></FxCell>
        <FxCell
          label="cancel"
          isLink
          onClick={() =>
            onShow({
              title: '标题',
              placement: 'bottom',
              showClose: true,
              cancelEvent: true
            })
          }
        ></FxCell>
      </FxGroup>
      <FxDrawer
        visible={visible}
        title={title}
        placement={placement}
        showClose={showClose}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
      />
    </>
  )
}
