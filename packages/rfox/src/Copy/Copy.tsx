import classNames from 'classnames'
import type { CopyProps } from './types'
import type { FC, OnError } from '../helpers/types'
import { copy } from './util'
import { useRef } from 'react'
import Exception from '../helpers/exception'
import { useLocale } from '../ConfigProvider/context'

const FxCopy: FC<
  CopyProps & {
    onSuccess?: (payload: string) => void
    onError?: OnError
  }
> = props => {
  const inputEl = useRef<HTMLInputElement>(null)

  const { locale } = useLocale()
  const classes = classNames('fx-copy', props.className)

  function onCopy() {
    try {
      copy(inputEl.current as HTMLInputElement)

      props.onSuccess && props.onSuccess(inputEl.current?.value ?? '')
    } catch (error) {
      props.onError && props.onError(new Exception(error))
    }
  }

  return (
    <div className={classes} onClick={onCopy}>
      <input
        type="text"
        value={props.text}
        className="fx-copy_input"
        readOnly
        ref={inputEl}
      />
      <div className="fx-copy_box">{props.children || locale.copyText}</div>
    </div>
  )
}

FxCopy.defaultProps = {
  text: ''
}

export default FxCopy
