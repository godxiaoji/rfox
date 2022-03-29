export type OnChange = (payload: number) => void

export interface PaginationProps {
  current?: number | string // 当前页码
  total: number | string // 总共页码
}
