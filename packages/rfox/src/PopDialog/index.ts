import PopDialog from './PopDialog'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { PlacementType, EmptyObject, Selector } from '../helpers/types'

const showPopDialog = createShowPopup<
  {
    selector: Selector
    content: string
  } & Partial<{
    placement: PlacementType
    showCancel: boolean
    cancelText: string
    confirmText: string
  }>,
  PopupSuccessConfirmArgs<EmptyObject>
>({
  apiName: 'showPopDialog',
  component: PopDialog,
  createHook: createConfirmHook
})

export { PopDialog, showPopDialog }

export default PopDialog
