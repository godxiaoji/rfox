import { isNumber, isObject, isStringNumberMix, isURL } from '../helpers/util'
import Exception from '../helpers/exception'
import { handleBadge } from '../Badge/util'
import type {
  OptionItem,
  HandleOptionItem,
  TabCommonProps,
  TabCommonEmits,
  ActiveValue,
  TabRef
} from './types'
import {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import type { ForwardedRef } from 'react'
import { useMounted } from '../hooks/use-life'
import { getTabStyles } from './util'
import { useFrameTask } from '../hooks/use-frame-task'
import { useStableState } from '../hooks/use'

interface UseOptions {
  tabName: string
}

export function useTab(
  props: TabCommonProps & TabCommonEmits,
  ref: ForwardedRef<TabRef>,
  { tabName }: UseOptions
) {
  const { mounted } = useMounted()
  const { frameStart } = useFrameTask()

  const listEl = useRef<HTMLUListElement>(null)
  const underlineEl = useRef<HTMLSpanElement>(null)
  const [getOptions2, setOptions2] = useStableState<HandleOptionItem[]>([])
  const [activeIndex, setActiveIndex] = useState(-1)
  const [hasSub, setHasSub] = useState(false)
  const activeIndex2 = useRef(0)
  const activeValue2 = useRef(props.initialActiveValue)

  function switchTo(value: ActiveValue) {
    if (!updateActive(value)) {
      console.error(
        new Exception(
          'The value is not in "options".',
          Exception.TYPE.PARAM_ERROR,
          tabName
        )
      )
    }
  }

  const switchToIndex = (index: number) => {
    if (getOptions2(true)[index]) {
      updateActive(getOptions2(true)[index].value)
    } else {
      console.error(
        new Exception(
          'The "options[index]" not found.',
          Exception.TYPE.PARAM_ERROR,
          tabName
        )
      )
    }
  }

  const updateActive = (value: ActiveValue) => {
    if (value === activeValue2.current) {
      return true
    }

    let hasValue = false

    getOptions2(true).forEach((option, index) => {
      if (option.value === value) {
        hasValue = true

        activeIndex2.current = index
        activeValue2.current = option.value
        setActiveIndex(index)
      }
    })

    // afterUpdate
    hasValue && mounted.current && updatePos()

    return hasValue
  }

  const onChange = useCallback(
    (value: ActiveValue) => {
      if (value === activeValue2.current) {
        return
      }

      const hasValue = updateActive(value)

      hasValue && props.onChange && props.onChange(value, activeIndex2.current)
    },
    [props.onChange]
  )

  function updatePos() {
    if (tabName === 'TabBar') {
      return
    }

    if (!listEl.current) {
      return
    }
    const $list = listEl.current
    const $activeItem = $list.children[activeIndex2.current] as HTMLElement
    if (!$activeItem) {
      return
    }

    const vertical = tabName === 'SideTab'
    const sizeKey = !vertical ? 'Width' : 'Height'
    const directionKey = !vertical ? 'Left' : 'Top'
    const offsetSizeKey = ('offset' + sizeKey) as 'offsetWidth'
    const scrollSizeKey = ('scroll' + sizeKey) as 'scrollWidth'
    const offsetDirectionKey = ('offset' + directionKey) as 'offsetLeft'
    const scrollDirectionKey = ('scroll' + directionKey) as 'scrollLeft'

    const w = $list[offsetSizeKey]
    const ofs = $activeItem[offsetDirectionKey]
    const from = $list[scrollDirectionKey]
    const to =
      $activeItem[offsetSizeKey] > w
        ? ofs
        : Math.max(
            Math.min(
              ofs - (w - $activeItem[offsetSizeKey]) / 2,
              $list[scrollSizeKey] - w
            ),
            0
          )

    frameStart({
      from,
      to,
      duration: 200,
      progress({ current }) {
        $list[scrollDirectionKey] = current
      },
      complete({ current }) {
        $list[scrollDirectionKey] = current
      }
    })

    if (tabName === 'Tab' && underlineEl.current) {
      const $inner = $activeItem.querySelector(
        '.fx-tab_item-inner'
      ) as HTMLElement

      underlineEl.current.style.width = $inner.offsetWidth + 'px'
      underlineEl.current.style.transform = `translate3d(${
        ofs - to + ($activeItem.offsetWidth - $inner.offsetWidth) / 2
      }px, 0, 0)`
    }
  }

  useEffect(() => {
    updatePos()
  }, [getOptions2()])

  useEffect(() => {
    const options: HandleOptionItem[] = []

    let hasActive = false
    setHasSub(false)

    if (Array.isArray(props.options)) {
      props.options.forEach((item, index) => {
        let option: HandleOptionItem | null = null

        if (isNumber(item)) {
          option = {
            label: item.toString(),
            value: item as number
          }
        } else if (typeof item === 'string') {
          option = {
            label: item,
            value: item
          }
        } else if (isObject(item)) {
          item = item as OptionItem

          if (isStringNumberMix(item.value)) {
            option = {
              label:
                typeof item.label === 'string'
                  ? item.label
                  : item.value.toString(),
              subLabel: typeof item.subLabel === 'string' ? item.subLabel : '',
              value: item.value,
              icon: undefined
            }

            if (item.icon) {
              if (isURL(item.icon)) {
                option.iconLink = item.icon as string
                option.activeIconLink = isURL(item.activeIcon)
                  ? (item.activeIcon as string)
                  : option.iconLink
              } else {
                option.icon = item.icon
                option.activeIcon = item.activeIcon ?? option.icon
              }
            }

            if (option.subLabel) {
              setHasSub(true)
            }

            option.badge = handleBadge(item.badge)
          }
        }

        if (option) {
          if (option.value === activeValue2.current) {
            setActiveIndex(index)
            activeIndex2.current = index
            hasActive = true
          }

          options.push(option)
        }
      })
    }

    setOptions2(options)

    // 如果没有激活，则切换到首个
    if (!hasActive && options[0]) {
      // this.onChange(options[0].value)
      setActiveIndex(0)
      activeIndex2.current = 0
      activeValue2.current = options[0].value
    }
  }, [props.options])

  const styles = Object.assign(
    getTabStyles(props.color, props.activeColor),
    props.style ?? {}
  )

  useImperativeHandle(
    ref,
    () => ({
      switchTo,
      switchToIndex
    }),
    []
  )

  return {
    listEl,
    underlineEl,
    activeIndex,
    hasSub,
    options2: getOptions2(),
    switchTo,
    switchToIndex,
    onChange,
    styles
  }
}
