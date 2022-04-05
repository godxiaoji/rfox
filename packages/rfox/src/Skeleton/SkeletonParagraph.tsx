import classNames from 'classnames'
import type { SkeletonParagraphProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import {
  getParagraphRowList,
  getParagraphClasses,
  PARAGRAPH_DEFAULT_ROW
} from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonParagraph: VFC<SkeletonParagraphProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(
    getParagraphClasses(props, consumer),
    props.className
  )

  const renderRowList = () => {
    return getParagraphRowList(props, consumer).map(v => {
      return <li key={v}></li>
    })
  }

  return <ul className={classes}>{renderRowList()}</ul>
}

FxSkeletonParagraph.defaultProps = {
  ...skeletonDefaultProps,
  row: PARAGRAPH_DEFAULT_ROW
}

export default FxSkeletonParagraph
