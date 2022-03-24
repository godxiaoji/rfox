import { FxPagination, FxGroup, showToast } from '@/index'
import { useState } from 'react'

const total = 5

export default function ExpPagination() {
  const [current, setCurrent] = useState(1)
  const [current2, setCurrent2] = useState(1)
  const [current3, setCurrent3] = useState(1)
  const [current4, setCurrent4] = useState(1)
  const [current5, setCurrent5] = useState(1)

  return (
    <>
      <FxGroup title="基础用法">
        <FxPagination current={current} total={total} onChange={setCurrent} />
      </FxGroup>
      <FxGroup title="自定义展示">
        <FxPagination
          current={current2}
          total={total}
          render={({ current }) => <>{`第 ${current} 页`}</>}
          onChange={setCurrent2}
        />
      </FxGroup>
      <FxGroup title="renderPrev & renderNext">
        <FxPagination
          current={current3}
          total={total}
          renderPrev={() => <>上一页</>}
          renderNext={() => <>下一页</>}
          onChange={setCurrent3}
        />
      </FxGroup>
      <FxGroup title="CSS height=32px">
        <FxPagination
          style={{ height: '32px' }}
          current={current4}
          total={total}
          onChange={setCurrent4}
        />
      </FxGroup>
      <FxGroup title="事件监听 change">
        <FxPagination
          current={current5}
          total={total}
          onChange={current => {
            setCurrent5(current)
            showToast(`跳转到第 ${current} 页`)
          }}
        />
      </FxGroup>
    </>
  )
}
