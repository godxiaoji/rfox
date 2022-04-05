import { useCallback, useRef } from 'react'
import classNames from 'classnames'
import type {
  CheckboxGroupEmits,
  CheckboxGroupProps,
  ModelValue
} from './types'
import type { FC } from '../helpers/types'
import { getCheckGroupClasses } from './util'
import { isSameArray, isStringNumberMixArray } from '../helpers/util'
import { useCheckGroup } from './use-check'
import Checkbox from './Checkbox'

const FxCheckboxGroup: FC<CheckboxGroupProps & CheckboxGroupEmits> = ({
  inline = false,
  onChange,
  children,
  ...props
}) => {
  const inputValue = useRef<ModelValue[]>([])

  const { root, options2, GroupProvider } = useCheckGroup(props, {
    name: 'checkbox',
    updateValue({ isChange, children }) {
      const newVal: ModelValue[] = []

      children.forEach(child => {
        if (child.getInputChecked()) {
          const val = child.getValue()
          val != null && newVal.push(val)
        }
      })

      inputValue.current = newVal

      if (isChange) {
        onChange && onChange(newVal)
      }

      return newVal
    },
    watchValue({ children, value }) {
      if (
        isStringNumberMixArray(value) &&
        !isSameArray(value, inputValue.current)
      ) {
        const newVal: ModelValue[] = []

        children.forEach(child => {
          const val = child.getValue()
          const checked = val != null && value.includes(val)
          child.setChecked(checked)
          checked && newVal.push(val)
        })

        inputValue.current = newVal
      }
    }
  })

  const classes = classNames(
    'fx-checkbox-group',
    getCheckGroupClasses({ inline, disabled: props.disabled }),
    props.className
  )

  const renderChildren = useCallback(
    () =>
      children
        ? children
        : options2.map(item => {
            return (
              <Checkbox key={item.value} value={item.value}>
                {item.label}
              </Checkbox>
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

export default FxCheckboxGroup
