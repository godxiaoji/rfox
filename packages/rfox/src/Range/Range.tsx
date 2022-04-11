import classNames from 'classnames'
import type { RangeProps, RangeEmits } from './types'
import type { VFC } from '../helpers/types'
import { useEffect, useRef, useState } from 'react'
import { useSlide } from '../Slider/use-slide'
import { cloneData, isNumberArray, isSameArray } from '../helpers/util'

const FxRange: VFC<RangeProps & RangeEmits> = ({
  allowSameValue = true,
  value,
  onInput,
  onChange,
  ...props
}) => {
  const [progress, setProgress] = useState([0, 0])
  const [progressValue, setProgressValue] = useState([0, 0])
  const progressValueCache = useRef([0, 0])

  const {
    sliderEl,
    toInteger,
    rangeValue,
    value2Progress,
    getMinMax,
    slideClasses,
    slideStyles
  } = useSlide(props, {
    getValue($target) {
      const { thumb, index } = $target.dataset

      return thumb ? progressValueCache.current[parseInt(index as string)] : 0
    },
    move({ value: newVal, progress: newProgress, $target }) {
      const { thumb } = $target.dataset
      let index = 0

      if (thumb) {
        index = parseInt($target.dataset.index as string)
      } else {
        if (
          Math.abs(progressValueCache.current[0] - newVal) >
          Math.abs(progressValueCache.current[1] - newVal)
        ) {
          index = 1
        }
      }
      if (!allowSameValue && newVal === progressValueCache.current[1 - index]) {
        // 不允许重叠
      } else {
        progressValueCache.current[index] = newVal
        setProgressValue([...progressValueCache.current])

        setProgress(p => {
          const newP = cloneData(p)
          newP[index] = newProgress
          return newP
        })

        onInput && onInput(getCurrentValue())
      }
    },
    end({ isChange }) {
      isChange && onChange && onChange(getCurrentValue())
    }
  })

  function valueHandler(val: unknown) {
    let newVal: number[] = []

    if (isNumberArray(val) && val.length > 1) {
      newVal = cloneData(val)
    } else if (typeof val === 'string') {
      newVal = val.split(',').map(v => {
        return toInteger(v)
      })

      if (newVal.length < 2) {
        newVal = []
      }
    }

    return newVal.slice(0, 2).sort(function sortBy(a: number, b: number) {
      return a - b
    })
  }

  function getCurrentValue() {
    return valueHandler(progressValueCache.current)
  }

  function rangeValues(vals: number[]) {
    vals[0] = rangeValue(vals[0])
    vals[1] = rangeValue(vals[1])

    return vals
  }

  function updateValue(val: unknown) {
    let newVal = valueHandler(val)

    if (newVal.length === 0) {
      return
    }
    newVal = rangeValues(newVal)

    if (!isSameArray(newVal, getCurrentValue())) {
      progressValueCache.current = [newVal[0], newVal[1]]
      setProgressValue([...progressValueCache.current])
      setProgress([value2Progress(newVal[0]), value2Progress(newVal[1])])
    }
  }

  useEffect(() => updateValue(getMinMax()), [])

  useEffect(() => updateValue(value), [value])

  useEffect(
    () => updateValue(progressValueCache.current),
    [props.min, props.max]
  )

  const classes = classNames('fx-range', slideClasses, props.className)

  return (
    <div className={classes} style={slideStyles}>
      <div className="fx-slider_inner" ref={sliderEl}>
        <div className="fx-slider_box">
          <div
            className="fx-slider_track"
            style={{
              left: Math.min(progress[0], progress[1]) * 100 + '%',
              width: Math.abs(progress[1] - progress[0]) * 100 + '%'
            }}
          ></div>
          <div
            className="fx-slider_thumb"
            data-thumb="true"
            data-index="0"
            style={{ left: progress[0] * 100 + '%' }}
          >
            {props.showValue ? progressValue[0] : ''}
          </div>
          <div
            className="fx-slider_thumb"
            data-thumb="true"
            data-index="1"
            style={{ left: progress[1] * 100 + '%' }}
          >
            {props.showValue ? progressValue[1] : ''}
          </div>
        </div>
        <input
          type="hidden"
          name={props.name}
          disabled={props.disabled}
          value={getCurrentValue().join(',')}
        />
      </div>
    </div>
  )
}

export default FxRange
