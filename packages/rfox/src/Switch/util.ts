import type { CSSProperties } from '../helpers/types'

export const getSwitchClasses = (disabled?: boolean) => {
  return ['fx-switch', { disabled: !!disabled }]
}

export const getSwitchStyles = (props: {
  color?: string
  activeColor?: string
  size?: number | string
}) => {
  const styles: CSSProperties = {}

  props.color && (styles['--fx-color'] = props.color)
  props.activeColor && (styles['--fx-active-color'] = props.activeColor)
  props.size != null &&
    props.size > 0 &&
    (styles['--fx-size'] = parseFloat(props.size as string) + 'px')

  return styles
}
