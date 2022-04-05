import { isStringNumberMix } from '../helpers/util'
import { useGroup, useGroupItem } from '../hooks/use-group'
import type {
  CheckCommonEmits,
  CheckCommonProps,
  CheckContextRef,
  CheckContextValue,
  CheckGroupCommonProps,
  ModelValue,
  OptionItem
} from './types'
import { useEffect, useMemo, useRef } from 'react'
import { CheckboxContext } from './context'
import { getCheckStyles } from './util'

export function useCheck(
  props: CheckCommonProps & CheckCommonEmits,
  name: 'checkbox' | 'radio'
) {
  const uid = useRef(Symbol())

  const inputEl = useRef<HTMLInputElement>(null)

  function getValue() {
    return props.value
  }

  function getInputEl() {
    return inputEl.current as HTMLInputElement
  }

  function getInputChecked() {
    return !!getInputEl().checked
  }

  function setChecked(checked = true) {
    getInputEl().checked = checked
  }

  const groupOptions = useGroupItem<CheckContextValue, CheckContextRef>(
    CheckboxContext,
    {
      uid: uid.current,
      getInputChecked,
      getValue,
      setChecked
    }
  )

  function onChange() {
    if (groupOptions.hasGroup) {
      groupOptions.onChange && groupOptions.onChange(uid.current)
    } else {
      props.onChange && props.onChange(getInputChecked())
    }
  }

  const name2 = groupOptions.hasGroup ? groupOptions.name : props.name
  const disabled2 = !!(groupOptions.disabled || props.disabled)

  useEffect(() => {
    const $input = getInputEl()

    let checked: boolean
    if (groupOptions.hasGroup) {
      checked =
        !!props.value &&
        (name === 'checkbox'
          ? Array.isArray(groupOptions.value) &&
            groupOptions.value.includes(props.value)
          : props.value === groupOptions.value)
    } else {
      checked = !!props.checked
    }

    if (checked !== $input.checked) {
      $input.checked = $input.defaultChecked = checked
    }
  }, [])

  useEffect(() => {
    if (groupOptions.hasGroup) {
      return
    }

    // 针对非Group情况的设置
    const $input = getInputEl()
    const checked = !!props.checked

    if (checked !== $input.checked) {
      $input.checked = checked
    }
  }, [props.checked])

  const styles = getCheckStyles(
    groupOptions.hasGroup ? groupOptions.activeColor : props.activeColor
  )

  return {
    inputEl,
    name2,
    disabled2,
    onChange,
    styles
  }
}

export function useCheckGroup<T>(
  props: CheckGroupCommonProps,
  {
    name,
    updateValue,
    watchValue
  }: {
    name: 'checkbox' | 'radio'
    updateValue: (options: {
      isChange: boolean
      children: CheckContextRef[]
      uid: symbol | undefined
    }) => T
    watchValue: (options: {
      children: CheckContextRef[]
      value?: ModelValue | ModelValue[]
    }) => void
  }
) {
  const root = useRef<HTMLDivElement>(null)

  function onChange(uid: symbol) {
    _updateValue(true, uid)
  }

  const { children, GroupProvider } = useGroup<
    CheckContextValue,
    CheckContextRef
  >(CheckboxContext, {
    value: props.value,
    name: props.name,
    disabled: props.disabled,
    activeColor: props.activeColor,
    onChange,
    hasGroup: true
  })

  function _updateValue(isChange: boolean, uid?: symbol) {
    return updateValue({ isChange, children: children.current, uid })
  }

  useEffect(() => {
    watchValue({ children: children.current, value: props.value })
  }, [props.value])

  const options2 = useMemo(() => {
    const ret: OptionItem[] = []

    if (Array.isArray(props.options)) {
      props.options.forEach(v => {
        if (isStringNumberMix(v)) {
          ret.push({
            value: v,
            label: v.toString()
          })
        } else {
          ret.push({
            value: v.value,
            label: v.label.toString()
          })
        }
      })
    }

    return ret
  }, [props.options])

  // useEffect(() => _updateValue(false), [])

  return {
    root,
    onChange,
    options2,
    GroupProvider
  }
}
