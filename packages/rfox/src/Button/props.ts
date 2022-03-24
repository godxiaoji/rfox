import { SIZE_TYPES } from '../helpers/constants'
import { getEnumsValue } from '../helpers/validator'
import type { ButtonGroupProps } from './types'
import { BUTTON_PATTERN_TYPES, BUTTON_SHAPE_TYPES } from './util'

export const createDefaultProps = (props: ButtonGroupProps = {}) => {
  return {
    size: getEnumsValue(SIZE_TYPES, props.size),
    pattern: getEnumsValue(BUTTON_PATTERN_TYPES, props.pattern),
    shape: getEnumsValue(BUTTON_SHAPE_TYPES, props.shape)
  }
}
