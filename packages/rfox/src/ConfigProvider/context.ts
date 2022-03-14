import { LangPack } from '../locale/types'
import { createContext, useContext } from 'react'
import lang from '../locale'

export const defaultValue = {
  locale: lang
}

export const ConfigContext = createContext<{
  locale?: LangPack
}>(defaultValue)

export const useLocale = () => {
  const { locale } = useContext(ConfigContext)

  return { locale } as {
    locale: LangPack
  }
}
