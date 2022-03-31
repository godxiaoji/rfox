import { FxRate, FxCell, FxGroup, showToast } from '@/index'

export default function ExpRate() {
  function onChange(value: number) {
    console.log('change', value)
    showToast(`Value: ${value}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxRate />
        </FxCell>
        <FxCell label="value=3">
          <FxRate value="3" />
        </FxCell>
      </FxGroup>
      <FxGroup title="风格">
        <FxCell label="爱心 icon='HeartOutlined' activeIcon='HeartFilled'">
          <FxRate icon="HeartOutlined" activeIcon="HeartFilled" value="3" />
        </FxCell>
        <FxCell label="换色 activeColor='#F5A511'">
          <FxRate value="3" activeColor="#F5A511" />
        </FxCell>
        <FxCell label="变小 size='16px'">
          <FxRate value="3" size="16" />
        </FxCell>
      </FxGroup>
      <FxGroup title="自定义数量">
        <FxCell label="count=8">
          <FxRate count="8" />
        </FxCell>
      </FxGroup>
      <FxGroup title="半星">
        <FxCell label="value=2.5">
          <FxRate allowHalf value={2.5} />
        </FxCell>
      </FxGroup>
      <FxGroup title="状态">
        <FxCell label="只读">
          <FxRate readOnly value="3" />
        </FxCell>
        <FxCell label="禁用">
          <FxRate disabled value="3" />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="change">
          <FxRate allow-half onChange={onChange} />
        </FxCell>
      </FxGroup>
    </>
  )
}
