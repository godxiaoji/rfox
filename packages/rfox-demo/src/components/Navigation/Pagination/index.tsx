import { FxPagination, FxGroup, showToast } from '@/index'
import { useState } from 'react'

const total = 5

export default function ExpPagination() {
  const [current, setCurrent] = useState(2)

  return (
    <>
      <FxGroup title="基础用法">
        <FxPagination current={current} total={total} onChange={setCurrent} />
      </FxGroup>
      <FxGroup title="自定义展示">
        <FxPagination total={total}>
          {({ current }) => <>{`第 ${current} 页`}</>}
        </FxPagination>
      </FxGroup>
      <FxGroup title="renderPrev & renderNext">
        <FxPagination
          total={total}
          renderPrev={() => <>上一页</>}
          renderNext={() => <>下一页</>}
        />
      </FxGroup>
      <FxGroup title="CSS height=32px">
        <FxPagination style={{ height: '32px' }} total={total} />
      </FxGroup>
      <FxGroup title="事件监听 change">
        <FxPagination
          total={total}
          onChange={current => {
            showToast(`跳转到第 ${current} 页`)
          }}
        />
      </FxGroup>
    </>
  )
}
