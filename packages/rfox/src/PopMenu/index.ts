import PopMenu from './PopMenu'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { DomSelector, PlacementType } from '../helpers/types'
import type { Option, Detail } from './types'

const showPopMenu = createShowPopup<
  {
    selector: DomSelector
    options: Option[]
    placement?: PlacementType
  },
  PopupSuccessConfirmArgs<Detail>
>({
  apiName: 'showPopMenu',
  component: PopMenu,
  createHook: createConfirmHook
})

export { PopMenu, showPopMenu }

export default PopMenu
