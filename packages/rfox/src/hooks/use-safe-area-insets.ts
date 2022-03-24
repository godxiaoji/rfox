import safeAreaInsets from 'safe-area-insets'
import { useEffect, useState } from 'react'
import type { SafeAreaInsets } from './types'

export function useSafeAreaInsets(enable = true) {
  const [data, setData] = useState<SafeAreaInsets>({
    support: safeAreaInsets.support,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  })

  function updateSafeAreaInsets() {
    setData(
      enable
        ? {
            support: data.support,
            top: safeAreaInsets.top,
            left: safeAreaInsets.left,
            right: safeAreaInsets.right,
            bottom: safeAreaInsets.bottom
          }
        : {
            support: data.support,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }
    )
  }

  useEffect(updateSafeAreaInsets, [enable])

  useEffect(() => {
    safeAreaInsets.onChange(updateSafeAreaInsets)
    return () => {
      safeAreaInsets.offChange(updateSafeAreaInsets)
    }
  }, [])

  return {
    safeAreaInsets: data
  }
}
