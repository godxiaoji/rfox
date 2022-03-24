import { useRef } from 'react'

export function useInput() {
  const inputEl = useRef<HTMLInputElement>(null)

  function setInputChecked(val: boolean) {
    inputEl.current && (inputEl.current.checked = val)
  }

  function getInputChecked() {
    return inputEl.current?.checked ? true : false
  }

  function setInputValue(val: string | number) {
    inputEl.current && (inputEl.current.value = val.toString())
  }

  function getInputValue() {
    return inputEl.current?.value ?? ''
  }

  function getInputEl() {
    return inputEl.current
  }

  function setFocus() {
    inputEl.current?.focus()
  }

  function setBlur() {
    inputEl.current?.blur()
  }

  return {
    inputEl,
    getInputValue,
    setInputValue,
    getInputChecked,
    setInputChecked,
    getInputEl,
    setFocus,
    setBlur
  }
}
