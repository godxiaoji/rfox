import {
  FxCountUp,
  FxCell,
  FxGroup,
  FxButton,
  showToast,
  CountUpOnAnimated,
  CountUpOnCancel,
  CountUpRef
} from '@/index'
import { useCallback, useRef, useState } from 'react'

const initialNumber = 1000
const number = 5000

export default function ExpCountUp() {
  const countUpRef = useRef<CountUpRef>(null)
  const [number2, setNumber2] = useState(1000)
  const [isCancel, setIsCancel] = useState(false)

  const onAnimated: CountUpOnAnimated = e => {
    console.log('animated', e)
    showToast('动画结束')
  }

  const onAnimated2: CountUpOnAnimated = e => {
    console.log('animated', e)
  }

  const onCancel: CountUpOnCancel = e => {
    console.log('cancel', e)
  }

  const cancel = useCallback(() => {
    if (!isCancel) {
      countUpRef.current?.cancel()
      showToast('已取消')
    } else {
      setNumber2(number2 > 500 ? 0 : 1000)
    }

    setIsCancel(!isCancel)
  }, [isCancel, number2])

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxCountUp number={1000} />
        </FxCell>
        <FxCell label="千分位 thousands">
          <FxCountUp initialNumber={initialNumber} number={number} thousands />
        </FxCell>
        <FxCell label="小数位 decimalDigits=2">
          <FxCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="速度">
        <FxCell label="speed=slow">
          <FxCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="slow"
          />
        </FxCell>
        <FxCell label="speed=normal">
          <FxCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="normal"
          />
        </FxCell>
        <FxCell label="speed=fast">
          <FxCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed="fast"
          />
        </FxCell>
        <FxCell label="speed=10000（固定10秒动画）">
          <FxCountUp
            initialNumber={initialNumber}
            number={number}
            decimalDigits="2"
            speed={10000}
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="animated">
          <FxCountUp number="500" onAnimated={onAnimated} />
        </FxCell>
        <FxCell label="cancel" className="exp-countUp-box">
          <div className="exp-countUp-r">
            <FxCountUp
              ref={countUpRef}
              initialNumber="0"
              number={number2}
              thousands
              onAnimated={onAnimated2}
              onCancel={onCancel}
            />
          </div>
          <FxButton onClick={cancel} size="small">
            {isCancel ? '开始' : '取消'}
          </FxButton>
        </FxCell>
      </FxGroup>
    </>
  )
}
