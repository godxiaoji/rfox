import classNames from 'classnames'
import { forwardRef, useCallback } from 'react'
import type { TabBarProps, TabBarEmits } from './types'
import type { FRVFC } from '../helpers/types'
import { useTab } from '../Tab/use-tab'
import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { getItemClasses } from './util'
import type { TabRef } from '../Tab/types'

const FxTabBar: FRVFC<TabRef, TabBarProps & TabBarEmits> = (
  { className, ...tabProps },
  ref
) => {
  const { options2, listEl, activeIndex, onChange, styles } = useTab(
    tabProps,
    ref,
    {
      tabName: 'TabBar'
    }
  )

  const classes = classNames('fx-tab-bar', 'fx-horizontal-hairline', className)

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getItemClasses(index, activeIndex))}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        <Badge className="fx-tab-bar_item-icon" {...item.badge}>
          {item.iconLink ? (
            <Image
              src={index === activeIndex ? item.activeIconLink : item.iconLink}
            />
          ) : item.icon && item.activeIcon ? (
            <Icon icon={index === activeIndex ? item.activeIcon : item.icon} />
          ) : (
            <></>
          )}
        </Badge>
        <span className="fx-tab-bar_item-text">{item.label}</span>
      </li>
    ))
  }, [options2, activeIndex, onChange])

  return (
    <div className={classes} style={styles}>
      <ul className="fx-tab-bar_list" ref={listEl}>
        {renderItems()}
      </ul>
    </div>
  )
}

export default forwardRef(FxTabBar)
