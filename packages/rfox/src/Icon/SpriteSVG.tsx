import type { SVGAttributes } from 'react'
import type { CSSProperties, VFC } from '../helpers/types'

const FxSpriteSVG: VFC<
  Omit<SVGAttributes<SVGSVGElement>, 'style'> & {
    iconName: string
    style?: CSSProperties
  }
> = ({ iconName, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={'#' + iconName}></use>
    </svg>
  )
}

export default FxSpriteSVG
