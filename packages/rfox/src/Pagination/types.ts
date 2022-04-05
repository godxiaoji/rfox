export type OnChange = (current: number) => void

export interface PaginationProps {
  current?: number | string
  total: number | string
}
