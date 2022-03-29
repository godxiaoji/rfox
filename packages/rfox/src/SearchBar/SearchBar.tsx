import classNames from 'classnames'
import type {
  SearchBarEmits,
  SearchBarProps,
  SuggestItem,
  SuggestList
} from './types'
import type { FC } from '../helpers/types'
import { Icon } from '../Icon'
import { Input } from '../Input'
import { Button } from '../Button'
import { Dropdown } from '../Dropdown'
import { Cell } from '../Cell'
import { Tag } from '../Tag'
import { isStringArray } from '../helpers/util'
import { useLocale } from '../ConfigProvider/context'
import SearchOutlined from '../Icon/icons/SearchOutlined'
import { FormEventHandler, useEffect, useMemo, useRef, useState } from 'react'
import {
  getFieldClasses,
  getInnerClasses,
  getInnerStyles,
  getSuggestStyles
} from './util'
import { useStableState } from '../hooks/use'

const FxSearchBar: FC<SearchBarProps & SearchBarEmits> = ({
  placeholderInterval = 5000,
  ...props
}) => {
  const { locale } = useLocale()

  const innerRef = useRef<HTMLFormElement>(null)

  const [placeholder, setPlaceholder] = useState('')
  const [getSearchText, setSearchText] = useStableState('')
  const [initDropdown, setInitDropdown] = useState(false)
  const [suggestVisible, setSuggestVisible] = useState(false)
  const [suggestList, setSuggestList] = useState<SuggestItem[]>([])

  function onFocus() {
    const text = getSearchText(true)

    props.onFocus &&
      props.onFocus(text, res => {
        updateSuggestList(res, text !== getSearchText(true))
      })
  }

  function onBlur() {
    const text = getSearchText(true)

    props.onBlur &&
      props.onBlur(text, res => {
        updateSuggestList(res, text !== getSearchText(true))
      })
  }

  function onInput(text: string) {
    setSearchText(text)

    props.onInput &&
      props.onInput(text, res => {
        console.log(text, getSearchText(true))
        updateSuggestList(res, text !== getSearchText(true))
      })
  }

  function updateSuggestList(res: SuggestList, expired: boolean) {
    if (expired) {
      return
    }

    const newList: SuggestItem[] = []

    if (Array.isArray(res)) {
      res.forEach(v => {
        if (typeof v === 'string' || typeof v === 'number') {
          newList.push({
            text: v.toString(),
            tags: []
          })
        } else if (v) {
          if (typeof v.text === 'string' || typeof v.text === 'number') {
            v.text = v.text.toString()
            v.tags = isStringArray(v.tags) ? v.tags : []
            newList.push(v)
          }
        }
      })
    }

    setSuggestList(newList)

    if (newList.length > 0) {
      setInitDropdown(true)
      setSuggestVisible(true)
    } else {
      setSuggestVisible(false)
    }
  }

  const onSearch: FormEventHandler<HTMLFormElement> = e => {
    e.nativeEvent.preventDefault()

    handleSearch(getSearchText(true))
  }

  const handleSearch = (text: string, source = 'search') => {
    setSuggestVisible(false)

    if (text === '' && placeholder) {
      setSearchText((text = placeholder))
    }

    props.onSearch &&
      props.onSearch({
        text,
        source
      })
  }

  function onSuggestItemClick(text: string | number) {
    setSearchText(text.toString())

    handleSearch(text.toString(), 'suggest')
  }

  function onClick() {
    props.onFieldClick &&
      props.onFieldClick({
        text: getSearchText(true) || placeholder || ''
      })
  }

  /**
   * 处理轮播
   */
  const phInterval = useRef(placeholderInterval)
  phInterval.current = placeholderInterval // 保证下一轮能拿到最新值
  const phTimer = useRef<number>()
  const phIndex = useRef(0)
  const phs = useRef<string[]>([])

  const phsStart = () => {
    phsStop()

    if (phs.current.length > 1) {
      phTimer.current = window.setTimeout(() => {
        phIndex.current = (phIndex.current + 1) % phs.current.length

        setPlaceholder(phs.current[phIndex.current])
        phsStart()
      }, phInterval.current)
    }
  }

  const phsStop = () => {
    clearTimeout(phTimer.current)
    phIndex.current = 0
    phs.current = []
  }

  useEffect(() => {
    phsStop()
    const val = props.placeholders

    if (typeof val === 'string') {
      setPlaceholder(val)
      phs.current = [val]
    } else if (isStringArray(val) && val.length > 0) {
      setPlaceholder(val[phIndex.current])
      phs.current = val

      // 只有多个时候开启轮播
      phsStart()
    } else {
      setPlaceholder('')
    }
  }, [props.placeholders])

  useEffect(() => {
    return () => {
      phsStop()
    }
  }, [])

  const renderSuggestItems = useMemo(
    () =>
      suggestList.map(item => (
        <Cell
          key={item.text}
          label={item.text.toString()}
          className="fx-search_suggest-item"
          clickable
          onClick={() => onSuggestItemClick(item.text)}
        >
          {item.tags?.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Cell>
      )),
    [suggestList, props.onSearch]
  )

  const classes = classNames('fx-search', props.className)
  const innerClasses = classNames(getInnerClasses(props.showCancel))
  const innerStyles = getInnerStyles(props.background)
  const fieldClasses = classNames(getFieldClasses(props.ghost))

  return (
    <div className={classes}>
      <form
        ref={innerRef}
        className={innerClasses}
        style={innerStyles}
        onSubmit={onSearch}
      >
        <Input
          className={fieldClasses}
          placeholder={placeholder}
          type="search"
          disabled={props.readOnly}
          value={getSearchText()}
          focus={props.focus}
          maxlength={props.maxlength}
          showClear
          onInput={onInput}
          onFocus={onFocus}
          onBlur={onBlur}
          onClick={onClick}
          renderPrepend={() => <Icon icon={SearchOutlined} />}
        />
        <button className="fx-search_button">Search</button>
        {props.showCancel ? (
          <Button
            className="fx-search_cancel-button"
            size="large"
            type="default"
            pattern="borderless"
            formType="button"
            ghost={props.ghost}
            transparent={!props.ghost}
            onClick={props.onCancelClick}
          >
            {locale.searchBarCancelText}
          </Button>
        ) : (
          <></>
        )}
      </form>
      {initDropdown ? (
        <Dropdown
          selector={innerRef.current ?? undefined}
          visible={suggestVisible}
          render={({ height }) => (
            <div
              className="fx-search_suggest fx-horizontal-hairline"
              style={getSuggestStyles(height)}
            >
              <div className="fx-search_suggest-list">{renderSuggestItems}</div>
            </div>
          )}
        />
      ) : (
        <></>
      )}
    </div>
  )
}

export default FxSearchBar
