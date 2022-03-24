import classNames from 'classnames'
import type { RadioEmits, RadioProps } from './types'
import type { FC } from '../helpers/types'
import { Icon } from '../Icon'
import { useCheckboxOrRadio } from '../Checkbox/use-checkbox-radio'
import CircleOutlined from '../Icon/icons/CircleOutlined'
import CheckCircleFilled from '../Icon/icons/CheckCircleFilled'
import { getCheckboxOrRadioClasses } from '../Checkbox/util'

const FxRadio: FC<RadioProps & RadioEmits> = ({ children, ...props }) => {
  const { disabled2, name2, styles, onChange, inputEl } = useCheckboxOrRadio(
    props,
    'radio'
  )

  const classes = classNames(
    'fx-radio',
    getCheckboxOrRadioClasses(disabled2),
    props.className
  )

  return (
    <label className={classes} style={styles}>
      <input
        className="fx-radio_input fx-form-input"
        type="radio"
        name={name2}
        value={props.value}
        disabled={disabled2}
        onChange={onChange}
        ref={inputEl}
      />
      <div className="fx-radio_box">
        <Icon className="fx-radio_icon" icon={CircleOutlined} />
        <Icon className="fx-radio_checked-icon" icon={CheckCircleFilled} />
        {children ? <span className="fx-radio_text">{children}</span> : <></>}
      </div>
    </label>
  )
}

export default FxRadio
