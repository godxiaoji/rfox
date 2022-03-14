import React, { useContext } from 'react'
import classNames from 'classnames'
import type { ButtonEmits, ButtonProps } from './types'
import { FORM_TYPES, getButtonClasses, getButtonStyles } from './util'
import { getEnumsValue } from '../helpers/validator'
import { createDefaultProps, GroupContext } from './common'
import { useChildCountConsumer } from '../hooks/use-child-count'
import { Icon } from '../Icon'
import LoadingOutlined from '../Icon/icons/LoadingOutlined'
import type { FC } from '../helpers/types'

const FxButton: FC<ButtonProps & ButtonEmits> = props => {
  useChildCountConsumer()
  const consumer = useContext(GroupContext)

  const classes = classNames(
    getButtonClasses(props, consumer.hasGroup ? consumer : undefined),
    props.className
  )
  const styles = getButtonStyles(props)

  const formType = getEnumsValue(FORM_TYPES, props.formType)

  return (
    <button
      className={classes}
      style={styles}
      disabled={props.disabled}
      type={formType}
      onClick={props.onClick}
    >
      {props.loading ? (
        <Icon icon={LoadingOutlined} spin={true} />
      ) : props.icon ? (
        <Icon icon={props.icon} />
      ) : (
        <></>
      )}
      <span>{props.children}</span>
    </button>
  )
}

FxButton.defaultProps = createDefaultProps()

export default FxButton
