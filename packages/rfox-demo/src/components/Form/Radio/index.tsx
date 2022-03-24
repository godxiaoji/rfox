import { FxRadio, FxCell, FxGroup, showToast } from '@/index'

const groups = [
  { value: 'man', label: '男' },
  { value: 'woman', label: '女' }
]

export default function ExpRadio() {
  function renderItems() {
    return groups.map(item => (
      <FxRadio key={item.value} value={item.value}>
        {item.label}
      </FxRadio>
    ))
  }

  function onChange(value: string | number) {
    console.log('change', value)
    showToast(`Change Value: ${value}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxRadio />
        </FxCell>
        <FxCell label="带文案">
          <FxRadio>勾选</FxRadio>
        </FxCell>
        <FxCell label="默认激活">
          <FxRadio checked>勾选</FxRadio>
        </FxCell>
        <FxCell label="自定义颜色">
          <FxRadio checked activeColor="#8b1721">
            勾选
          </FxRadio>
        </FxCell>
        <FxCell label="禁用">
          <FxRadio disabled>勾选</FxRadio>
        </FxCell>
      </FxGroup>
      <FxGroup title="CheckboxGroup">
        <FxCell label="默认">
          <FxRadio.Group>{renderItems()}</FxRadio.Group>
        </FxCell>
        <FxCell label="内联">
          <FxRadio.Group inline value="woman" activeColor="#8b1721">
            {renderItems()}
          </FxRadio.Group>
        </FxCell>
        <FxCell label="禁用">
          <FxRadio.Group value="man" disabled>
            {renderItems()}
          </FxRadio.Group>
        </FxCell>
        <FxCell label="通过options设置">
          <FxRadio.Group options={groups} />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="change">
          <FxRadio.Group onChange={onChange}>{renderItems()}</FxRadio.Group>
        </FxCell>
      </FxGroup>
    </>
  )
}
