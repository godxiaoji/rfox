import { FxPrice, FxCell, FxGroup } from '@/index'

export default function ExpPrice() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxPrice price="1234.56" />
        </FxCell>
        <FxCell label="设置符号">
          <FxPrice price="1234.56" symbol="￥" />
        </FxCell>
        <FxCell label="千分位">
          <FxPrice price="1234.56" thousands />
        </FxCell>
        <FxCell label="保留3位小数">
          <FxPrice price="1234.56" decimalDigits={3} />
        </FxCell>
      </FxGroup>
      <FxGroup title="设置样式">
        <FxCell label="自定义颜色">
          <FxPrice
            className="exp-price-custom-color"
            price="1234.56"
            symbol="￥"
            thousands
          />
        </FxCell>
        <FxCell label="自定义大小">
          <FxPrice
            className="exp-price-custom-size"
            price="1234.56"
            symbol="￥"
            thousands
          />
        </FxCell>
      </FxGroup>
    </>
  )
}
