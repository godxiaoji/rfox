import type { CSSProperties } from '../helpers/types'
import { rangeInteger } from '../helpers/util'
import type { ProgressProps } from './types'

export const getProgressClasses = (props: ProgressProps) => [
  'fx-progress',
  { 'fixed-bar': !!props.fixedBar }
]

export const getProgressTrackClasses = (props: ProgressProps) => [
  'fx-progress_track',
  { animated: !!props.animated }
]

export const getProgressTrackStyles = (progress: string) => {
  return { width: progress } as CSSProperties
}

export const getProgressStyles = (props: ProgressProps) => {
  const styles: CSSProperties = {}

  props.color && (styles['--fx-color'] = props.color)

  return styles
}

export const getProgress = (percentage: number | string) =>
  rangeInteger(percentage, 0, 100) + '%'
