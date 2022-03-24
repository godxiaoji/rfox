import type { LoadMoreProps } from './types'

export const getLoadMoreClasses = (props: LoadMoreProps) => [
  'fx-load-more',
  'fx-horizontal-hairline',
  {
    loading: !!props.loading,
    vertical: !!props.vertical
  }
]
