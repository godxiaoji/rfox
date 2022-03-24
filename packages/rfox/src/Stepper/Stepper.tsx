import classNames from 'classnames'
import type { StepperEmits, StepperProps } from './types'
import type { FC } from '../helpers/types'
import { formateNumber, getRangeNumber, getStepperClasses } from './util'
import { getNumber } from '../helpers/util'
import { useInput } from '../Form/use-form'
import { Button } from '../Button'
import PlusOutlined from '../Icon/icons/PlusOutlined'
import MinusOutlined from '../Icon/icons/MinusOutlined'
import type { OnButtonClick } from '../Button/types'
import { useEffect, useState } from 'react'

const FxStepper: FC<StepperProps & StepperEmits> = ({
  value,
  disabled,
  decimalLength,
  allowDecimal = true,
  ...props
}) => {
  const step = getNumber(props.step, 1)
  const min = getNumber(props.min, 1)
  const max = getNumber(props.max, Infinity)
  const [valueCache, setValueCache] = useState(min.toString())

  const { inputEl, setInputValue, getInputValue } = useInput()

  const classes = classNames(getStepperClasses(disabled), props.className)

  function updateValue(value: number | string) {
    const newValue = getRangeNumber(
      {
        min,
        max,
        allowDecimal,
        decimalLength
      },
      value
    )

    console.log(newValue)

    if (newValue !== valueCache) {
      setValueCache(newValue)

      props.onChange && props.onChange(newValue)
    }

    setInputValue(newValue)

    return newValue
  }

  function onChange() {
    updateValue(getInputValue())
  }

  function onInput() {
    const value = formateNumber(getInputValue(), decimalLength)
    console.log(value)
    setInputValue(value)

    // emit('input', value)
  }

  const onMinusClick: OnButtonClick = e => {
    updateValue(parseFloat(valueCache) - step)

    props.onMinusClick && props.onMinusClick(e)
  }

  const onPlusClick: OnButtonClick = e => {
    updateValue(parseFloat(valueCache) + step)

    props.onPlusClick && props.onPlusClick(e)
  }

  useEffect(() => {
    if (
      value != null &&
      parseFloat(value.toString()) !== parseFloat(valueCache)
    ) {
      updateValue(value)
    }
  }, [value])

  useEffect(() => {
    setInputValue(valueCache)
  }, [])

  return (
    <div className={classes}>
      <Button
        icon={MinusOutlined}
        shape="square"
        size="small"
        disabled={
          disabled || props.disabledMinus || parseFloat(valueCache) <= min
        }
        onClick={onMinusClick}
      />
      <input
        className="fx-stepper_input"
        type={allowDecimal ? 'text' : 'tel'}
        inputMode={allowDecimal ? 'decimal' : 'numeric'}
        name={props.name}
        disabled={disabled}
        readOnly={props.disabledInput}
        onInput={onInput}
        onChange={onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        ref={inputEl}
      />
      <Button
        icon={PlusOutlined}
        shape="square"
        size="small"
        disabled={
          disabled || props.disabledPlus || parseFloat(valueCache) >= max
        }
        onClick={onPlusClick}
      />
    </div>
  )
}

export default FxStepper
