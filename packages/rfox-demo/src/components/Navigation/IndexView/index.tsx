import { FxIndexView, FxCell, FxGroup, IndexViewOnChange } from '@/index'

const offsetTop = 52
const indexList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function ExpIndexView() {
  const onChange: IndexViewOnChange = res => {
    console.log('change', res)
  }

  const renderItems = () =>
    indexList.map(item => (
      <FxIndexView.Item name={item} key={item}>
        <FxCell label="单元格" />
        <FxCell label="单元格" />
        <FxCell label="单元格" />
        <FxCell label="单元格" />
        <FxCell label="单元格" />
      </FxIndexView.Item>
    ))

  return (
    <>
      <FxGroup title="基础用法">
        <FxIndexView stickyOffsetTop={offsetTop} onChange={onChange}>
          {renderItems()}
        </FxIndexView>
      </FxGroup>
    </>
  )
}
