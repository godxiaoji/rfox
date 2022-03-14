import type { CSSProperties } from '../helpers/types'
import type { SVGComponent } from './types'

export function withIcon(WrappedComponent: SVGComponent) {
  return function (props: { style: CSSProperties; className: string }) {
    return <WrappedComponent className={props.className} style={props.style} />
  }
}
