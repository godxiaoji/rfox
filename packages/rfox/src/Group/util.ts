import type { GroupProps } from './types'

export function getGroupClasses(props: GroupProps) {
  return [
    ['fx-group', 'fx-horizontal-hairline'],
    { 'strong-header': !!props.strongHeader }
  ]
}
