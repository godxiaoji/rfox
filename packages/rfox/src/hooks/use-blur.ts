import {
  addEvent as _addEvent,
  removeEvent as _removeEvent
} from '../helpers/events'
import { FxEventCallback } from '../helpers/types'
import { useEffect, useReducer } from 'react'

export function useBlur(callback: FxEventCallback) {
  const reducer = useReducer((state: boolean, action: string) => {
    if (action === 'add') {
      if (!state) {
        _addEvent('click', callback, document)
      }
      return true
    } else {
      if (state) {
        _removeEvent('click', callback, document)
      }
      return false
    }
  }, false)

  const addEvent = () => reducer[1]('add')
  const removeEvent = () => reducer[1]('remove')

  useEffect(() => {
    return removeEvent
  })

  return { addEvent, removeEvent }
}
