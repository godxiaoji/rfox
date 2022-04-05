import classNames from 'classnames'
import { forwardRef, useCallback } from 'react'
import type { SideTabProps, SideTabEmits } from './types'
import type { FRVFC } from '../helpers/types'
import { useTab } from '../Tab/use-tab'
import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { getItemClasses } from './util'
import type { TabRef } from '../Tab/types'

const FxSideTab: FRVFC<TabRef, SideTabProps & SideTabEmits> = (
  { className, ...tabProps },
  ref
) => {
  const { options2, listEl, activeIndex, onChange, styles } = useTab(
    tabProps,
    ref,
    {
      tabName: 'SideTab'
    }
  )

  const classes = classNames('fx-side-tab', className)

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getItemClasses(index, activeIndex))}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        <Badge className="fx-side-tab_item-inner" {...item.badge}>
          {item.icon && item.activeIcon ? (
            <Icon icon={index === activeIndex ? item.activeIcon : item.icon} />
          ) : (
            <></>
          )}
          <span className="fx-side-tab_item-text">{item.label}</span>
        </Badge>
      </li>
    ))
  }, [options2, activeIndex, onChange])

  return (
    <div className={classes} style={styles}>
      <ul className="fx-side-tab_list" ref={listEl}>
        {renderItems()}
      </ul>
    </div>
  )
}

export default forwardRef(FxSideTab)
