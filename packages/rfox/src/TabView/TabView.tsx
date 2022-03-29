import classNames from 'classnames'
import type { TabViewEmits, TabViewProps, TabViewRef } from './types'
import type { CSSProperties, FRFC } from '../helpers/types'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import { getClasses } from './util'
import { SideTab } from '../SideTab'
import { Tab } from '../Tab'
import { Swiper } from '../Swiper'
import type { OnResetItems, SwiperRef } from '../Swiper/types'
import type { TabRef } from '../Tab/types'
import { isString } from '../helpers/util'

const FxTabView: FRFC<
  TabViewRef,
  TabViewProps &
    TabViewEmits & {
      style?: CSSProperties
    }
> = (props, ref) => {
  const tabRef = useRef<TabRef>(null)
  const swiperRef = useRef<SwiperRef>(null)
  const [vertical] = useState(!!props.initialVertical)
  const classes = classNames(getClasses(vertical), props.className)

  const [tabList, setTabList] = useState<
    {
      value: number
      label: string
      subLabel: string
    }[]
  >([])

  const onResetItems: OnResetItems = items => {
    setTabList(
      items.map(({ name, subName }, index) => {
        return {
          value: index,
          label: name || '',
          subLabel: subName || ''
        }
      })
    )
  }

  const activeIndex = useRef(0)

  function onChange(index: number | string) {
    if (isString(index)) {
      return
    }

    if (index === activeIndex.current) {
      return
    }

    props.onChange && props.onChange(index, activeIndex.current)

    activeIndex.current = index
    switchToIndex(index)
  }

  function switchToIndex(index: number) {
    tabRef.current?.switchToIndex(index)
    swiperRef.current?.swipeTo(index)
  }

  useImperativeHandle(
    ref,
    () => ({
      switchToIndex
    }),
    []
  )

  return (
    <div className={classes} style={props.style}>
      <div className="fx-tab-view_header fx-horizontal-hairline">
        {vertical ? (
          <SideTab
            initialActiveValue={0}
            options={tabList}
            onChange={onChange}
            ref={tabRef}
          />
        ) : (
          <Tab
            initialActiveValue={0}
            options={tabList}
            scrollThreshold={props.scrollThreshold}
            onChange={onChange}
            ref={tabRef}
          />
        )}
      </div>
      <div className="fx-tab-view_body">
        <Swiper
          initialActiveIndex={0}
          initialVertical={vertical}
          bounces={false}
          onAnimated={props.onAnimated}
          ref={swiperRef}
          onChange={onChange}
          onResetItems={onResetItems}
        >
          {props.children}
        </Swiper>
      </div>
    </div>
  )
}

export default forwardRef(FxTabView)
