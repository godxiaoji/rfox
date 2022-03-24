import { FxTag, FxCell, FxGroup, showToast } from '@/index'

export default function ExpTag() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="pattern=light" className="exp-tag-compact-box">
          <FxTag type="default">default</FxTag>
          <FxTag type="primary">primary</FxTag>
          <FxTag type="success">success</FxTag>
          <FxTag type="warning">warning</FxTag>
          <FxTag type="danger">danger</FxTag>
        </FxCell>
        <FxCell label="pattern=dark" className="exp-tag-compact-box">
          <FxTag type="default" pattern="dark">
            default
          </FxTag>
          <FxTag type="primary" pattern="dark">
            primary
          </FxTag>
          <FxTag type="success" pattern="dark">
            success
          </FxTag>
          <FxTag type="warning" pattern="dark">
            warning
          </FxTag>
          <FxTag type="danger" pattern="dark">
            danger
          </FxTag>
        </FxCell>
        <FxCell label="pattern=plain" className="exp-tag-compact-box">
          <FxTag type="default" pattern="plain">
            default
          </FxTag>
          <FxTag type="primary" pattern="plain">
            primary
          </FxTag>
          <FxTag type="success" pattern="plain">
            success
          </FxTag>
          <FxTag type="warning" pattern="plain">
            warning
          </FxTag>
          <FxTag type="danger" pattern="plain">
            danger
          </FxTag>
        </FxCell>
      </FxGroup>
      <FxGroup title="自定义颜色">
        <FxCell label="长春花色#6667AB">
          <FxTag type="default" pattern="plain" color="#6667AB">
            plain
          </FxTag>
        </FxCell>
        <FxCell label="莲花色#E2C0BF">
          <FxTag type="default" color="#6667AB">
            dark
          </FxTag>
          <FxTag type="default" closable color="#E2C0BF">
            light
          </FxTag>
        </FxCell>
      </FxGroup>
      <FxGroup title="标签大小">
        <FxCell label="size=small">
          <FxTag type="primary" pattern="light" size="small">
            标签
          </FxTag>
          <FxTag type="primary" pattern="dark" size="small">
            标签
          </FxTag>
          <FxTag type="primary" pattern="plain" size="small">
            标签
          </FxTag>
        </FxCell>
        <FxCell label="size=middle">
          <FxTag type="primary" pattern="light" size="middle">
            标签
          </FxTag>
          <FxTag type="primary" pattern="dark" size="middle">
            标签
          </FxTag>
          <FxTag type="primary" pattern="plain" size="middle">
            标签
          </FxTag>
        </FxCell>
        <FxCell label="size=large">
          <FxTag type="primary" pattern="light" size="large">
            标签
          </FxTag>
          <FxTag type="primary" pattern="dark" size="large">
            标签
          </FxTag>
          <FxTag type="primary" pattern="plain" size="large">
            标签
          </FxTag>
        </FxCell>
      </FxGroup>
      <FxGroup title="其他">
        <FxCell label="可关闭的">
          <FxTag type="primary" pattern="dark" size="large" closable>
            标签
          </FxTag>
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="click & close &long-press">
          <FxTag
            type="default"
            closable
            onClick={() => showToast('点击事件')}
            onClose={() => showToast('关闭事件')}
            onLongPress={() => showToast('长按事件')}
          >
            标签
          </FxTag>
        </FxCell>
      </FxGroup>
    </>
  )
}
