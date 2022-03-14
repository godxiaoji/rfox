import type { CSSProperties } from '../helpers/types'
import type { IconProps } from './types'

export const getIconStyles = (props: IconProps) => {
  const styles: CSSProperties = {}

  props.color && (styles['--fx-icon-color'] = props.color)

  if (props.width && props.width > 0 && props.height && props.height > 0) {
    styles.width = props.width + 'px'
    styles.height = props.height + 'px'
  } else if (props.size && props.size > 0) {
    styles['--fx-icon-size'] = props.size + 'px'
  }

  return styles
}
