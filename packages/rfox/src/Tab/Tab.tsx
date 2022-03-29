import classNames from 'classnames'
import type { TabProps, TabEmits, TabRef } from './types'
import type { FRFC } from '../helpers/types'
import { getTabItemClasses, getTabClasses } from './util'
import { useTab } from './use-tab'
import { forwardRef, useCallback } from 'react'
import { Badge } from '../Badge'
import { Icon } from '../Icon'

const FxTab: FRFC<TabRef, TabProps & TabEmits> = (
  { scrollThreshold = 4, className, ...tabProps },
  ref
) => {
  const {
    options2,
    hasSub,
    listEl,
    underlineEl,
    activeIndex,
    styles,
    onChange
  } = useTab(tabProps, ref, {
    tabName: 'Tab'
  })

  const classes = classNames(
    getTabClasses(scrollThreshold, options2, hasSub),
    className
  )

  const renderItems = useCallback(() => {
    return options2.map((item, index) => (
      <li
        className={classNames(getTabItemClasses(index, activeIndex))}
        key={item.value}
        onClick={() => onChange(item.value)}
      >
        <Badge className="fx-tab_item-inner" {...item.badge}>
          {item.icon && item.activeIcon ? (
            <Icon icon={index === activeIndex ? item.activeIcon : item.icon} />
          ) : (
            <></>
          )}
          <span className="fx-tab_item-text">{item.label}</span>
        </Badge>
        {hasSub ? (
          <span className="fx-tab_item-sub-text">{item.subLabel}</span>
        ) : (
          <></>
        )}
      </li>
    ))
  }, [options2, activeIndex])

  return (
    <div className={classes} style={styles}>
      <ul className="fx-tab_list" ref={listEl}>
        {renderItems()}
      </ul>
      <span className="fx-tab_underline" ref={underlineEl}></span>
    </div>
  )
}

export default forwardRef(FxTab)
