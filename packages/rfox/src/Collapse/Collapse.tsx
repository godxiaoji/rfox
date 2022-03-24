import classNames from 'classnames'
import type {
  ActiveName,
  CollapseContextItemRef,
  CollapseContextValue,
  CollapseEmits,
  CollapseProps
} from './types'
import type { FC } from '../helpers/types'
import {
  cloneData,
  isSameArray,
  isStringNumberMix,
  isStringNumberMixArray
} from '../helpers/util'
import { useEffect, useRef } from 'react'
import { useGroup } from '../hooks/use-group'
import { CollapseContext } from './context'

const FxCollapse: FC<CollapseProps & CollapseEmits> = ({
  activeNames = [],
  accordion = false,
  ...props
}) => {
  const classes = classNames('fx-collapse', props.className)

  const activeNames2 = useRef<ActiveName[]>([])

  function onChange(uid: symbol) {
    activeNames2.current = []

    if (accordion) {
      children.current.forEach(child => {
        if (child.uid === uid) {
          child.isActive() &&
            child.getName() &&
            activeNames2.current.push(child.getName())
        } else {
          child.hide()
        }
      })
    } else {
      children.current.forEach(child => {
        child.isActive() &&
          child.getName() &&
          activeNames2.current.push(child.getName())
      })
    }

    props.onChange && props.onChange(cloneData(activeNames2.current))
  }

  const { children, GroupProvider } = useGroup<
    CollapseContextValue,
    CollapseContextItemRef
  >(CollapseContext, {
    onChange,
    hasGroup: true
  })

  function updateValue(val: ActiveName | ActiveName[]) {
    let values = cloneData(
      isStringNumberMixArray(val) ? val : isStringNumberMix(val) ? [val] : []
    )

    if (accordion) {
      // 手风琴模式只保留一个值
      values = values.slice(0, 1)
    }

    if (Array.isArray(values) && isSameArray(values, activeNames2.current)) {
      return
    }

    activeNames2.current = []

    children.current.forEach(child => {
      const childName = child.getName() as ActiveName

      if (childName && values.includes(childName)) {
        activeNames2.current.push(childName)
        child.show()
      } else {
        child.hide()
      }
    })
  }

  useEffect(() => {
    updateValue(activeNames)
  }, [activeNames])

  return (
    <div className={classes}>
      <GroupProvider>{props.children}</GroupProvider>
    </div>
  )
}

export default FxCollapse
