import { useEffect, useRef } from 'react'
import type { Noop } from '../helpers/types'

export function useMounted({
  onMounted,
  onBeforeUnmount
}: {
  onMounted?: Noop
  onBeforeUnmount?: Noop
} = {}) {
  const mounted = useRef(false)

  useEffect(() => {
    mounted.current = true

    onMounted && onMounted()

    return () => {
      onBeforeUnmount && onBeforeUnmount()

      mounted.current = false
    }
  }, [])

  return {
    mounted
  }
}
