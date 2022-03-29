import _Cascader from './Cascader'
import CascaderPopup from './CascaderPopup'
import CascaderView from './CascaderView'
import { createConfirmHook, createShowPopup } from '../popup/api'
import type { PopupSuccessConfirmArgs } from '../popup/types'
import type { SelectorDetail } from '../SelectorField/types'
import type { ShowCascaderOptions } from '../Cascader/types'

const showCascader = createShowPopup<
  ShowCascaderOptions,
  PopupSuccessConfirmArgs<SelectorDetail>
>({
  apiName: 'showCascader',
  component: CascaderPopup,
  createHook: createConfirmHook
})

const Cascader = Object.assign(_Cascader, {
  Popup: CascaderPopup,
  View: CascaderView
})

export { Cascader, CascaderPopup, CascaderView, showCascader }

export default Cascader
