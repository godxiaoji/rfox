import { isMobile } from '../helpers/device'
import {
  FxEventElement,
  FxEventCallback,
  LongPressEventCallback
} from './types'

type EventTargetWithUID = {
  _euid: number
} & FxEventElement

let euid = 0

const callbacks: Record<string, Record<number, FxEventCallback[]>> = {}

// window.callbacks = callbacks

function onEvent(e: Event) {
  const currentTarget = e.currentTarget as EventTargetWithUID
  const type = e.type
  const uid = currentTarget._euid

  if (uid && callbacks[type] && callbacks[type][uid]) {
    const currentCallbacks = callbacks[type][uid]

    const $el = (
      currentTarget === document ? document.documentElement : currentTarget
    ) as HTMLElement

    currentCallbacks.forEach((callback: FxEventCallback) => {
      callback.call(callback, e, $el)
    })
  }
}

export function addEvent(
  type: string,
  callback: FxEventCallback,
  $el: FxEventElement = document
) {
  if (!(typeof callback === 'function') || !type) {
    return
  }

  const target = (
    $el === document.documentElement ? document : $el
  ) as EventTargetWithUID

  if (!target._euid) {
    target._euid = ++euid
  }
  const uid = target._euid

  if (!callbacks[type]) {
    callbacks[type] = {}
  }
  if (!callbacks[type][uid]) {
    callbacks[type][uid] = []
    target.addEventListener(type, onEvent, false)
  }

  callbacks[type][uid].push(callback)
}

export function removeEvent(
  type: string,
  callback: FxEventCallback,
  $el: FxEventElement = document
) {
  const target = (
    $el === document.documentElement ? document : $el
  ) as EventTargetWithUID

  const uid = target._euid

  if (callbacks[type] && callbacks[type][uid]) {
    const currentCallbacks = callbacks[type][uid]
    let index = -1

    for (let i = 0; i < currentCallbacks.length; i++) {
      if (currentCallbacks[i] == callback) {
        index = i
        break
      }
    }

    if (index > -1) {
      currentCallbacks.splice(index, 1)

      if (currentCallbacks.length === 0) {
        target.removeEventListener(type, onEvent, false)
        delete callbacks[type][uid]
      }
    }
  }
}

let passiveSupported = false
try {
  const options = Object.defineProperty({}, 'passive', {
    get: function () {
      return (passiveSupported = true)
    }
  })
  window.addEventListener(
    'test' as 'click',
    function () {
      // empty
    },
    options
  )
} catch (err) {
  // empty
}

const touchstart = isMobile ? 'touchstart' : 'mousedown'
const touchmove = isMobile ? 'touchmove' : 'mousemove'
const touchend = isMobile ? 'touchend' : 'mouseup'
const touchOptions = passiveSupported ? { passive: false } : false

function getStretchOffset(offset: number) {
  return Math.ceil(offset / Math.log(Math.abs(offset)))
}

export const touchEvent = {
  touchstart,
  touchmove,
  touchend,
  getStretchOffset,
  addListeners($el: HTMLElement | Document, object: EventListenerObject) {
    $el.addEventListener(touchstart, object, touchOptions)
    $el.addEventListener(touchmove, object, touchOptions)
    $el.addEventListener(touchend, object, touchOptions)

    if (touchend === 'mouseup') {
      $el.addEventListener('mouseleave', object, touchOptions)
    }
  },
  removeListeners($el: HTMLElement | Document, object: EventListenerObject) {
    $el.removeEventListener(touchstart, object, false)
    $el.removeEventListener(touchmove, object, false)
    $el.removeEventListener(touchend, object, false)

    if (touchend === 'mouseup') {
      $el.removeEventListener('mouseleave', object, false)
    }
  },
  getTouch(e: Event) {
    const { pageX, pageY, clientX, clientY } =
      touchstart === 'touchstart'
        ? (e as TouchEvent).targetTouches[0] || {
            pageX: 0,
            pageY: 0,
            clientX: 0,
            clientY: 0
          }
        : (e as MouseEvent)

    return {
      pageX,
      pageY,
      clientX,
      clientY
    }
  }
}

interface LongPressCoords {
  startX: number
  startY: number
  timeStamp: number
}

/**
 * 绑定长按事件
 * @param {Element} $el 绑定的元素
 * @param {Function} callback 回调函数
 */
export function addLongPressEvent(
  $el: HTMLElement,
  callback: LongPressEventCallback
) {
  let coords: LongPressCoords | null

  const object = {
    /**
     * 处理事件
     * @param e 事件
     */
    handleEvent(e: Event) {
      switch (e.type) {
        case touchstart:
          this.onStart(e)
          break
        case touchmove:
          this.onMove(e)
          break
        case touchend:
          this.onEnd(e)
          break
        case 'mouseleave':
          this.onEnd(e)
          break
        default:
          break
      }
    },
    onStart(e: Event) {
      const { pageX, pageY } = touchEvent.getTouch(e)

      coords = {
        startX: pageX,
        startY: pageY,
        timeStamp: e.timeStamp
      }
    },
    onMove(e: Event) {
      if (!coords) {
        return
      }

      const { pageX, pageY } = touchEvent.getTouch(e)

      if (
        Math.abs(pageX - coords.startX) >= 10 ||
        Math.abs(pageY - coords.startY) >= 10
      ) {
        coords = null
      }
    },
    onEnd(e: Event) {
      if (coords) {
        typeof callback === 'function' &&
          callback({
            type: e.timeStamp - coords.timeStamp >= 800 ? 'long-press' : 'click'
          })
      }

      coords = null
    }
  }

  touchEvent.addListeners($el, object)

  return function removeLongPressEvent() {
    touchEvent.removeListeners($el, object)
  }
}
