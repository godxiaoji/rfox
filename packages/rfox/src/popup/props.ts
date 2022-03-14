import type { OnCancel, OnVisibleStateChange, PopupProps } from './types'
import { VISIBLE_STATE_TYPES } from './util'

export const popupEmits: {
  'visible-state-change': OnVisibleStateChange
  'update:visible': (visible: boolean) => boolean
  cancel: OnCancel
  confirm: (payload: any) => boolean
} = {
  'visible-state-change': payload =>
    payload && VISIBLE_STATE_TYPES.includes(payload.state),
  'update:visible': visible => typeof visible === 'boolean',
  cancel: payload => payload && typeof payload.source === 'string',
  confirm: payload => !!payload
}

export const popupExtendProps = {
  visible: {
    type: Boolean,
    default: false
  }
}

export const popupDefaultProps: PopupProps = {
  visible: false,
  maskClosable: true
}
