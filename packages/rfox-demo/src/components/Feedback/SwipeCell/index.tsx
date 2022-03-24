import {
  FxSwipeCell,
  FxCell,
  FxGroup,
  showToast,
  SwipeCellButtonOption,
  SwipeCellOnButtonClick
} from '@/index'

const buttons: SwipeCellButtonOption[] = [
  {
    text: '加入收藏',
    type: 'warning'
  },
  {
    text: '删除',
    type: 'danger'
  }
]

export default function ExpSwipeCell() {
  const onButtonClick: SwipeCellOnButtonClick = e => {
    console.log('onButtonClick', e)
    showToast(`点击了 ${e.item.text}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxSwipeCell buttons={buttons}>
          <FxCell label="单元格" content="向左划"></FxCell>
        </FxSwipeCell>
      </FxGroup>
      <FxGroup title=" 事件监听">
        <FxSwipeCell buttons={buttons} onButtonClick={onButtonClick}>
          <FxCell label="单元格" content="向左划"></FxCell>
        </FxSwipeCell>
      </FxGroup>
    </>
  )
}
