import { FxStepper, FxCell, FxGroup, showToast } from '@/index'

export default function ExpStepper() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxStepper />
        </FxCell>
        <FxCell label="步长设置">
          <FxStepper step="2" />
        </FxCell>
        <FxCell label="限制输入范围">
          <FxStepper min="5" max="10" />
        </FxCell>
        <FxCell label="限制输入整数">
          <FxStepper allowDecimal={false} />
        </FxCell>
        <FxCell label="禁用状态">
          <FxStepper disabled />
        </FxCell>
        <FxCell label="禁用输入框">
          <FxStepper disabledInput />
        </FxCell>
        <FxCell label="固定小数位">
          <FxStepper decimalLength="1" step="0.2" />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="onChange">
          <FxStepper onChange={value => showToast(`值改变为：${value}`)} />
        </FxCell>
        <FxCell label="onFocus/onBlur/onPlusClick/onMinusClick">
          <FxStepper
            onPlusClick={() => showToast('点击 + 按钮')}
            onMinusClick={() => showToast('点击 - 按钮')}
            onFocus={() => showToast('聚焦 focus')}
            onBlur={() => showToast('失焦 blur')}
          />
        </FxCell>
      </FxGroup>
    </>
  )
}
