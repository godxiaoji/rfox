import { isObject } from '../helpers/util'
import type { Option } from './types'

export const getOptions = (options?: Option[]) => {
  const newOptions: Option[] = []

  if (Array.isArray(options)) {
    options.forEach(v => {
      newOptions.push(
        isObject(v)
          ? {
              icon: v.icon || undefined,
              name: v.name,
              disabled: !!v.disabled
            }
          : {
              icon: undefined,
              name: v.toString(),
              disabled: false
            }
      )
    })
  }

  return newOptions
}

export const getItemClasses = (option: Option) => {
  return [
    'fx-pop-menu_item',
    'fx-horizontal-hairline',
    { disabled: !!option.disabled, 'has--icon': !!option.icon }
  ]
}
