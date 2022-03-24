import type { Context, FC } from 'react'

export function withProvider<T>(WrappedContext: Context<T>, value: T) {
  const Provider: FC = props => {
    return <WrappedContext.Provider value={value} {...props} />
  }

  return Provider
}
