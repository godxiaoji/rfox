import { FxSteps, FxIcon, FxFixed, FxButton, FxGroup } from '@/index'
import { useState } from 'react'

const steps = [
  {
    title: '已完成',
    content: '这一步过了哈'
  },
  {
    title: '进行中',
    content: '目前到这一步'
  },
  {
    title: '待处理',
    content: '还没到这一步'
  }
]

const orderSteps = [
  {
    content: '买家下单'
  },
  {
    content: '商家接单'
  },
  {
    content: '商家发货'
  },
  {
    content: '买家提货'
  },
  {
    content: '交易完成'
  }
]

export default function ExpSteps() {
  const [stepIndex, setStepIndex] = useState(1)

  const renderItems = () => {
    return steps.map((item, index) => (
      <FxSteps.Step key={index} title={item.title}>
        {item.content}
      </FxSteps.Step>
    ))
  }

  const renderOrderItems = () => {
    return orderSteps.map((item, index) => (
      <FxSteps.Step key={index}>{item.content}</FxSteps.Step>
    ))
  }

  const renderIconItems = () => {
    return steps.map((item, index) => (
      <FxSteps.Step
        key={index}
        title={item.title}
        renderStep={({ finish, active }) => (
          <>
            {finish ? (
              <FxIcon icon="CheckOutlined"></FxIcon>
            ) : active ? (
              <FxIcon icon="LoadingOutlined" spin></FxIcon>
            ) : (
              <></>
            )}
          </>
        )}
      >
        {item.content}
      </FxSteps.Step>
    ))
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxSteps activeIndex={stepIndex}>{renderItems()}</FxSteps>
      </FxGroup>
      <FxGroup title="小点模式">
        <FxSteps activeIndex={stepIndex} dot>
          {renderItems()}
        </FxSteps>
      </FxGroup>
      <FxGroup title="自定义图标">
        <FxSteps activeIndex={stepIndex}>{renderIconItems()}</FxSteps>
      </FxGroup>
      <FxGroup title="横向">
        <FxSteps activeIndex={stepIndex} horizontal>
          {renderItems()}
        </FxSteps>
      </FxGroup>
      <FxGroup title="横向（不要标题 & 小点）">
        <FxSteps activeIndex={1} horizontal dot>
          {renderOrderItems()}
        </FxSteps>
      </FxGroup>
      <FxGroup title="renderTitle">
        <FxSteps>
          <FxSteps.Step title="【珠海市】快件已送达【正方云创园】，感谢您使用中通快递">
            2021-04-13 12:42:57
          </FxSteps.Step>
          <FxSteps.Step
            renderTitle={() => (
              <>
                【珠海市】【珠海一部】快递小哥正在派件（
                <a href="tel:10000">10000</a>）
              </>
            )}
          >
            2021-04-13 11:22:16
          </FxSteps.Step>
          <FxSteps.Step title="【珠海市】快件离开【珠海中心】已发往【珠海一部】">
            2021-04-13 09:04:03
          </FxSteps.Step>
        </FxSteps>
      </FxGroup>
      <FxFixed>
        <div className="exp-steps-next">
          <FxButton
            onClick={() =>
              setStepIndex(stepIndex => (stepIndex + 1) % steps.length)
            }
            type="primary"
          >
            下一步
          </FxButton>
        </div>
      </FxFixed>
    </>
  )
}
