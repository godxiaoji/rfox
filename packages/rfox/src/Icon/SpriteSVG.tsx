import type { SpriteSVGProps } from './types'

const FxSpriteSVG: React.FC<SpriteSVGProps> = ({ iconName, ...props }) => {
  return (
    <svg {...props}>
      <use xlinkHref={'#' + iconName}></use>
    </svg>
  )
}

export default FxSpriteSVG
