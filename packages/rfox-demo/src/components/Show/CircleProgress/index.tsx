import { FxCircleProgress, FxGroup } from '@/index'
import { useState } from 'react'

export default function ExpCircleProgress() {
  const [percentage, setPercentage] = useState(50)

  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-circleProgress-box">
          <FxCircleProgress percentage={percentage} />
          {/* <fx-stepper :min="0" :max="100" v-model="percentage" /> */}
        </div>
      </FxGroup>
      <FxGroup title="参数设置">
        <ul className="exp-circleProgress-list">
          <li>
            <FxCircleProgress percentage={percentage} color="#ff4d4f">
              color
            </FxCircleProgress>
          </li>
          <li>
            <FxCircleProgress percentage={percentage} strokeWidth="2">
              strokeWidth
            </FxCircleProgress>
          </li>
          <li>
            <FxCircleProgress percentage={percentage} size="80">
              size
            </FxCircleProgress>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="Render Props">
        <div className="exp-circleProgress-box">
          <FxCircleProgress
            percentage={percentage}
            render={p => {
              return '已抢' + p
            }}
          ></FxCircleProgress>
        </div>
      </FxGroup>
    </>
  )
}
