import { FxButton, FxCell, FxGroup } from '@/index'
import { useState } from 'react'

export default function ExpGroup() {
  const [strongHeader, setStrongHeader] = useState(true)

  return (
    <>
      <FxGroup title="基础风格">
        <FxCell
          label="单元格"
          content="内容"
          description="网站大部分组件都由这个组件进行分组"
        />
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
      </FxGroup>
      <FxGroup title="基础风格" renderHeader={() => <>右侧文案</>}>
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
      </FxGroup>
      <FxGroup
        title="强化标题栏"
        renderHeader={() => <FxButton size="small"> 查看更多 </FxButton>}
        strongHeader={strongHeader}
      >
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
        <FxCell label="单元格" content="内容" />
      </FxGroup>
    </>
  )
}
