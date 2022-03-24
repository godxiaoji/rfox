import { createPortal } from 'react-dom'
import type { PopoverEmits, PopoverProps } from './types'
import type { FRFC } from '../helpers/types'
import type { PopupRef } from '../popup/types'
import { forwardRef } from 'react'
import { usePopover } from './use-popover'

const FxPopover: FRFC<PopupRef, PopoverProps & PopoverEmits> = (
  { content = '', ...props },
  ref
) => {
  const { PopoverWrapper } = usePopover(props, ref)

  return createPortal(
    <PopoverWrapper>
      {props.children || <div className="fx-popover_text">{content}</div>}
    </PopoverWrapper>,
    document.body
  )
}

export default forwardRef(FxPopover)
