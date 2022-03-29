import classNames from 'classnames'
import type { SelectorFieldEmits, SelectorFieldProps } from './types'
import type { FC } from '../helpers/types'
import { Icon } from '../Icon'
import RightOutlined from '../Icon/icons/RightOutlined'
import { getClasses, getInputClasses } from './util'

const FxSelectorField: FC<SelectorFieldProps & SelectorFieldEmits> = props => {
  const classes = classNames(getClasses(props), props.className)
  const inputClasses = classNames(getInputClasses(props))

  function onFieldClick() {
    props.onFieldClick && props.onFieldClick()
  }

  return (
    <div className={classes} onClick={onFieldClick}>
      <div className={inputClasses}>
        {props.label || props.placeholder || ''}
      </div>
      <Icon className="fx-input_arrow" icon={RightOutlined} />
      <input
        className="fx-input_cover fx-form-input"
        type="text"
        readOnly
        name={props.name}
        disabled={props.disabled}
        value={props.value}
      />
    </div>
  )
}

export default FxSelectorField
