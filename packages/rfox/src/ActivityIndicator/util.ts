import type { ActivityIndicatorProps } from './types'

export const getActivityIndicatorClasses = (animated?: boolean) => {
  return ['fx-activity-indicator', { animated: !!animated }]
}
