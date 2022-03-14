import { FxFixed, FxButton, FxGroup } from '@/index'
import { useState } from 'react'

export default function ExpFixed() {
  const [fixed, setFixed] = useState(true)

  return (
    <>
      <FxGroup title="基本用法">
        <FxFixed fixed={fixed}>
          <div className="exp-fixed-box">
            <FxButton type="primary" onClick={() => setFixed(!fixed)}>
              {fixed ? '点击取消固定' : '点击固定布局'}
            </FxButton>
          </div>
        </FxFixed>
      </FxGroup>
    </>
  )
}
