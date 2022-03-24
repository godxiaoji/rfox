import classNames from 'classnames'
import type { TabBarProps, TabBarEmits } from './types'
import type { FRFC } from '../helpers/types'
import { useTab } from '../Tab/use-tab'
import { forwardRef, useCallback } from 'react'
import { Badge } from '../Badge'
import { Icon } from '../Icon'
import { Image } from '../Image'
import { getTabBarClasses, getTabBarItemClasses } from './util'
import type { TabRef } from '../Tab/types'

const FxTabBar: FRFC<TabRef, TabBarProps & TabBarEmits> = (
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

  const classes = classNames(getTabBarClasses(), className)

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getTabBarItemClasses(index, activeIndex))}
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
  }, [options2, activeIndex])

  return (
    <div className={classes} style={styles}>
      <ul className="fx-tab-bar_list" ref={listEl}>
        {renderItems()}
      </ul>
    </div>
  )
}

export default forwardRef(FxTabBar)
