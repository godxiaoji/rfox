import { useCallback, useRef } from 'react'
import classNames from 'classnames'
import type { RadioGroupEmits, RadioGroupProps } from './types'
import type { FC } from '../helpers/types'
import { useCheckGroup } from '../Checkbox/use-check'
import Radio from './Radio'
import type { ModelValue } from '../Checkbox/types'
import { getCheckGroupClasses } from '../Checkbox/util'

const FxRadioGroup: FC<RadioGroupProps & RadioGroupEmits> = ({
  inline = false,
  onChange,
  children,
  ...props
}) => {
  const inputValue = useRef<ModelValue>('')

  const { root, options2, GroupProvider } = useCheckGroup(props, {
    name: 'radio',
    updateValue({ isChange, uid, children }) {
      let hasChecked = false
      let newVal: ModelValue = ''

      children.forEach(child => {
        const checked = uid ? uid === child.uid : child.getInputChecked()

        if (!hasChecked && checked) {
          hasChecked = true
          newVal = child.getValue() ?? ''
          child.setChecked(true)
        } else {
          child.setChecked(false)
        }
      })

      inputValue.current = newVal

      if (isChange) {
        onChange && onChange(newVal)
      }

      return newVal
    },
    watchValue({ children, value }) {
      let hasChecked = false

      children.forEach(child => {
        if (!hasChecked && value != null && child.getValue() === value) {
          hasChecked = true
          inputValue.current = value
          child.setChecked(true)
        } else {
          child.setChecked(false)
        }
      })
    }
  })

  const classes = classNames(
    'fx-radio-group',
    getCheckGroupClasses({ inline, disabled: props.disabled }),
    props.className
  )

  const renderChildren = useCallback(
    () =>
      children
        ? children
        : options2.map(item => {
            return (
              <Radio key={item.value} value={item.value}>
                {item.label}
              </Radio>
            )
          }),
    [children, options2]
  )

  return (
    <div className={classes} ref={root}>
      <GroupProvider>{renderChildren()}</GroupProvider>
    </div>
  )
}

export default FxRadioGroup
