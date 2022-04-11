import {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react'
import { cloneData, isSameArray } from '../helpers/util'
import type {
  ColRow,
  OptionItem,
  PickerOptionsHandler,
  PickerHandlers,
  PickerCommonProps,
  PickerCommonEmits,
  PickerPopupProps,
  PickerPopupEmits,
  PickerViewRef,
  PickerProps,
  PickerEmits,
  PickerPopupRef,
  PickerViewAfterUpdate,
  Col,
  UserOptionItem
} from './types'
import type {
  SelectorValue,
  SelectorModelValue,
  SelectorDetail
} from '../SelectorField/types'
import {
  cloneDetail,
  isSameDetail,
  isSameValue,
  validateValues,
  getColRows,
  getFormatOptions,
  isValidValue,
  getDefaultFieldNames
} from './util'
import type {
  PopupCustomConfirm,
  PopupCustomCancel,
  PopupRef
} from '../popup/types'

function getDefaultDetail(handlers: PickerHandlers) {
  return formatter([], [], handlers)
}

export function usePicker(
  props: PickerProps & PickerEmits,
  {
    name,
    handlers
  }: {
    name: string
    handlers: PickerHandlers
  }
) {
  const [isInitPopup, setIsInitPopup] = useState(false)
  const [popupVisible, setPopupVisible] = useState(true)
  const [fieldValue, setFieldValue] = useState('')
  const [fieldLabel, setFieldLabel] = useState('')
  const popupRef = useRef<PickerPopupRef>(null)

  const detail = useRef(getDefaultDetail(handlers))

  function updateValue(val: unknown) {
    if (val == null) {
      // 解决 formily 强制null的问题
      return
    }

    if (!isValidValue(val)) {
      updateDetail(getDefaultDetail(handlers))
      return
    }

    if (!isSameValue(val, detail.current.value)) {
      // 如果value不同
      const { options, isCascade } = getFormatOptions(
        props.options || [],
        props.fieldNames || {},
        handlers.optionsHandler,
        name === 'cascader'
      )

      const { value, label, valid } = validateValues(
        parser(val, handlers),
        options,
        isCascade,
        handlers.optionsHandler
      )

      if (valid) {
        updateDetail(formatter(value, label, handlers))
      }
    }
  }

  function updateDetail(newDetail: SelectorDetail) {
    detail.current = newDetail

    setFieldLabel(newDetail.label)
    setFieldValue(newDetail.value != null ? newDetail.value.toString() : '')
  }

  function onFieldClick() {
    if (!props.disabled) {
      if (!isInitPopup) {
        setIsInitPopup(true)
      } else {
        setPopupVisible(true)
      }
    }
  }

  function onUpdateVisible(v: boolean) {
    setPopupVisible(v)
  }

  function getDetail() {
    return cloneDetail(detail.current)
  }

  function onConfirm(newDetail: SelectorDetail) {
    if (!isSameDetail(newDetail, detail.current)) {
      updateDetail(newDetail)

      props.onChange && props.onChange(getDetail().value)
    }
  }

  useEffect(() => {
    updateValue(props.value)
  }, [props.value, props.options])

  useEffect(() => {
    if (isInitPopup && popupVisible) {
      props.onFocus && props.onFocus()
    } else if (!popupVisible) {
      props.onBlur && props.onBlur()
    }
  }, [isInitPopup, popupVisible])

  return {
    popupRef,
    isInitPopup,
    popupVisible,
    fieldValue,
    fieldLabel,
    onFieldClick,
    onConfirm,
    onUpdateVisible
  }
}

export function usePickerPopup(
  props: PickerPopupProps & PickerPopupEmits,
  ref: ForwardedRef<PickerPopupRef>,
  {
    handlers
  }: {
    handlers: PickerHandlers
  }
) {
  const popupRef = useRef<PopupRef>(null)
  const viewRef = useRef<PickerViewRef>(null)

  const detail = useRef(getDefaultDetail(handlers))

  function beforeConfirm() {
    const newDetail = getViewDetail()

    if (!isSameDetail(newDetail, detail.current)) {
      detail.current = newDetail

      // 跟picker-view不一样，改变数值时机是确定按钮
      props.onChange && props.onChange(getDetail().value)
    }

    return getDetail()
  }

  function onCancelClick() {
    popupRef.current?.onCancelClick()
  }

  const customConfirm: PopupCustomConfirm = detail => {
    popupRef.current?.customConfirm(detail)
  }

  const customCancel: PopupCustomCancel = (key, focus) => {
    popupRef.current?.customCancel(key, focus)
  }

  function onConfirmClick() {
    popupRef.current?.customConfirm(beforeConfirm())
  }

  function getDetail() {
    return cloneDetail(detail.current)
  }

  function getViewDetail() {
    return viewRef.current?.getDetail() || getDefaultDetail(handlers)
  }

  useEffect(() => {
    if (isValidValue(props.value)) {
      detail.current = getViewDetail()
    } else {
      // 主要是针对 pickerView 强制要求值得问题
      detail.current = getDefaultDetail(handlers)
    }
  }, [props.value])

  useImperativeHandle(
    ref,
    () => ({
      customConfirm,
      customCancel,
      onCancelClick,
      getDetail
    }),
    []
  )

  return {
    popupRef,
    viewRef,
    getDetail,
    onCancelClick,
    onConfirmClick
  }
}

interface ViewUseOptions {
  name: 'cascader' | 'picker'
  afterUpdate: PickerViewAfterUpdate
  handlers: PickerHandlers
}

const defaultOptions: UserOptionItem[] = []
const defaultFieldNames = getDefaultFieldNames()

export function usePickerView(
  {
    options = defaultOptions,
    fieldNames = defaultFieldNames,
    ...props
  }: PickerCommonProps & PickerCommonEmits,
  { name, afterUpdate, handlers }: ViewUseOptions
) {
  const [cols, setCols] = useState<Col[]>([])

  const options2 = useRef<OptionItem[] | OptionItem[][]>([])
  const isCascade = useRef(false)

  const selectedLabels = useRef<string[]>([])
  const selectedValues = useRef<SelectorValue[]>([])

  const currentLabels = useRef<string[]>([])
  const currentValues = useRef<SelectorValue[]>([])

  const isPicker = name === 'picker'

  const optionsHandler: PickerOptionsHandler | null =
    handlers.optionsHandler || null

  function updateOptions() {
    const formatted = getFormatOptions(
      options,
      fieldNames,
      optionsHandler,
      !isPicker
    )

    options2.current = formatted.options
    isCascade.current = formatted.isCascade
  }

  function updateOriginalValue(val: SelectorValue[], forceUpdate: boolean) {
    const { valid, value: values } = validateValues(
      val,
      options2.current,
      isCascade.current,
      optionsHandler
    )

    if ((valid && !isSameArray(values, currentValues.current)) || forceUpdate) {
      update(values)

      currentLabels.current =
        values.length > 0 || isPicker ? selectedLabels.current : []
      currentValues.current =
        values.length > 0 || isPicker ? selectedValues.current : []
    }

    return getDetail()
  }

  function updateValue(val: unknown, forceUpdate = false) {
    return updateOriginalValue(parser(val, handlers), forceUpdate)
  }

  function getDetail() {
    return formatter(
      cloneData(currentValues.current),
      cloneData(currentLabels.current),
      handlers
    )
  }

  function addCache(item: { value: string | number; label: string }) {
    selectedValues.current.push(item.value)
    selectedLabels.current.push(item.label)
  }

  function update(selecteds: SelectorValue[]) {
    !isCascade.current ? updateCols(selecteds) : updateCascadeCols(selecteds)

    if (isPicker) {
      currentLabels.current = selectedLabels.current
      currentValues.current = selectedValues.current
    }
  }

  useEffect(() => {
    afterUpdate(selectedValues.current, selectedLabels.current, cols)
  }, [cols])

  function clearCache() {
    selectedLabels.current = []
    selectedValues.current = []
  }

  /**
   * 更新多列展示效果
   */
  function updateCols(selecteds: SelectorValue[]) {
    clearCache()

    const newCols: Col[] = []

    if (options2.current.length === 0) {
      setCols(newCols)
      return []
    }

    const options = (
      Array.isArray(options2.current[0]) ? options2.current : [options2.current]
    ) as OptionItem[][]

    options.forEach((subOptions, index) => {
      let hasSelected = false

      const rows: ColRow[] = []

      for (let i = 0; i < subOptions.length; i++) {
        const optionItem = subOptions[i]
        const row: ColRow = {
          value: optionItem.value,
          label: optionItem.label,
          hasChildren: false,
          indexes: [i],
          selected: false
        }

        if (optionItem.value == selecteds[index]) {
          hasSelected = true
          row.selected = true
          addCache(optionItem)
        }

        rows.push(row)
      }

      if (!hasSelected) {
        if (subOptions[0]) {
          rows[0].selected = true
          addCache(subOptions[0])
        }
      }

      newCols.push({
        key: index.toString(),
        rows
      })
    })

    setCols(newCols)

    return newCols
  }

  /**
   * 日期等更新模式
   * @param selecteds 选择值
   */
  function updateVirtualOptionsCols(selecteds: SelectorValue[]) {
    clearCache()

    if (selecteds.length === 0) {
      // 如果没有默认值，尝试获取默认值
      selecteds = getCascadeDefaultSelecteds()
    }

    const newCols: Col[] = []

    const getRows = optionsHandler as PickerOptionsHandler
    let colIndex = 0
    let rows = getRows(colIndex)
    let lastGroupSelected = false
    let key = ''
    let i = 0

    for (; i <= selecteds.length; i++) {
      const selected = selecteds[i]

      let nextParent: ColRow | null = null
      lastGroupSelected = false

      if (rows) {
        for (let j = 0; j < rows.length; j++) {
          const row = rows[j]

          if (selected != null && row.value === selected) {
            // 找到
            row.selected = true
            lastGroupSelected = true

            if (row.hasChildren) {
              nextParent = row
              colIndex++
            }

            addCache({
              label: row.label,
              value: row.value
            })
          }
        }

        newCols.push({
          key: `${i}-${key}`,
          rows
        })
      }

      if (!nextParent) {
        break
      } else {
        rows = getRows(colIndex, nextParent)
        key = nextParent.value.toString()
      }
    }

    if (isPicker && !lastGroupSelected) {
      const index = 0

      let lastColFirstRow: ColRow | null = rows[index]

      while (lastColFirstRow) {
        lastColFirstRow.selected = true
        addCache({
          label: lastColFirstRow.label,
          value: lastColFirstRow.value
        })
        i++

        if (lastColFirstRow.hasChildren) {
          colIndex++
          rows = getRows(colIndex, lastColFirstRow)
          newCols.push({
            key: `${i}-${lastColFirstRow.value.toString()}`,
            rows
          })

          lastColFirstRow = rows[0]
        } else {
          lastColFirstRow = null
        }
      }
    }

    setCols(newCols)

    return newCols
  }

  /**
   * 级联更新模式
   * @param selecteds 选择值
   */
  function updateCascadeCols(selecteds: SelectorValue[]) {
    if (typeof optionsHandler === 'function') {
      return updateVirtualOptionsCols(selecteds)
    }

    clearCache()

    const newCols: Col[] = []

    let optionList: OptionItem[] = options2.current as OptionItem[]

    if (optionList.length === 0) {
      setCols(newCols)
      return newCols
    }

    let rows = getColRows(optionList, [])

    if (selecteds.length === 0) {
      // 如果没有默认值，尝试获取默认值
      selecteds = getCascadeDefaultSelecteds()
    }

    let lastGroupSelected = false
    let key = ''
    let i = 0

    for (; i <= selecteds.length; i++) {
      const selected = selecteds[i]

      let nextParent: OptionItem | null = null
      let nextParentIndexes: number[] = []
      lastGroupSelected = false

      if (rows) {
        for (let j = 0; j < rows.length; j++) {
          const optionItem = optionList[j]
          const row = rows[j]

          if (selected != null && row.value === selected) {
            // 找到
            row.selected = true
            lastGroupSelected = true

            if (row.hasChildren) {
              nextParent = optionItem
              nextParentIndexes = row.indexes
            }

            addCache(optionItem)
          }
        }

        newCols.push({
          key: `${i}-${key}`,
          rows
        })
      }

      if (!nextParent) {
        break
      } else {
        optionList = nextParent.children
        rows = getColRows(optionList, [...nextParentIndexes])
        key = nextParent.value.toString()
      }
    }

    if (isPicker && !lastGroupSelected) {
      const index = 0

      let lastGroupFirstItem: OptionItem | null = optionList[index]

      while (lastGroupFirstItem) {
        const lastColFirstRow = rows[index]
        lastColFirstRow.selected = true
        addCache(lastGroupFirstItem)
        i++

        if (lastColFirstRow.hasChildren) {
          optionList = lastGroupFirstItem.children
          rows = getColRows(optionList, [...lastColFirstRow.indexes])
          newCols.push({
            key: `${i}-${lastColFirstRow.value.toString()}`,
            rows
          })

          lastGroupFirstItem = optionList[0]
        } else {
          lastGroupFirstItem = null
        }
      }
    }

    setCols(newCols)

    return newCols
  }

  /**
   * 非级联更新选择项
   */
  function updateColSelected(colIndex: number, current: number) {
    setCols(val => {
      const newCols = cloneData(val) as Col[]
      const newCol = newCols[colIndex]

      newCol &&
        newCol.rows.forEach((row, index) => {
          if (index === current) {
            currentValues.current[colIndex] = row.value
            currentLabels.current[colIndex] = row.label
            row.selected = true
          } else {
            row.selected = false
          }
        })

      return newCols
    })
  }

  /**
   * 获取默认选择数据
   * @summary 主要用于一些日期啥的，可以默认当天
   */
  function getCascadeDefaultSelecteds() {
    const selecteds = handlers.defaultValueGetter
      ? handlers.defaultValueGetter()
      : []

    if (selecteds.length > 0) {
      return selecteds
    }

    function getFirstSelected(
      values: SelectorValue[],
      optionList: OptionItem[]
    ): SelectorValue[] {
      const optionItem = optionList[0]

      if (optionItem) {
        values.push(optionItem.value)

        if (optionItem.children.length > 0) {
          return getFirstSelected(values, optionItem.children)
        }
      }

      return values
    }

    return !isPicker
      ? []
      : getFirstSelected([], options2.current as OptionItem[])
  }

  function getValuesByRow(row: ColRow) {
    if (row.values) {
      return row.values as SelectorValue[]
    }

    const values: SelectorValue[] = []
    const indexes = row.indexes
    let i = 0
    let options = options2.current as OptionItem[]
    let optionItem = options[indexes[i]]

    while (options.length > 0 && i < indexes.length && optionItem) {
      values.push(optionItem.value)
      options = optionItem.children
      i++
      optionItem = options[indexes[i]]
    }

    return values
  }

  function onChange() {
    props.onChange && props.onChange(getDetail().value)
  }

  useEffect(() => {
    // 需要防范options fieldNames 的详情值没变，但是新造的
    const oldJson = JSON.stringify(options2.current)
    updateOptions()

    if (JSON.stringify(options2.current) !== oldJson) {
      updateOriginalValue(currentValues.current, true)
    }
  }, [options, fieldNames])

  useEffect(() => {
    updateValue(props.value, true)
  }, [props.value])

  useEffect(() => {
    // picker 要默认数据
    if (
      isPicker &&
      (!isValidValue(props.value) ||
        !isSameValue(props.value, currentValues.current))
    ) {
      // 如果传入的数据
      onChange()
    }
  }, [])

  return {
    cols,
    currentLabels,
    currentValues,
    isCascade,
    getDetail,
    update,
    updateColSelected,
    getValuesByRow,
    updateOriginalValue,
    onChange
  }
}

type PickerFormatter = (
  valueArray: SelectorValue[],
  labelArray: string[],
  handlers: PickerHandlers
) => SelectorDetail

type PickerParser = (
  value: unknown,
  handlers: PickerHandlers
) => SelectorValue[]

const formatter: PickerFormatter = (valueArray, labelArray, handlers) => {
  const defaultLabel = handlers.labelFormatter(labelArray)
  const ret = handlers.formatter(valueArray, labelArray)

  if ((ret as SelectorDetail)?.value != null) {
    return {
      value: (ret as SelectorDetail).value,
      label: (ret as SelectorDetail).label ?? ''
    }
  }

  return {
    value: ret as SelectorModelValue,
    label: defaultLabel
  }
}

const parser: PickerParser = (val, handlers) => {
  return handlers.parser(val)
}
