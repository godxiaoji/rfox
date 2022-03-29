import classNames from 'classnames'
import type { ScrollTabEmits, ScrollTabProps, ScrollTabRef } from './types'
import type { CSSProperties, FRFC } from '../helpers/types'
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import type { TabRef } from '../Tab/types'
import { isString } from '../helpers/util'
import type { OnResetItems, StickyViewRef } from '../StickyView/types'
import type { ResetContainer, StickyRef } from '../Sticky/types'
import { SideTab } from '../SideTab'
import { Sticky } from '../Sticky'
import { StickyView } from '../StickyView'

const FxScrollTab: FRFC<
  ScrollTabRef,
  ScrollTabProps &
    ScrollTabEmits & {
      style?: CSSProperties
    }
> = (props, ref) => {
  const sideRef = useRef<StickyRef>(null)
  const tabRef = useRef<TabRef>(null)
  const bodyRef = useRef<StickyViewRef>(null)
  const classes = classNames('fx-scroll-tab', props.className)

  const [tabList, setTabList] = useState<
    {
      value: number
      label: string
    }[]
  >([])

  const onResetItems: OnResetItems = items => {
    setTabList(
      items.map(({ name }, index) => {
        return {
          value: index,
          label: name
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
    bodyRef.current?.scrollToIndex(index)
  }

  const resetContainer: ResetContainer = seletor => {
    sideRef.current?.resetContainer(seletor)
    bodyRef.current?.resetContainer(seletor)
  }

  useEffect(() => {
    resetContainer(document.documentElement)
  }, [])

  useImperativeHandle(
    ref,
    () => ({
      switchToIndex
    }),
    []
  )

  return (
    <div className={classes} style={props.style}>
      <div className="fx-scroll-tab_sidebar">
        <Sticky
          offsetTop={props.stickyOffsetTop}
          offsetBottom={props.stickyOffsetBottom}
          ref={sideRef}
        >
          <SideTab options={tabList} onChange={onChange} ref={tabRef} />
        </Sticky>
      </div>
      <div className="fx-scroll-tab_body">
        <StickyView
          offsetTop={props.stickyOffsetTop}
          onResetItems={onResetItems}
          onChange={onChange}
          ref={bodyRef}
        >
          {props.children}
        </StickyView>
      </div>
    </div>
  )
}

export default forwardRef(FxScrollTab)
