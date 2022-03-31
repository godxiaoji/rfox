import * as React from 'react'
import { isFragment } from 'react-is'

export const getFilteredChildren = (
  children: React.ReactNode | undefined,
  displayName: string
) => {
  const ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any) => {
    if (child == null) {
      return
    }

    if (Array.isArray(child)) {
      return
    }

    if (child.type?.displayName === displayName) {
      ret.push(child)
    }
  })

  return ret
}

export function toArray(children: React.ReactNode): React.ReactElement[] {
  let ret: React.ReactElement[] = []

  React.Children.forEach(children, (child: any) => {
    if (child === undefined || child === null) {
      return
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child))
    } else if (isFragment(child) && child.props) {
      ret = ret.concat(toArray(child.props.children))
    } else {
      ret.push(child)
    }
  })

  return ret
}
