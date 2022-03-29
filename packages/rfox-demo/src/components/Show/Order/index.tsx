import { FxOrder, FxGroup } from '@/index'
import { useState } from 'react'

const items = [
  { id: 1, type: 'primary' },
  { id: 2, type: 'success' },
  { id: 3, type: 'warning' },
  { id: 4, type: 'danger' }
]

export default function ExpOrder() {
  const maps = new Map(
    items.map(item => {
      return [item.id, item.type]
    })
  )

  // const [items1, setItems1] = useState(
  //   items.map(item => {
  //     return { id: item.id }
  //   })
  // )
  const [items2, setItems2] = useState(
    items.map(item => {
      return { id: item.id }
    })
  )
  const [items3, setItems3] = useState(
    items.map(item => {
      return { id: item.id }
    })
  )

  return (
    <>
      {/* <FxGroup title="基础用法">
        <div className="exp-order-box">
          <FxOrder
            items={items1}
            onUpdateItems={setItems1 as any}
            render={({ id }) => (
              <div className={`exp-order-item ${maps.get(id as number)}`}></div>
            )}
          />
        </div>
      </FxGroup> */}
      <FxGroup title="设置列数">
        <div className="exp-order-box">
          <FxOrder
            columnNumber="4"
            items={items2}
            onUpdateItems={setItems2 as any}
            render={({ id }) => (
              <div className={`exp-order-item ${maps.get(id as number)}`}></div>
            )}
          />
        </div>
      </FxGroup>
      <FxGroup title="允许删除">
        <div className="exp-order-box">
          <FxOrder
            deletable
            items={items3}
            onUpdateItems={setItems3 as any}
            render={({ id }) => (
              <div className={`exp-order-item ${maps.get(id as number)}`}></div>
            )}
          />
        </div>
      </FxGroup>
    </>
  )
}
