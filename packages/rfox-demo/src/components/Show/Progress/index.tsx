import { FxProgress, FxGroup } from '@/index'
import { useState } from 'react'

export default function ExpProgress() {
  const [percentage, setPercentage] = useState(0)

  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-progress-box">
          <FxProgress percentage={percentage} />
        </div>
        <div className="exp-progress-bottom">
          {/* <fx-stepper :min="0" :max="100" v-model="percentage" /> */}
        </div>
      </FxGroup>
      <FxGroup title="展示文字">
        <ul className="exp-progress-list">
          <li>
            <FxProgress percentage="5" showText />
          </li>
          <li>
            <FxProgress percentage="50" showText />
          </li>
          <li>
            <FxProgress percentage="100" showText />
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="固定进度条">
        <ul className="exp-progress-list fixed-bar">
          <li>
            <FxProgress percentage="5" fixedBar showText />
          </li>
          <li>
            <FxProgress percentage="50" fixedBar showText />
          </li>
          <li>
            <FxProgress percentage="100" fixedBar showText />
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="Slot default">
        <div className="exp-progress-box">
          <FxProgress
            percentage="5"
            render={({ progress }) => <>{'已抢' + progress}</>}
          ></FxProgress>
        </div>
      </FxGroup>
      <FxGroup title="自定义颜色">
        <div className="exp-progress-box">
          <FxProgress percentage="50" showText color="#8b1721" />
        </div>
      </FxGroup>
    </>
  )
}
