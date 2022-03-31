import type { VFC } from '../helpers/types'
import type { SpriteSVGProps } from './types'

const FxSpriteSVG: VFC<SpriteSVGProps> = ({ iconName, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={'#' + iconName}></use>
    </svg>
  )
}

export default FxSpriteSVG
