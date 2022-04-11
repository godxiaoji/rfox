import classNames from 'classnames'
import type { TabViewEmits, TabViewProps, TabViewRef } from './types'
import type { CSSProperties, FRFC } from '../helpers/types'
import {
  cloneElement,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react'
import { getClasses } from './util'
import { SideTab } from '../SideTab'
import { Tab } from '../Tab'
import { Swiper } from '../Swiper'
import type { SwiperRef } from '../Swiper/types'
import type { TabRef } from '../Tab/types'
import { isString } from '../helpers/util'
import { toArray } from '../helpers/react'

interface TabItem {
  value: number
  label: string
  subLabel: string
}

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

  const [tabList, setTabList] = useState<TabItem[]>([])

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

  const renderItems = useMemo(() => {
    const newTabList: TabItem[] = []

    const newChildren = toArray(props.children).map((child, index) => {
      newTabList.push({
        value: index,
        label: child.props.name ?? '',
        subLabel: child.props.subName ?? ''
      })

      const childProps = {
        key: index,
        ...child.props,
        index,
        vertical
      }

      return cloneElement(child, childProps)
    })

    if (JSON.stringify(newTabList) !== JSON.stringify(tabList)) {
      setTabList(newTabList)
    }

    return newChildren
  }, [props.children])

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
          <SideTab options={tabList} onChange={onChange} ref={tabRef} />
        ) : (
          <Tab
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
        >
          {renderItems}
        </Swiper>
      </div>
    </div>
  )
}

export default forwardRef(FxTabView)
