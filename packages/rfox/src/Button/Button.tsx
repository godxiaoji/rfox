import { useCallback, useContext } from 'react'
import classNames from 'classnames'
import type { ButtonEmits, ButtonProps } from './types'
import { FORM_TYPES, getButtonClasses, getButtonStyles } from './util'
import { getEnumsValue } from '../helpers/validator'
import { GroupContext } from './context'
import { createDefaultProps } from './props'
import { Icon } from '../Icon'
import LoadingOutlined from '../Icon/icons/LoadingOutlined'
import type { FC } from '../helpers/types'

const FxButton: FC<ButtonProps & ButtonEmits> = ({
  size,
  pattern,
  shape,
  type,
  icon,
  loading,
  ghost,
  transparent,
  color,
  formType,
  disabled,
  className,
  children,
  onClick,
  ...attrs
}) => {
  const consumer = useContext(GroupContext)

  const classes = classNames(
    getButtonClasses(
      {
        loading,
        icon,
        ghost,
        transparent,
        color,
        type,
        size,
        pattern,
        shape
      },
      consumer.hasGroup ? consumer : undefined
    ),
    className
  )
  const styles = getButtonStyles(color)

  const formType2 = formType ? getEnumsValue(FORM_TYPES, formType) : undefined

  const renderIcon = useCallback(
    () =>
      loading ? (
        <Icon icon={LoadingOutlined} spin={true} />
      ) : icon ? (
        <Icon icon={icon} />
      ) : (
        <></>
      ),
    [loading, icon]
  )

  return (
    <button
      {...attrs}
      className={classes}
      style={styles}
      disabled={disabled}
      type={formType2}
      onClick={onClick}
    >
      {renderIcon()}
      <span>{children}</span>
    </button>
  )
}

FxButton.defaultProps = createDefaultProps()

export default FxButton
