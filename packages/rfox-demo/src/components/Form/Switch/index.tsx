import { FxSwitch, FxCell, FxGroup, showToast } from '@/index'

export default function ExpSwitch() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="开关">
          <FxSwitch />
        </FxCell>
      </FxGroup>
      <FxGroup title="自定义颜色/大小">
        <FxCell label="红色">
          <FxSwitch activeColor="#8b1721" color="#d79996" />
        </FxCell>
        <FxCell label="40px">
          <FxSwitch size="40" />
        </FxCell>
      </FxGroup>
      <FxGroup title="禁用">
        <FxCell label="关">
          <FxSwitch disabled />
        </FxCell>
        <FxCell label="开">
          <FxSwitch disabled value={true} />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="change">
          <FxSwitch
            v-model="value"
            onChange={value => showToast(value ? '开' : '关')}
          />
        </FxCell>
      </FxGroup>
    </>
  )
}
