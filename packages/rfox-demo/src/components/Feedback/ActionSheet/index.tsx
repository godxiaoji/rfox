import {
  ActionSheetOption,
  ActionSheetOnConfirm,
  showToast,
  showDialog,
  PopupOnCancel,
  showActionSheet,
  PopupOnVisibleStateChange,
  FxCell,
  FxGroup,
  FxActionSheet
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  options?: ActionSheetOption[]
  title?: string
  showCancel?: boolean
  cancelText?: string
  visibleEvent?: boolean
  confirmEvent?: boolean
}

const defaultOptions: ActionSheetOption[] = [
  {
    name: '选项1'
  },
  {
    name: '选项2'
  },
  {
    name: '选项3'
  }
]

export default function ExpActionSheet() {
  const [options, setOptions] = useState(defaultOptions)
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [showCancel, setShowCancel] = useState(false)
  const [cancelText, setCancelText] = useState<string>()

  const visibleEvent = useRef(false)
  const confirmEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setTitle(args.title ?? '')
    setShowCancel(!!args.showCancel)
    setCancelText(args.cancelText)
    setOptions(args.options ?? defaultOptions)

    visibleEvent.current = !!args.visibleEvent
    confirmEvent.current = !!args.confirmEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', res)
      showToast(`${res.state} 事件触发`)
    }

    if (res.state === 'hidden') {
      visibleEvent.current = false
      confirmEvent.current = false
    }
  }

  const onConfirm: ActionSheetOnConfirm = res => {
    if (confirmEvent.current) {
      console.log('confirm', res)
      // showDialog({
      //   title: '选择了',
      //   showCancel: false,
      //   content: `item.name: '${res.item.name}'\nindex: ${res.index}`
      // })
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (confirmEvent.current) {
      console.log('cancel', res)
      showToast('取消了')
    }
  }

  function onCallApi() {
    showActionSheet({
      title: '标题',
      options: defaultOptions,
      showCancel: true,
      success: res => {
        console.log('success', res)
        const { confirm, detail } = res

        if (confirm) {
          showDialog({
            title: '选择了',
            showCancel: false,
            content: `item.name: '${detail.item.name}'\nindex: ${detail.index}`
          })
        } else {
          showToast('取消了')
        }
      }
    })
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认" isLink onClick={() => onShow()} />
        <FxCell
          label="展示标题"
          isLink
          onClick={() => onShow({ title: '标题' })}
        />
        <FxCell
          label="展示取消按钮"
          isLink
          onClick={() => onShow({ showCancel: true })}
        />
        <FxCell
          label="设置取消按钮文案"
          isLink
          onClick={() =>
            onShow({ showCancel: true, cancelText: '自定义取消按钮文案' })
          }
        />
      </FxGroup>
      <FxGroup title="options 扩展">
        <FxCell
          label="选项描述"
          isLink
          onClick={() =>
            onShow({
              options: [
                {
                  name: '选项1',
                  description: '选项1的描述文案'
                },
                {
                  name: '选项2'
                },
                {
                  name: '选项3'
                }
              ]
            })
          }
        />
        <FxCell
          label="选项高亮"
          isLink
          onClick={() =>
            onShow({
              options: [
                {
                  name: '选项1',
                  highlight: true
                },
                {
                  name: '选项2'
                },
                {
                  name: '选项3'
                }
              ]
            })
          }
        />
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell
          label="confirm/cancel"
          isLink
          onClick={() => onShow({ showCancel: true, confirmEvent: true })}
        />
        <FxCell
          label="onVisibleStateChange"
          isLink
          onClick={() => onShow({ visibleEvent: true })}
        />
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showActionSheet" isLink onClick={() => onCallApi()} />
      </FxGroup>
      <FxActionSheet
        visible={visible}
        title={title}
        options={options}
        showCancel={showCancel}
        cancelText={cancelText}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  )
}
