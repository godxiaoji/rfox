import classNames from 'classnames'
import type { SliderProps, SliderEmits } from './types'
import type { FC } from '../helpers/types'
import { useEffect, useState } from 'react'
import { useSlide } from './use-slide'
import { useStableState } from '../hooks/use'

const FxSlider: FC<SliderProps & SliderEmits> = ({
  value,
  onInput,
  onChange,
  ...props
}) => {
  const [progress, setProgress] = useState(0)
  const [getInputValue, setInputValue] = useStableState(-1)

  const {
    sliderEl,
    toInteger,
    rangeValue,
    value2Progress,
    slideClasses,
    slideStyles
  } = useSlide(props, {
    getValue() {
      return getInputValue(true)
    },
    move({ value: newVal, progress: newProgress }) {
      setInputValue(newVal)
      setProgress(newProgress)

      onInput && onInput(newVal)
    },
    end({ isChange }) {
      isChange && onChange && onChange(getInputValue(true))
    }
  })

  const updateValue = (val: unknown) => {
    if (val == null) {
      return
    }

    let newVal = toInteger(val as string)

    if (isNaN(newVal)) {
      return
    }

    newVal = rangeValue(newVal)

    if (newVal !== getInputValue(true)) {
      setInputValue(newVal)
      setProgress(value2Progress(newVal))

      onChange && onChange(newVal)
    }
  }

  useEffect(() => updateValue(value), [value])

  useEffect(() => updateValue(getInputValue(true)), [props.min, props.max])

  const classes = classNames('fx-slider', slideClasses, props.className)

  return (
    <div className={classes} style={slideStyles}>
      <div className="fx-slider_inner" ref={sliderEl}>
        <div className="fx-slider_box">
          <div
            className="fx-slider_track"
            style={{ width: progress * 100 + '%' }}
          ></div>
          <div
            className="fx-slider_thumb"
            data-thumb="true"
            style={{ left: progress * 100 + '%' }}
          >
            {props.showValue ? getInputValue() : ''}
          </div>
        </div>
        <input
          type="hidden"
          name={props.name}
          disabled={props.disabled}
          value={getInputValue().toString()}
        />
      </div>
    </div>
  )
}

export default FxSlider
