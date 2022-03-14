import { CSSProperties } from '../helpers/types'

const FxSpriteSVG: React.FC<{
  iconName: string
  style: CSSProperties
  className: string
}> = props => {
  return (
    <svg style={props.style} className={props.className}>
      <use xlinkHref={'#' + props.iconName}></use>
    </svg>
  )
}

export default FxSpriteSVG
