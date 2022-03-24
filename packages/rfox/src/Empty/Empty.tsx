import classNames from 'classnames'
import type { EmptyProps } from './types'
import type { FC, RenderProp } from '../helpers/types'
import { getImageUrl } from './util'

const FxEmpty: FC<
  EmptyProps & {
    renderImage?: RenderProp
  }
> = props => {
  const classes = classNames('fx-empty', props.className)
  const imageUrl = getImageUrl(props)

  return (
    <div className={classes}>
      {props.renderImage ? (
        props.renderImage()
      ) : (
        <img className="fx-empty_image" src={imageUrl} />
      )}

      {props.description ? (
        <p className="fx-empty_description">{props.description}</p>
      ) : (
        <></>
      )}
      {props.children}
    </div>
  )
}

FxEmpty.defaultProps = {
  description: ''
}

export default FxEmpty
