import classNames from 'classnames'
import { forwardRef, useImperativeHandle, useMemo, useRef } from 'react'
import type {
  NumberKeyboardEmits,
  NumberKeyboardProps,
  OnConfirm
} from './types'
import type { FRVFC } from '../helpers/types'
import { getBodyClasses, isShowHeaderConfirm } from './util'
import { Drawer } from '../Drawer'
import { Icon } from '../Icon'
import { useLocale } from '../ConfigProvider/context'
import type { OnCancel, OnVisibleStateChange, PopupRef } from '../popup/types'
import type { NumberKeyboardItem } from './types'
import BackspaceOutlined from '../Icon/icons/BackspaceOutlined'
import KeyboardOutlined from '../Icon/icons/KeyboardOutlined'
import { stringMix2StringArray } from '../helpers/util'

const backspaceItem: NumberKeyboardItem = {
  text: 'backspace',
  type: 'backspace',
  icon: BackspaceOutlined
}

const FxNumberKeyboard: FRVFC<
  PopupRef,
  NumberKeyboardProps & NumberKeyboardEmits
> = ({ onUpdateValue, ...props }, ref) => {
  const { locale } = useLocale()
  const popupRef = useRef<PopupRef>(null)
  const valueCache = useRef('')

  const showHeaderConfirm = isShowHeaderConfirm({
    type: props.type,
    customKey: props.customKey
  })
  const classes = classNames('fx-number-keyboard', props.className)
  const bodyClasses = classNames(
    getBodyClasses({ type: props.type, title: props.title }, showHeaderConfirm)
  )

  const onVisibleStateChange2: OnVisibleStateChange = e => {
    props.onVisibleStateChange && props.onVisibleStateChange(e)

    if (e.state === 'show') {
      valueCache.current =
        (typeof props.value === 'string' && props.value) || ''
    }
  }

  function onNumberClick(item: NumberKeyboardItem) {
    if (item.type === 'text') {
      valueCache.current += item.text

      props.onInput && props.onInput(item.text)
      onUpdateValue && onUpdateValue(valueCache.current)
    } else if (item.type === 'backspace') {
      const deleteKey = valueCache.current.substring(
        valueCache.current.length - 1
      )
      valueCache.current = valueCache.current.substring(
        0,
        valueCache.current.length - 1
      )

      props.onDelete &&
        props.onDelete({
          deleteKey
        })
      onUpdateValue && onUpdateValue(valueCache.current)
    } else if (item.type === 'confirm') {
      popupRef.current?.customConfirm({})
    }
  }

  function onConfirmClick() {
    popupRef.current?.customConfirm({})
  }

  const onConfirm: OnConfirm = res => {
    props.onConfirm && props.onConfirm(res)

    close('confirm')
  }

  const onCancel: OnCancel = res => {
    props.onCancel && props.onCancel(res)

    close(res.source)
  }

  function close(source: string) {
    props.onChange && props.onChange(valueCache.current)
    valueCache.current = ''

    props.onClose &&
      props.onClose({
        source
      })
  }

  const renderItems = useMemo(() => {
    const list: NumberKeyboardItem[] = []

    for (let i = 1; i <= 9; i++) {
      list.push({
        text: i.toString(),
        type: 'text'
      })
    }

    const customKey = stringMix2StringArray(props.customKey)

    if (props.type === 'rightColumn') {
      if (customKey.length > 1) {
        list.push(
          {
            text: customKey[0],
            type: 'text'
          },
          { text: '0', type: 'text' },
          {
            text: customKey[1],
            type: 'text'
          }
        )
      } else if (customKey.length > 0) {
        list.push(
          { text: '0', type: 'text', span: 2 },
          {
            text: customKey[0],
            type: 'text'
          }
        )
      } else {
        list.push({ text: '0', type: 'text', span: 3 })
      }
    } else {
      if (customKey.length > 0) {
        list.push(
          {
            text: customKey[0],
            type: 'text'
          },
          { text: '0', type: 'text' }
        )
      } else {
        list.push(
          {
            text: 'confirm',
            type: 'confirm',
            icon: KeyboardOutlined
          },
          { text: '0', type: 'text' }
        )
      }

      list.push(backspaceItem)
    }

    return list.map((item, index) => (
      <li
        className={classNames(
          'fx-number-keyboard_item',
          'span-' + (item.span || 1)
        )}
        key={index}
      >
        <div
          className="fx-number-keyboard_button"
          onClick={() => onNumberClick(item)}
        >
          {item.icon ? <Icon icon={item.icon} /> : <>{item.text}</>}
        </div>
      </li>
    ))
  }, [props.customKey])

  useImperativeHandle(ref, () => popupRef.current as PopupRef, [])

  return (
    <Drawer
      ref={popupRef}
      className={classes}
      title={props.title}
      placement="bottom"
      showMask={false}
      visible={props.visible}
      onConfirm={onConfirm}
      onCancel={onCancel}
      onVisibleStateChange={onVisibleStateChange2}
      onUpdateVisible={props.onUpdateVisible}
    >
      <div className={bodyClasses}>
        <ul className="fx-number-keyboard_list">{renderItems}</ul>
        {props.type === 'rightColumn' ? (
          <div className="fx-number-keyboard_right-column">
            <div className="fx-number-keyboard_backspace">
              <div
                className="fx-number-keyboard_button"
                onClick={() => onNumberClick(backspaceItem)}
              >
                <Icon icon={BackspaceOutlined} />
              </div>
            </div>
            <div className="fx-number-keyboard_confirm">
              <div
                className="fx-number-keyboard_confirm-button"
                onClick={onConfirmClick}
              >
                {locale.numberKeyboardConfirmText}
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Drawer>
  )
}

export default forwardRef(FxNumberKeyboard)
