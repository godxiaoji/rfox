import PopMenu from './PopMenu'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { Selector, PlacementType } from '../helpers/types'
import type { Option, Detail } from './types'

const showPopMenu = createShowPopup<
  {
    selector: Selector
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
