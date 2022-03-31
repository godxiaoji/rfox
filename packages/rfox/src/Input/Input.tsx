import classNames from 'classnames'
import type { InputEmits, InputProps } from './types'
import type { CSSProperties, OnFocus, RenderProp, VFC } from '../helpers/types'
import { getInputClasses, getInputMode, getMaxLength, getValue } from './util'
import CloseCircleFilled from '../Icon/icons/CloseCircleFilled'
import { useEffect, useRef, useState } from 'react'
import type { MouseEventHandler } from 'react'
import { Icon } from '../Icon'

const FxInput: VFC<
  InputProps &
    InputEmits & {
      renderPrepend?: RenderProp
      renderAppend?: RenderProp
      style?: CSSProperties
    }
> = ({
  type = 'text',
  value = '',
  disabled,
  renderPrepend,
  renderAppend,
  ...props
}) => {
  const [active, setActive] = useState(false)
  const [isShowClear, setIsShowClear] = useState(false)
  const [valueCache, setValueCache] = useState('')

  const classes = classNames(
    getInputClasses({
      type,
      prepend: !!renderPrepend,
      append: !!renderAppend,
      disabled: !!disabled,
      active
    }),
    props.className
  )
  const maxLength = getMaxLength(props.maxlength)
  const { inputType, inputMode } = getInputMode(type)

  const inputEl = useRef<HTMLInputElement>(null)
  const textareaEl = useRef<HTMLTextAreaElement>(null)

  function getInputEl() {
    return type === 'textarea' ? textareaEl.current : inputEl.current
  }

  function setInputValue(val: string | number) {
    const el = getInputEl()
    el && (el.value = val.toString())
  }

  function getInputValue() {
    const el = getInputEl()
    return el ? el.value : ''
  }

  function setFocus() {
    const el = getInputEl()
    el && el.focus()
  }

  function setBlur() {
    const el = getInputEl()
    el && el.blur()
  }

  function updateValue(val: string | number) {
    const newValue = getValue(val, type)

    let isChange = false

    if (newValue !== getInputValue()) {
      setInputValue(newValue)
    }

    if (newValue !== valueCache) {
      setValueCache(newValue)
      isChange = true
    }

    return { value: newValue, isChange }
  }

  function updateInput(newVal: string) {
    const { value, isChange } = updateValue(newVal)

    isChange && props.onInput && props.onInput(value)
  }

  const isComposition = useRef(false)
  function onCompositionStart() {
    isComposition.current = true
  }
  function onCompositionEnd() {
    isComposition.current = false
    updateInput(getInputValue())
  }

  const onFocus: OnFocus = e => {
    setActive(true)
    props.onFocus && props.onFocus(e)
  }

  const onBlur: OnFocus = e => {
    setActive(false)
    props.onBlur && props.onBlur(e)
  }

  function onInput() {
    if (!isComposition.current) {
      updateInput(getInputValue())
    }
  }

  function onChange() {
    props.onChange && props.onChange(getInputValue())
  }

  const onClear: MouseEventHandler<SVGSVGElement> = e => {
    e.stopPropagation()
    updateInput('')
    props.onChange && props.onChange(getInputValue())
  }

  useEffect(() => {
    value != valueCache && updateValue(value ?? '')
  }, [value])

  useEffect(() => {
    props.focus ? setFocus() : setBlur()
  }, [props.focus])

  const showClearTimer = useRef<number>()
  useEffect(() => {
    clearTimeout(showClearTimer.current)
    if (valueCache && active) {
      showClearTimer.current = window.setTimeout(
        () => setIsShowClear(true),
        200
      )
    } else {
      setIsShowClear(false)
    }
  }, [valueCache, active])

  return (
    <label className={classes} style={props.style} onClick={props.onClick}>
      {renderPrepend ? (
        <div className="fx-input_prepend">{renderPrepend()}</div>
      ) : (
        <></>
      )}
      {type === 'textarea' ? (
        <textarea
          className="fx-input_input fx-input_textarea"
          name={props.name}
          disabled={disabled}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          maxLength={maxLength}
          ref={textareaEl}
          onInput={onInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      ) : (
        <input
          className="fx-input_input"
          type={inputType}
          inputMode={inputMode}
          name={props.name}
          disabled={disabled}
          placeholder={props.placeholder}
          readOnly={props.readOnly}
          maxLength={maxLength}
          ref={inputEl}
          onInput={onInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onCompositionStart={onCompositionStart}
          onCompositionEnd={onCompositionEnd}
        />
      )}
      {props.showLimit && maxLength > 0 ? (
        <span className="fx-input_limit">
          {valueCache.length}/{maxLength}
        </span>
      ) : (
        <></>
      )}
      {props.showClear && isShowClear ? (
        <Icon
          className="fx-input_clear"
          icon={CloseCircleFilled}
          onMouseDown={onClear}
        />
      ) : (
        <></>
      )}
      {renderAppend ? (
        <div className="fx-input_append">{renderAppend()}</div>
      ) : (
        <></>
      )}
    </label>
  )
}

FxInput.defaultProps = {
  type: 'text',
  value: ''
}

export default FxInput
