import { getNumber, isNumber } from '../helpers/util'
import { getEnumsValue } from '../helpers/validator'
import type {
  AvatarGroupProps,
  AvatarProps,
  Gender,
  ShapeType,
  SizeType,
  UserSizeType
} from './types'
import { simpleNumber } from '../helpers/digital-conversion'
import { CSSProperties } from '../helpers/types'
import { getColorObject } from '../helpers/color'
import type { BadgeProps } from '../Badge/types'
import { handleBadge } from '../Badge/util'

export const SIZE_TYPES: SizeType[] = ['middle', 'large', 'small']

export const AVATAR_SHAPE_TYPES: ShapeType[] = ['circle', 'square']

export const GENDER_TYPES: Gender[] = ['woman', 'man']

export const getAvatarSize = (
  props: AvatarProps,
  parentProps?: AvatarGroupProps
) => {
  const size = parentProps?.size ?? props.size
  return isNumber(size) ? size : getEnumsValue(SIZE_TYPES, size)
}

export const getAvatarShape = (props: AvatarProps, hasGroup?: boolean) =>
  getEnumsValue(AVATAR_SHAPE_TYPES, hasGroup ? 'circle' : props.shape)

export const getGroupClasses = (count: number) => [
  'fx-avatar-group',
  'count--' + (count || 1)
]

export const getGroupCountClasses = (showCount: string) => [
  'fx-avatar-group_count-number',
  'size--' + showCount.length
]

export const getShowCount = (count?: number | string) =>
  simpleNumber(getNumber(count))

export const getAvatarClasses = (
  props: AvatarProps,
  size: UserSizeType,
  shape: ShapeType
) => [
  'fx-avatar',
  'size--' + size,
  'shape--' + shape,
  {
    'gender-man': props.gender === 'man',
    'gender-woman': props.gender === 'woman'
  }
]

export const getAvatarStyles = (props: AvatarProps, size: UserSizeType) => {
  const styles: CSSProperties = {}

  if (isNumber(size)) {
    styles.width = size + 'px'
    styles.height = size + 'px'
    styles.fontSize = size / 2 + 'px'
  }

  const colorObj = getColorObject(props.color)
  if (colorObj.hasColor) {
    styles[`--fx-color`] = colorObj.varBackgroundColor
    styles[`--fx-front-color`] = colorObj.varFrontColor
  }

  return styles
}

export const getBadgeProps = (props: AvatarProps) => {
  let badge: BadgeProps

  if (props.gender && GENDER_TYPES.includes(props.gender)) {
    badge = {
      content: 1
    }
  } else {
    badge = handleBadge(props.badge)
  }

  badge.offset = props.shape === 'circle' ? [-5, 5] : [0, 0]

  return badge
}
