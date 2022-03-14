import type { ActivityIndicatorProps } from './types'

export const getActivityIndicatorClasses = (props: ActivityIndicatorProps) => {
  return ['fx-activity-indicator', { animated: !!props.animated }]
}
