import type { Noop } from '../helpers/types'

export interface CountTime {
  time: number
  days: string
  fullHours: string
  thousandsFullHours: string
  hours: string
  minutes: string
  seconds: string
  milliseconds: string
}

export type OnPauseOrResume = (payload: { remainTime: number }) => void
export type OnEnd = (payload: { startTime: number; endTime: number }) => void

export interface CountDownProps {
  initialTiming?: number
  showDays?: boolean
}

export interface CountDownEmits {
  onChange?: (timing: number) => void
  onEnd?: OnEnd
  onPause?: OnPauseOrResume
  onResume?: OnPauseOrResume
}

export interface CountDownRef {
  pause: Noop
  resume: Noop
  reset: (timing: number) => void
}
