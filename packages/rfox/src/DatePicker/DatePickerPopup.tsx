import type { DatePickerPopupEmits, DatePickerPopupProps } from './types'
import type { FRVFC } from '../helpers/types'
import { PickerPopup } from '../Picker'
import { useHandlers } from './use-date-picker'
import type { PickerPopupRef } from '../Picker/types'
import { forwardRef } from 'react'

const FxDatePickerPopup: FRVFC<
  PickerPopupRef,
  DatePickerPopupProps & DatePickerPopupEmits
> = (
  { formatTemplate, initialMode, minDate, maxDate, filter, ...props },
  ref
) => {
  const { PickerProvider } = useHandlers({
    formatTemplate,
    initialMode,
    minDate,
    maxDate,
    filter
  })

  return (
    <PickerProvider>
      <PickerPopup {...props} options={[]} ref={ref} />
    </PickerProvider>
  )
}

export default forwardRef(FxDatePickerPopup)
