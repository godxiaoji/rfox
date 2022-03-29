export interface StickyProps {
  containSelector?: HTMLElement
  offsetTop?: number | string
  offsetBottom?: number | string
  disabled?: boolean
}

export interface ResetContainer {
  (selector?: HTMLElement): void
}

export interface StickyRef {
  resetContainer: ResetContainer
}
