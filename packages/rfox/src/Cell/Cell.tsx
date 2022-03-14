import classNames from 'classnames'
import type { CellProps } from './types'
import type { FC, OnClick } from '../helpers/types'
import { getCellClasses, getCellArrowClasses } from './util'
import { Icon } from '../Icon'
import RightOutlined from '../Icon/icons/RightOutlined'
import type { ReactNode } from 'react'

const FxCell: FC<
  CellProps & {
    renderIcon?: () => ReactNode
    onClick?: OnClick
  }
> = props => {
  const classes = classNames(getCellClasses(props), props.className)
  const arrowClasses = classNames(getCellArrowClasses(props))

  const onClick: OnClick = e => {
    if (!props.disabled && props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <div className={classes} onClick={onClick}>
      <div className="fx-cell_header">
        {props.renderIcon ? (
          <div className="fx-cell_icon">{props.renderIcon()}</div>
        ) : props.icon ? (
          <div className="fx-cell_icon">
            <Icon icon={props.icon} />
          </div>
        ) : (
          <></>
        )}

        {props.label ? (
          <div className="fx-cell_label">
            {props.label}
            {props.required ? (
              <span className="fx-cell_required"> *</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <></>
        )}
        <div className="fx-cell_content">{props.children || props.content}</div>

        {props.isLink ? (
          <Icon className={arrowClasses} icon={RightOutlined} />
        ) : (
          <></>
        )}
      </div>
      {props.description ? (
        <div className="fx-cell_body">{props.description}</div>
      ) : (
        <></>
      )}
    </div>
  )
}

FxCell.defaultProps = {
  label: '',
  description: '',
  content: '',
  clickable: false,
  required: false,
  isLink: false,
  disabled: false
}

export default FxCell
