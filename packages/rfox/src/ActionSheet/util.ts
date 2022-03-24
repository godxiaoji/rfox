import { cloneData, isObject } from '../helpers/util'
import { Option } from './types'

export const getOptions = (options?: Option[]) => {
  const newOptions: Option[] = []

  if (Array.isArray(options)) {
    options.forEach(v => {
      newOptions.push(
        isObject(v)
          ? cloneData(v)
          : {
              name: v.toString()
            }
      )
    })
  }

  return newOptions
}

export const getItemClasses = (option: Option) => {
  return [
    'fx-action-sheet_item',
    'fx-horizontal-hairline',
    { disabled: !!option.disabled, highlight: !!option.highlight }
  ]
}
