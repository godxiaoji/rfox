import classNames from 'classnames'
import { useEffect, useState } from 'react'
import type { SwitchProps, SwitchEmits } from './types'
import type { VFC } from '../helpers/types'
import { getSwitchClasses, getSwitchStyles } from './util'
import { isBoolean } from '../helpers/util'
import { useInput } from '../Form/use-form'

const FxSwitch: VFC<SwitchProps & SwitchEmits> = props => {
  const [checked, setChecked] = useState<boolean | null>(null)

  const { inputEl, setInputChecked, getInputChecked } = useInput()

  const classes = classNames(getSwitchClasses(props.disabled), props.className)
  const styles = getSwitchStyles(props)

  function onChange() {
    const newVal = getInputChecked()

    setChecked(newVal)

    props.onChange && props.onChange(newVal)
  }

  useEffect(() => {
    const newVal = props.value

    if (isBoolean(newVal) && newVal !== checked) {
      // 如果设置了value，优先判断value
      setInputChecked(newVal)
      onChange()
    } else if (checked == null) {
      // 如果首次都没值，做一次change false
      setInputChecked(false)
      onChange()
    }
  }, [props.value])

  return (
    <label className={classes} style={styles}>
      <input
        ref={inputEl}
        className="fx-switch_checkbox"
        type="checkbox"
        disabled={props.disabled}
        name={props.name}
        value={checked != null ? checked.toString() : 'false'}
        onChange={onChange}
      />
    </label>
  )
}

export default FxSwitch
