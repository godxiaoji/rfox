import type { CSSProperties } from '../helpers/types'
import type { ModalProps } from './types'

export const getModalBoxStyles = (props: ModalProps) => {
  return {
    width: props.width
  } as CSSProperties
}
