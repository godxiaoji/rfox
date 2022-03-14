import type { CSSProperties } from '../helpers/types'
import { camelCase2KebabCase, getNumber } from '../helpers/util'
import { getEnumsValue } from '../helpers/validator'
import type { ImageProps, Mode } from './types'

export const MODE_NAMES: Mode[] = [
  'scaleToFill',
  'aspectFit',
  'aspectFill',
  'widthFix',
  'top',
  'bottom',
  'left',
  'right',
  'top left',
  'top right',
  'bottom left',
  'bottom right'
]

export const getModeClassName = (mode?: Mode) => {
  return (
    'mode--' +
    camelCase2KebabCase(getEnumsValue(MODE_NAMES, mode)).replace(/\s+/g, '-')
  )
}

export const getImageRatioStyles = (props: ImageProps) => {
  return {
    paddingTop: getNumber(props.aspectRatio) * 100 + '%'
  } as CSSProperties
}
