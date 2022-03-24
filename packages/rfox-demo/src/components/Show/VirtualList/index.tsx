import {
  FxVirtualList,
  FxCell,
  FxGroup,
  ViewPosition,
  VirtualListRef
} from '@/index'
import { useRef } from 'react'

interface ExpList {
  id: number
  text: string
}

// 数据初始化
const largeList: ExpList[] = []
for (let i = 0; i < 100000; i++) {
  largeList.push({
    id: i + 1,
    text: `第 ${i + 1} 个列表`
  })
}

export default function ExpVirtualList() {
  // 方法调用
  const methodList = useRef<VirtualListRef>(null)

  function scrollToIndex(index: number, viewPosition: ViewPosition = 0) {
    methodList.current?.scrollToIndex({ index, viewPosition })
  }
  function scrollTo(offset: number) {
    methodList.current?.scrollTo({ offset })
  }
  function scrollToEnd(animated: boolean) {
    methodList.current?.scrollToEnd(animated)
  }

  return (
    <>
      <FxGroup title="Method">
        <FxVirtualList
          className="exp-flatList-box"
          ids={largeList.map(v => v.id)}
          ref={methodList}
          itemSize={50}
          render={({ index }) => (
            <div className={`exp-flatList-item color-${index % 10}`}>
              {largeList[index].text}
            </div>
          )}
        />
        <FxCell
          label="scrollToIndex({ index: 49999 })"
          isLink
          onClick={() => scrollToIndex(49999)}
        ></FxCell>
        <FxCell
          label="同上加 viewPosition=0.5"
          isLink
          onClick={() => scrollToIndex(49999, 0.5)}
        ></FxCell>
        <FxCell
          label="同上加 viewPosition=1"
          isLink
          onClick={() => scrollToIndex(49999, 1)}
        ></FxCell>
        <FxCell
          label="scrollTo({ offset: 200 })"
          isLink
          onClick={() => scrollTo(200)}
        ></FxCell>
        <FxCell
          label="scrollToEnd(true)"
          isLink
          onClick={() => scrollToEnd(true)}
        ></FxCell>
      </FxGroup>
    </>
  )
}
