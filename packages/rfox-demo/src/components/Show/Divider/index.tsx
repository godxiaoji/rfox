import { FxDivider, FxGroup } from '@/index'

export default function ExpDivider() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxDivider />
      </FxGroup>
      <FxGroup title="带文本">
        <FxDivider title="文本" />
      </FxGroup>
      <FxGroup title="虚线">
        <FxDivider title="文本" dashed />
      </FxGroup>
      <FxGroup title="自定义颜色">
        <FxDivider className="exp-divider-custom-color" title="蓝色" />
      </FxGroup>
    </>
  )
}
