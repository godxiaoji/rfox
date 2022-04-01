import { PLACEMENT_TYPES } from '../helpers/constants'
import type { CSSProperties } from '../helpers/types'
import { getEnumsValue } from '../helpers/validator'
import type { SafeAreaInsets } from '../hooks/types'
import type { DrawerProps } from './types'

export const getDrawerClass = (showMask: boolean) => [
  'fx-drawer',
  { 'no--mask': !showMask }
]

export const getDrawerInnerStyles = (
  props: DrawerProps,
  safeAreaInsets: SafeAreaInsets
) => {
  const placement = getEnumsValue(PLACEMENT_TYPES, props.placement)

  let left = safeAreaInsets.left
  let top = safeAreaInsets.top
  let right = safeAreaInsets.right
  let bottom = safeAreaInsets.bottom

  if (placement === 'top') {
    bottom = 0
  } else if (placement === 'bottom') {
    top = 0
  } else if (placement === 'left') {
    right = 0
  } else if (placement === 'right') {
    left = 0
  }

  return {
    padding: top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px'
  } as CSSProperties
}

export const getDrawerInnerClasses = (
  props: DrawerProps,
  hasHeader: boolean
) => [
  'fx-drawer_inner',
  'fx-horizontal-hairline',
  'placement--' + getEnumsValue(PLACEMENT_TYPES, props.placement),
  {
    'has--header': hasHeader
  }
]
