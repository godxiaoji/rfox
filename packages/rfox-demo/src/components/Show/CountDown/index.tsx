import {
  CountDownOnEnd,
  CountDownOnPause,
  CountDownOnResume,
  showToast,
  FxGroup,
  FxCell,
  FxCountDown,
  FxButton,
  CountDownRef
} from '@/index'
import { useRef, useState } from 'react'

export default function ExpCountDown() {
  const ref = useRef<CountDownRef>(null)
  const [paused, setPaused] = useState(false)

  const onPause: CountDownOnPause = e => {
    console.log('pause', e)
    setPaused(true)
    showToast('已暂停')
  }

  const onResume: CountDownOnResume = e => {
    console.log('resume', e)
    setPaused(false)
    showToast('继续计时')
  }

  const onEnd: CountDownOnEnd = e => {
    console.log('end', e)
    showToast('计时结束')
  }

  function onPauseOrResume() {
    if (paused) {
      ref.current?.resume()
    } else {
      ref.current?.pause()
    }
  }

  function onReset() {
    ref.current?.reset(100 * 1000)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认" className="exp-countDown-box">
          <FxCountDown initialTiming={300 * 1000} />
        </FxCell>
        <FxCell label="显示天数" className="exp-countDown-box">
          <FxCountDown initialTiming={1.5 * 24 * 3600 * 1000} showDays />
        </FxCell>
      </FxGroup>
      <FxGroup title="Slot render">
        <FxCell label="中文显示" className="exp-countDown-box">
          <FxCountDown
            initialTiming={300 * 1000}
            render={countDown =>
              `${countDown.fullHours}时${countDown.minutes}分${countDown.seconds}秒`
            }
          />
        </FxCell>
        <FxCell label="毫秒" className="exp-countDown-box">
          <FxCountDown
            initialTiming={300 * 1000}
            render={countDown =>
              `${countDown.fullHours}:${countDown.minutes}:${countDown.seconds}.${countDown.milliseconds}`
            }
          ></FxCountDown>
        </FxCell>
        <FxCell label="自定义风格" className="exp-countDown-box">
          <FxCountDown
            initialTiming={300 * 1000}
            render={countDown => (
              <>
                <span className="exp-countDown-time-item">
                  {countDown.fullHours}
                </span>
                <span className="exp-countDown-time-item">
                  {countDown.minutes}
                </span>
                <span className="exp-countDown-time-item">
                  {countDown.seconds}
                </span>
              </>
            )}
          ></FxCountDown>
        </FxCell>
      </FxGroup>
      <FxGroup title="时间监听">
        <FxCell label="onPause/onResume/onEnd" className="exp-countDown-box">
          <div className="exp-countDown-time-r">
            <FxCountDown
              initialTiming={100 * 1000}
              onPause={onPause}
              onResume={onResume}
              onEnd={onEnd}
              ref={ref}
            />
          </div>
          <FxButton onClick={onPauseOrResume} size="small">
            {paused ? '恢复' : '暂停'}
          </FxButton>
          <FxButton onClick={onReset} size="small" type="danger">
            重置
          </FxButton>
        </FxCell>
      </FxGroup>
    </>
  )
}
