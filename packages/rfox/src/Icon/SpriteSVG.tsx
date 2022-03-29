import type { FC } from '../helpers/types'
import type { SpriteSVGProps } from './types'

const FxSpriteSVG: FC<SpriteSVGProps> = ({ iconName, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={'#' + iconName}></use>
    </svg>
  )
}

export default FxSpriteSVG
