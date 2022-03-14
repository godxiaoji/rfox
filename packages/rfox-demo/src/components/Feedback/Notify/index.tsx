import {
  FxCell,
  FxGroup,
  FxNotify,
  PopupOnVisibleStateChange,
  PopupOnCancel,
  showNotify,
  hideNotify,
  StateType
} from '@/index'
import { useState } from 'react'

interface showArgs {
  icon?: string
  title?: string
  color?: string
  type?: StateType
  duration?: number
  closable?: boolean
}

export default function ExpNotify() {
  const [icon, setIcon] = useState<string>()
  const [title, setTitle] = useState('')
  const [color, setColor] = useState<string>()
  const [type, setType] = useState<StateType>()
  const [duration, setDuration] = useState(0)
  const [closable, setClosable] = useState(false)
  const [visible, setVisible] = useState(false)

  function onShow(args: showArgs) {
    setIcon(args.icon)
    setTitle(args.title ?? '')
    setColor(args.color)
    setType(args.type)
    setDuration(args.duration ?? 1500)
    setClosable(!!args.closable)
    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = res => {
    console.log('onVisibleStateChange', res)
  }

  const onCancel: PopupOnCancel = res => {
    console.log('onCancel', res)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell
          label="主要"
          isLink
          onClick={() => onShow({ title: '通知文本' })}
        />
        <FxCell
          label="成功"
          isLink
          onClick={() => onShow({ title: '成功文本', type: 'success' })}
        />
        <FxCell
          label="警告"
          isLink
          onClick={() => onShow({ title: '警告文本', type: 'warning' })}
        />
        <FxCell
          label="危险"
          isLink
          onClick={() => onShow({ title: '危险文本', type: 'danger' })}
        />
      </FxGroup>
      <FxGroup title="自定义图标">
        <FxCell
          label="成功"
          isLink
          onClick={() =>
            onShow({
              title: '成功文本',
              type: 'success',
              icon: 'CheckCircleOutlined'
            })
          }
        />
        <FxCell
          label="警告"
          isLink
          onClick={() =>
            onShow({
              title: '警告文本',
              type: 'warning',
              icon: 'ExclamationCircleOutlined'
            })
          }
        />
        <FxCell
          label="危险"
          isLink
          onClick={() =>
            onShow({
              title: '危险文本',
              type: 'danger',
              icon: 'CloseCircleOutlined'
            })
          }
        />
      </FxGroup>
      <FxGroup title="其他">
        <FxCell
          label="自定义时长"
          isLink
          onClick={() => onShow({ title: '5秒后消失', duration: 5000 })}
        />
        <FxCell
          label="自定义颜色"
          isLink
          onClick={() =>
            onShow({
              title: '深色调',
              icon: 'InfoCircleOutlined',
              color: '#ff4d4f'
            })
          }
        />
        <FxCell
          label="手动关闭"
          isLink
          onClick={() =>
            onShow({ title: '常驻可手动关闭', duration: 0, closable: true })
          }
        />
      </FxGroup>
      <FxGroup title="API">
        <FxCell
          label="showNotify"
          isLink
          onClick={() =>
            showNotify({
              title: '通知文本',
              duration: 5000,
              closable: true
            })
          }
        />
        <FxCell label="hideNotify" isLink onClick={() => hideNotify()} />
      </FxGroup>
      <FxNotify
        visible={visible}
        title={title}
        type={type}
        color={color}
        icon={icon}
        duration={duration}
        closable={closable}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onUpdateVisible={v => setVisible(v)}
      />
    </>
  )
}
