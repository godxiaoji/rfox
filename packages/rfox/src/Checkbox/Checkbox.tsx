import classNames from 'classnames'
import type { CheckboxEmits, CheckboxProps } from './types'
import type { FC } from '../helpers/types'
import { getCheckboxOrRadioClasses } from './util'
import { Icon } from '../Icon'
import { useCheckboxOrRadio } from './use-checkbox-radio'
import CircleOutlined from '../Icon/icons/CircleOutlined'
import CheckCircleFilled from '../Icon/icons/CheckCircleFilled'
import BorderOutlined from '../Icon/icons/BorderOutlined'
import CheckSquareFilled from '../Icon/icons/CheckSquareFilled'

const FxCheckbox: FC<CheckboxProps & CheckboxEmits> = ({
  circle = false,
  children,
  ...props
}) => {
  const { disabled2, name2, styles, onChange, inputEl } = useCheckboxOrRadio(
    props,
    'checkbox'
  )

  const classes = classNames(
    'fx-checkbox',
    getCheckboxOrRadioClasses(disabled2),
    props.className
  )

  return (
    <label className={classes} style={styles}>
      <input
        className="fx-checkbox_input fx-form-input"
        type="checkbox"
        name={name2}
        value={props.value}
        disabled={disabled2}
        onChange={onChange}
        ref={inputEl}
      />
      <div className="fx-checkbox_box">
        <Icon
          className="fx-checkbox_icon"
          icon={circle ? CircleOutlined : BorderOutlined}
        />
        <Icon
          className="fx-checkbox_checked-icon"
          icon={circle ? CheckCircleFilled : CheckSquareFilled}
        />
        {children ? (
          <span className="fx-checkbox_text">{children}</span>
        ) : (
          <></>
        )}
      </div>
    </label>
  )
}

export default FxCheckbox
