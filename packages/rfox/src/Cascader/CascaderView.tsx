import classNames from 'classnames'
import { CascaderViewEmits, CascaderViewProps, CascaderViewRef } from './types'
import type { FRFC } from '../helpers/types'
import { Empty } from '../Empty'
import { useLocale } from '../ConfigProvider/context'
import {
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
  useEffect,
  useState
} from 'react'
import ViewGroup from './CascaderViewGroup'
import { isSameArray, noop } from '../helpers/util'
import { SelectorValue } from '../SelectorField/types'
import { usePickerView } from '../Picker/use-picker'
import { ColRow } from '../Picker/types'
import { Tab } from '../Tab'
import { mergeHandlers } from '../Picker/util'
import type { TabRef } from '../Tab/types'

interface SelectedTabs {
  label: string | null
  value: number | string
}

const FxCascaderView: FRFC<
  CascaderViewRef,
  CascaderViewProps & CascaderViewEmits
> = (props, ref) => {
  const { locale } = useLocale()
  const tabRef = useRef<TabRef>(null)
  const [selectedTabs, setSelectedTabs] = useState<SelectedTabs[]>([])
  const [tabIndex, setTabIndex] = useState(0)
  const tempTabIndex = useRef(-1)

  const {
    currentValues,
    getDetail,
    cols,
    update,
    getValuesByRow,
    updateValue,
    onChange,
    updateOriginalValue
  } = usePickerView(props, {
    name: 'cascader',
    afterUpdate(valueArray, labelArray, cols) {
      const _selectedTabs: SelectedTabs[] = []

      labelArray.forEach((v, k) => {
        _selectedTabs.push({
          label: v,
          value: k
        })
      })

      if (labelArray.length < cols.length) {
        _selectedTabs.push({
          label: null,
          value: _selectedTabs.length
        })
      }

      setSelectedTabs(_selectedTabs)
      tempTabIndex.current = _selectedTabs.length - 1
    },
    handlers: mergeHandlers(
      {
        formatter: props.formatter,
        parser: props.parser
      }
      // inject<Partial<CascaderHandlers>>('fxCascaderHandlers', {})
    )
  })

  function onItemClick(item: ColRow) {
    if (item.disabled) {
      return
    }

    const selecteds = getValuesByRow(item)

    update(selecteds)

    if (!item.hasChildren) {
      if (!isSameArray(currentValues.current, selecteds)) {
        onSelect(selecteds)
        onChange()
      } else {
        onSelect(selecteds)
      }
    }
  }

  function onSelect(selecteds: SelectorValue[]) {
    const selectDetail = updateOriginalValue(selecteds, false)

    props.onSelect && props.onSelect(selectDetail)
  }

  function onTabChange(index: number | string) {
    setTabIndex(index as number)
  }

  const tabOptions = useMemo(
    () =>
      selectedTabs.map(v => {
        return {
          label: v.label == null ? locale.cascaderDefaultTitle : v.label,
          value: v.value
        }
      }),
    [selectedTabs, locale]
  )

  useEffect(() => {
    if (tabOptions.length === 0) {
      return
    }

    const index = tempTabIndex.current

    if (index !== -1) {
      setTabIndex(index)
      tabRef.current?.switchToIndex(index)
      tempTabIndex.current = -1
    }
  }, [tabOptions])

  const classes = classNames('fx-cascader-view', props.className)

  const renderGroups = useMemo(() => {
    return cols.map((colItem, listIndex) => (
      <ViewGroup
        key={colItem.key}
        tabIndex={tabIndex}
        list={colItem.rows}
        listIndex={listIndex}
        onItemClick={onItemClick}
      />
    ))
  }, [cols, tabIndex])

  useImperativeHandle(
    ref,
    () => ({
      updateValue,
      getDetail,
      resize: noop
    }),
    []
  )

  return (
    <div className={classes}>
      <Tab
        className="fx-cascader-view_header"
        options={tabOptions}
        scrollThreshold={0}
        onChange={onTabChange}
        ref={tabRef}
      />
      <div className="fx-cascader-view_body">
        {renderGroups}
        {cols.length === 0 ? (
          <Empty description={locale.cascaderEmptyText} />
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}

export default forwardRef(FxCascaderView)
