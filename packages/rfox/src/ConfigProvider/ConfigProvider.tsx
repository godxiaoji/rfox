import type { ConfigProviderProps } from './types'
import { ConfigContext, defaultValue } from './context'
import type { FC } from '../helpers/types'

const FxConfigProvider: FC<ConfigProviderProps> = props => {
  return (
    <ConfigContext.Provider
      value={{
        locale: props.locale ?? defaultValue.locale
      }}
    >
      {props.children}
    </ConfigContext.Provider>
  )
}

export default FxConfigProvider
