import { Dispatch, useRef } from 'react'
import { useState } from 'react'

export function useStableState<S>(
  initialState: S | (() => S)
): [(timely?: boolean) => S, Dispatch<S>] {
  const _initialState =
    typeof initialState === 'function'
      ? (initialState as () => S)()
      : initialState

  const state = useState(_initialState)
  const ref = useRef(_initialState)

  const getter = (timely = false) => {
    return timely ? ref.current : state[0]
  }

  const setter: Dispatch<S> = value => {
    state[1](value)
    ref.current = value
  }

  return [getter, setter]
}
