import classNames from 'classnames'
import type { FormItemProps } from './types'
import type { FC } from '../helpers/types'
import { useMemo } from 'react'

const FxFormItem: FC<FormItemProps> = props => {
  const classes = classNames(
    'fx-form-item',
    'fx-cell',
    'fx-horizontal-hairline',
    props.className,
    props.validateStatus
  )

  const errors = (() => {
    const ret: string[] = []

    if (Array.isArray(props.error)) {
      props.error.forEach(v => {
        ret.push(v.toString())
      })
    } else if (props.error != null) {
      ret.push(props.error.toString())
    }

    return ret
  })()

  const renderErrorItems = useMemo(
    () =>
      errors.map((error, k) => (
        <li key={error}>
          {errors.length > 1 ? k + 1 + '. ' : ''}
          {error}
        </li>
      )),
    [errors]
  )

  return (
    <label className={classes}>
      <div className="fx-cell_header">
        {props.label ? (
          <div className="fx-cell_label">
            {props.label}
            {props.required ? (
              <span className="fx-form-item_required">*</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="fx-cell_content">{props.children}</div>
      </div>
      {errors.length > 0 ? (
        <ol className="fx-cell_body">{renderErrorItems}</ol>
      ) : (
        <></>
      )}
    </label>
  )
}

export default FxFormItem
