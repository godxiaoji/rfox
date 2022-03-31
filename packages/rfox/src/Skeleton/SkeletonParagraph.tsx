import classNames from 'classnames'
import type { SkeletonParagraphProps } from './types'
import type { VFC } from '../helpers/types'
import { useContext } from 'react'
import { SkeletonContext } from './context'
import {
  getParagraphRowList,
  getSkeletonParagraphClasses,
  paragraphDefaultRow
} from './util'
import { skeletonDefaultProps } from './props'

const FxSkeletonParagraph: VFC<SkeletonParagraphProps> = props => {
  const consumer = useContext(SkeletonContext)
  const classes = classNames(
    getSkeletonParagraphClasses(props, consumer),
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
  row: paragraphDefaultRow
}

export default FxSkeletonParagraph
