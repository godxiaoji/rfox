import {
  FxButton,
  FxCell,
  FxGroup,
  FxPopMenu,
  PlacementType,
  PopupOnCancel,
  PopupOnVisibleStateChange,
  showPopMenu,
  showToast,
  showDialog,
  PopMenuOnConfirm
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  placement?: PlacementType
  visibleEvent?: boolean
  confirmEvent?: boolean
}

const options = [
  {
    icon: 'HeartOutlined',
    name: '爱心'
  },
  {
    icon: 'StarOutlined',
    name: '星星'
  },
  {
    icon: 'CircleOutlined',
    name: '圈圈',
    disabled: true
  }
]

export default function ExpPopMenu() {
  const [selector, setSelector] = useState<string>()
  const [placement, setPlacement] = useState<PlacementType>()

  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const confirmEvent = useRef(false)
  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector)
    setPlacement(args.placement)

    visibleEvent.current = !!args.visibleEvent
    confirmEvent.current = !!args.confirmEvent

    visibleEvent.current = !!args.visibleEvent

    setVisible(true)
  }

  const onVisibleStateChange: PopupOnVisibleStateChange = ({ state }) => {
    if (visibleEvent.current) {
      console.log('onVisibleStateChange', state)
      showToast(`${state} 事件触发`)
    }
    if (state === 'hidden') {
      visibleEvent.current = false
      confirmEvent.current = false
    }
  }

  const onConfirm: PopMenuOnConfirm = res => {
    if (confirmEvent.current) {
      console.log('confirm')
      showDialog({
        title: '选择了',
        showCancel: false,
        content: `item.name: '${res.item.name}'\nindex: ${res.index}`
      })
    }
  }

  const onCancel: PopupOnCancel = res => {
    if (confirmEvent.current) {
      console.log('cancel', res)
      showToast('取消了')
    }
  }

  function onCallApi(selector: string) {
    showPopMenu({
      selector,
      options: options,
      placement: 'top',
      success: res => {
        console.log('success', res)
        if (res.confirm) {
          showToast(`选择了 ${res.detail.item.name}`)
        } else {
          showToast('取消了')
        }
      }
    })
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="基础">
          <FxButton
            size="small"
            id="popMenu"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => onShow({ selector: '#popMenu' })}
          ></FxButton>
        </FxCell>
        <FxCell label="不展示蒙层">
          <FxButton
            size="small"
            id="popMenuNoMask"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => setVisible2(true)}
          ></FxButton>
        </FxCell>
      </FxGroup>
      <FxGroup title="方向 placement=top/bottom/left/right">
        <div className="exp-popover-box2">
          <div>
            <FxButton
              size="small"
              id="popMenuTop2"
              shape="circle"
              icon="UpOutlined"
              onClick={() =>
                onShow({ placement: 'top', selector: '#popMenuTop2' })
              }
            >
              上
            </FxButton>
          </div>
          <div>
            <FxButton
              size="small"
              id="popMenuLeft2"
              shape="circle"
              icon="LeftOutlined"
              onClick={() =>
                onShow({ placement: 'left', selector: '#popMenuLeft2' })
              }
            >
              左
            </FxButton>
            <FxButton
              className="exp-popover-box2-ml"
              size="small"
              id="popMenuRight2"
              shape="circle"
              icon="RightOutlined"
              onClick={() =>
                onShow({ placement: 'right', selector: '#popMenuRight2' })
              }
            >
              右
            </FxButton>
          </div>
          <div>
            <FxButton
              size="small"
              id="popMenuBottom2"
              shape="circle"
              icon="DownOutlined"
              onClick={() =>
                onShow({ placement: 'bottom', selector: '#popMenuBottom2' })
              }
            >
              下
            </FxButton>
          </div>
        </div>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="confirm/cancel">
          <FxButton
            size="small"
            id="popMenuEvent"
            shape="circle"
            icon="MenuOutlined"
            onClick={() =>
              onShow({ confirmEvent: true, selector: '#popMenuEvent' })
            }
          ></FxButton>
        </FxCell>
        <FxCell label="visible-state-change">
          <FxButton
            size="small"
            id="popMenuEvent2"
            shape="circle"
            icon="MenuOutlined"
            onClick={() =>
              onShow({ visibleEvent: true, selector: '#popMenuEvent2' })
            }
          ></FxButton>
        </FxCell>
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showPopMenu">
          <FxButton
            size="small"
            id="popMenuApi"
            shape="circle"
            icon="MenuOutlined"
            onClick={() => onCallApi('#popMenuApi')}
          ></FxButton>
        </FxCell>
      </FxGroup>
      <FxPopMenu
        options={options}
        placement={placement}
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
      <FxPopMenu
        options={options}
        visible={visible2}
        selector="#popMenuNoMask"
        showMask={false}
        content="无蒙层气泡内容"
        onUpdateVisible={v => setVisible2(v)}
      />
    </>
  )
}
