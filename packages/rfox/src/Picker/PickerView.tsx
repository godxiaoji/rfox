import classNames from 'classnames'
import {
  forwardRef,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef
} from 'react'
import type { PickerViewEmits, PickerViewProps, PickerViewRef } from './types'
import type { FRVFC } from '../helpers/types'
import { Empty } from '../Empty'
import { frameTo } from '../helpers/animation'
import { mergeHandlers, DEFAULT_ITEM_HEIGHT } from './util'
import { usePickerView } from './use-picker'
import { useLocale } from '../ConfigProvider/context'
import ViewCol from './PickerViewCol'
import { PickerContext } from './context'

interface ScrollElement extends HTMLElement {
  scrolling?: boolean
  scrollTimer?: number
}

const FxPickerView: FRVFC<PickerViewRef, PickerViewProps & PickerViewEmits> = (
  props,
  ref
) => {
  const { locale } = useLocale()
  const root = useRef<HTMLDivElement>(null)
  const handlers = useContext(PickerContext)

  const {
    getDetail,
    cols,
    isCascade,
    update,
    updateColSelected,
    getValuesByRow,
    onChange
  } = usePickerView(props, {
    name: 'picker',
    afterUpdate: updatePos,
    handlers: mergeHandlers(
      {
        formatter: props.formatter,
        parser: props.parser
      },
      handlers
    )
  })

  function updatePos() {
    // 把选择数据展示在选择框内
    const $picker = root.current

    if ($picker) {
      const $lists = $picker.querySelectorAll(`.fx-picker-view_list`)

      $lists.forEach(($el, index) => {
        const $list = $el as ScrollElement

        if (cols[index] && $list.scrolling !== true) {
          const list = cols[index].rows
          let selectIndex = -1

          for (let i = 0, len = list.length; i < len; i++) {
            if (list[i].selected) {
              selectIndex = i
              break
            }
          }

          // 这时候dom节点还未做更新，处理一下
          requestAnimationFrame(() => {
            $list.scrollTop = DEFAULT_ITEM_HEIGHT * selectIndex
          })
        }
      })
    }
  }

  const onListScroll = ($list: ScrollElement, colIndex: number) => {
    if ($list.scrolling) {
      return
    }

    clearTimeout($list.scrollTimer)

    const itemHeight = DEFAULT_ITEM_HEIGHT
    const list = cols[colIndex].rows
    let current = Math.round($list.scrollTop / itemHeight)
    let oldSelectIndex = 0

    for (let i = 0; i < list.length; i++) {
      if (list[i].selected) {
        oldSelectIndex = i
        break
      }
    }

    let isChange = current !== oldSelectIndex
    if (isChange) {
      while (list[current].disabled && current !== oldSelectIndex) {
        // 处理disabled 不能选的问题
        if (current > oldSelectIndex) {
          current--
        } else {
          current++
        }
      }
    }
    isChange = current !== oldSelectIndex

    const item = list[current]

    if (current * itemHeight === $list.scrollTop && !isChange) {
      // 如果一致 就不需要修正了
    } else {
      $list.scrollTimer = window.setTimeout(() => {
        // $list.scrollTop = current * itemHeight
        $list.scrolling = true

        frameTo({
          from: $list.scrollTop,
          to: current * itemHeight,
          duration: 100,
          progress(res) {
            $list.scrollTop = res.current
          },
          complete() {
            $list.scrolling = false
          }
        })

        if (isChange) {
          if (isCascade.current) {
            update(getValuesByRow(item))
          } else {
            updateColSelected(colIndex, current)
          }

          onChange()
        }
      }, 400)
    }
  }

  const classes = classNames('fx-picker-view', props.className)

  const renderCols = useMemo(() => {
    return cols.map((colItem, listIndex) => (
      <ViewCol
        key={colItem.key}
        list={colItem.rows}
        listIndex={listIndex}
        onListScroll={onListScroll}
      />
    ))
  }, [cols])

  useImperativeHandle(
    ref,
    () => ({
      getDetail,
      resize: updatePos
    }),
    [cols]
  )

  return (
    <div className={classes} ref={root}>
      <div className="fx-picker-view_cols">
        {renderCols}
        {cols.length === 0 ? (
          <Empty description={locale.pickerEmptyText} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default forwardRef(FxPickerView)
