export type ID = string | number

export type Item = {
  id: ID
  draggable?: boolean
}

export type OnDelete = (payload: {
  type: string
  index: number
  item: {
    id: ID
  }
}) => void

export interface OrderProps {
  items: Item[]
  columnNumber?: number | string
  deletable?: boolean
  aspectRatio?: number | string
}

export interface OrderEmits {
  onUpdateItems: (items: Item[]) => void
  onDelete?: OnDelete
}

export interface Position {
  id: ID
  draggable: boolean
  top: number
  left: number
  deleted: boolean
}
