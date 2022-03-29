import type { DatePickerEmits, DatePickerProps } from './types'
import type { FC } from '../helpers/types'
import { Picker } from '../Picker'
import { useHandlers } from './use-date-picker'

const FxDatePicker: FC<DatePickerProps & DatePickerEmits> = ({
  formatTemplate,
  initialMode,
  minDate,
  maxDate,
  filter,
  ...props
}) => {
  const { PickerProvider } = useHandlers({
    formatTemplate,
    initialMode,
    minDate,
    maxDate,
    filter
  })

  return (
    <PickerProvider>
      <Picker {...props} options={[]} />
    </PickerProvider>
  )
}

export default FxDatePicker
