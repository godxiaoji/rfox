import { useEffect, useRef } from 'react'
import type { FrameTask, FrameOption } from '../helpers/animation'
import { frameTo } from '../helpers/animation'

export function useFrameTask() {
  const task = useRef<FrameTask | null>(null)

  function frameStop() {
    task.current && task.current.stop()
    task.current = null
  }

  function frameStart(options: FrameOption) {
    frameStop()

    task.current = frameTo(options)
  }

  useEffect(() => frameStop, [])

  return { frameStart, frameStop, frameTask: task }
}
