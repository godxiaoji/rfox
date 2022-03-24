import { FxCheckbox, FxCell, FxGroup, showToast } from '@/index'

const groups = ['A', 'B', 'C']

export default function ExpCheckbox() {
  function renderItems() {
    return groups.map(item => (
      <FxCheckbox key={item} value={item}>
        {item}
      </FxCheckbox>
    ))
  }

  function renderCellItems() {
    return groups.map(item => (
      <FxCell
        key={item}
        label={'单元格 ' + item}
        renderIcon={() => <FxCheckbox circle value={item} />}
      />
    ))
  }

  function onChange(value: (string | number)[]) {
    console.log('change', value)
    showToast(`Change Value: ${value}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxCheckbox />
        </FxCell>
        <FxCell label="带文案">
          <FxCheckbox>勾选</FxCheckbox>
        </FxCell>
        <FxCell label="默认激活">
          <FxCheckbox checked>勾选</FxCheckbox>
        </FxCell>
        <FxCell label="自定义颜色">
          <FxCheckbox checked activeColor="#8b1721">
            勾选
          </FxCheckbox>
        </FxCell>
        <FxCell label="禁用">
          <FxCheckbox disabled>勾选</FxCheckbox>
        </FxCell>
      </FxGroup>
      <FxGroup title="CheckboxGroup">
        <FxCell label="默认">
          <FxCheckbox.Group>{renderItems()}</FxCheckbox.Group>
        </FxCell>
        <FxCell label="内联">
          <FxCheckbox.Group inline activeColor="#8b1721">
            {renderItems()}
          </FxCheckbox.Group>
        </FxCell>
        <FxCell label="禁用">
          <FxCheckbox.Group value={['A']} disabled>
            {renderItems()}
          </FxCheckbox.Group>
        </FxCell>
        <FxCell label="通过options设置">
          <FxCheckbox.Group options={groups} />
        </FxCell>
      </FxGroup>
      <FxGroup title="CheckboxGroup + Cell">
        <FxCheckbox.Group>{renderCellItems()}</FxCheckbox.Group>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="change">
          <FxCheckbox.Group onChange={onChange}>
            <FxCheckbox value="A">A</FxCheckbox>
            <FxCheckbox value="B">B</FxCheckbox>
            <FxCheckbox value="C">C</FxCheckbox>
          </FxCheckbox.Group>
        </FxCell>
      </FxGroup>
    </>
  )
}
