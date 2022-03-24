import {
  FxButton,
  FxCell,
  FxGroup,
  FxPopover,
  PlacementType,
  PopupOnVisibleStateChange,
  showPopover,
  showToast
} from '@/index'
import { useRef, useState } from 'react'

interface showArgs {
  selector?: string
  content?: string
  placement?: PlacementType
  visibleEvent?: boolean
}

export default function ExpPopover() {
  const [selector, setSelector] = useState<string>()
  const [content, setContent] = useState('')
  const [placement, setPlacement] = useState<PlacementType>()
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  const visibleEvent = useRef(false)

  function onShow(args: showArgs = {}) {
    setSelector(args.selector)
    setContent(args.content || '这是气泡内容')
    setPlacement(args.placement)

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
    }
  }

  function onCallApi(selector: string) {
    showPopover({
      selector,
      content: '这是气泡内容',
      placement: 'top',
      success: res => {
        console.log('success', res)
      }
    })
  }

  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-popover-box">
          <FxButton
            size="small"
            id="popoverLeft"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onShow({ selector: '#popoverLeft' })}
          >
            左
          </FxButton>
          <FxButton
            size="small"
            id="popoverCenter"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onShow({ selector: '#popoverCenter' })}
          >
            中
          </FxButton>
          <FxButton
            size="small"
            id="popoverRight"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onShow({ selector: '#popoverRight' })}
          >
            右
          </FxButton>
        </div>
      </FxGroup>
      <FxGroup title="方向 placement=top/bottom/left/right">
        <div className="exp-popover-box2">
          <div>
            <FxButton
              size="small"
              id="popoverTop2"
              shape="circle"
              icon="UpOutlined"
              onClick={() =>
                onShow({ placement: 'top', selector: '#popoverTop2' })
              }
            >
              上
            </FxButton>
          </div>
          <div>
            <FxButton
              size="small"
              id="popoverLeft2"
              shape="circle"
              icon="LeftOutlined"
              onClick={() =>
                onShow({ placement: 'left', selector: '#popoverLeft2' })
              }
            >
              左
            </FxButton>
            <FxButton
              className="exp-popover-box2-ml"
              size="small"
              id="popoverRight2"
              shape="circle"
              icon="RightOutlined"
              onClick={() =>
                onShow({ placement: 'right', selector: '#popoverRight2' })
              }
            >
              右
            </FxButton>
          </div>
          <div>
            <FxButton
              size="small"
              id="popoverBottom2"
              shape="circle"
              icon="DownOutlined"
              onClick={() =>
                onShow({ placement: 'bottom', selector: '#popoverBottom2' })
              }
            >
              下
            </FxButton>
          </div>
        </div>
      </FxGroup>
      <FxGroup title="带选项">
        <FxCell label="长文案">
          <FxButton
            size="small"
            id="popoverLongContent"
            shape="circle"
            icon="PlusOutlined"
            onClick={() =>
              onShow({
                content:
                  '这是气泡内容这是气泡内容这是气泡内容这是气泡内容这是气泡内容这是气泡内容',
                selector: '#popoverLongContent'
              })
            }
          ></FxButton>
        </FxCell>
        <FxCell label="不展示蒙层">
          <FxButton
            size="small"
            id="popoverNoMask"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => setVisible2(true)}
          ></FxButton>
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="visible-state-change">
          <FxButton
            size="small"
            id="popoverEvent"
            shape="circle"
            icon="PlusOutlined"
            onClick={() =>
              onShow({ visibleEvent: true, selector: '#popoverEvent' })
            }
          ></FxButton>
        </FxCell>
      </FxGroup>
      <FxGroup title="API">
        <FxCell label="showPopover">
          <FxButton
            size="small"
            id="popoverApi"
            shape="circle"
            icon="PlusOutlined"
            onClick={() => onCallApi('#popoverApi')}
          ></FxButton>
        </FxCell>
      </FxGroup>
      <FxPopover
        placement={placement}
        content={content}
        selector={selector}
        visible={visible}
        onUpdateVisible={v => setVisible(v)}
        onVisibleStateChange={onVisibleStateChange}
      ></FxPopover>
      <FxPopover
        visible={visible2}
        selector="#popoverNoMask"
        showMask={false}
        content="无蒙层气泡内容"
        onUpdateVisible={v => setVisible2(v)}
      ></FxPopover>
    </>
  )
}
