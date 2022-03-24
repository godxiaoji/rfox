import classNames from 'classnames'
import type { SliderProps, SliderEmits } from './types'
import type { FC } from '../helpers/types'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useSlide } from './use-slide'

const FxSlider: FC<SliderProps & SliderEmits> = ({
  value,
  onInput,
  onChange,
  ...props
}) => {
  const [progress, setProgress] = useState(0)
  const [inputValue, setInputValue] = useState(0)

  const {
    sliderEl,
    toInteger,
    rangeValue,
    value2Progress,
    slideClasses,
    slideStyles
  } = useSlide(props, {
    getValue() {
      return inputValue
    },
    move({ value: newVal, progress: newProgress }) {
      setInputValue(newVal)
      setProgress(newProgress)

      onInput && onInput(newVal)
    },
    end({ isChange }) {
      isChange && onChange && onChange(inputValue)
    }
  })

  const updateValue = useCallback(
    (val: unknown) => {
      if (val == null) {
        return
      }

      let newVal = toInteger(val as string)

      if (isNaN(newVal)) {
        return
      }

      newVal = rangeValue(newVal)

      if (newVal !== inputValue) {
        setInputValue(newVal)
        setProgress(value2Progress(newVal))

        onChange && onChange(newVal)
      }
    },
    [inputValue]
  )

  useEffect(() => updateValue(value), [value])

  useEffect(() => updateValue(inputValue), [props.min, props.max])

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
            {props.showValue ? inputValue : ''}
          </div>
        </div>
        <input
          type="hidden"
          name={props.name}
          disabled={props.disabled}
          value={inputValue}
        />
      </div>
    </div>
  )
}

export default FxSlider
