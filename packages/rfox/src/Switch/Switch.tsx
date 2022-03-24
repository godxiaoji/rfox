import classNames from 'classnames'
import type { SwitchProps, SwitchEmits } from './types'
import type { FC } from '../helpers/types'
import { getSwitchClasses, getSwitchStyles } from './util'
import { isBoolean } from '../helpers/util'
import { useEffect, useState } from 'react'
import { useInput } from '../Form/use-form'

const FxSwitch: FC<SwitchProps & SwitchEmits> = props => {
  const [checked, setChecked] = useState(false)

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
      setChecked(newVal)
      setInputChecked(newVal)
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
        value={checked.toString()}
        onChange={onChange}
      />
    </label>
  )
}

export default FxSwitch
