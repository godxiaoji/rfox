import type { HTMLAttributes } from 'react'
import classNames from 'classnames'
import type { CellEmits, CellProps } from './types'
import type { FC, OnClick, RenderProp } from '../helpers/types'
import { getCellClasses, getCellArrowClasses } from './util'
import { Icon } from '../Icon'
import RightOutlined from '../Icon/icons/RightOutlined'

const FxCell: FC<
  Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> &
    CellProps &
    CellEmits & {
      renderIcon?: RenderProp
    }
> = ({
  icon,
  label,
  description,
  content,
  clickable,
  required,
  isLink,
  disabled,
  arrowDirection,
  className,
  renderIcon,
  onClick,
  children,
  ...attrs
}) => {
  const classes = classNames(
    getCellClasses({
      clickable,
      isLink,
      icon,
      disabled
    }),
    className
  )
  const arrowClasses = classNames(getCellArrowClasses(arrowDirection))

  const handleClick: OnClick = e => {
    if (!disabled && onClick) {
      onClick(e)
    }
  }

  return (
    <div {...attrs} className={classes} onClick={handleClick}>
      <div className="fx-cell_header">
        {renderIcon ? (
          <div className="fx-cell_icon">{renderIcon()}</div>
        ) : icon ? (
          <div className="fx-cell_icon">
            <Icon icon={icon} />
          </div>
        ) : (
          <></>
        )}

        {label ? (
          <div className="fx-cell_label">
            {label}
            {required ? <span className="fx-cell_required"> *</span> : <></>}
          </div>
        ) : (
          <></>
        )}
        <div className="fx-cell_content">{children || content}</div>

        {isLink ? (
          <Icon className={arrowClasses} icon={RightOutlined} />
        ) : (
          <></>
        )}
      </div>
      {description ? <div className="fx-cell_body">{description}</div> : <></>}
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
