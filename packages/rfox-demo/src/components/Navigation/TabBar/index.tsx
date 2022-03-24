import { FxTabBar, FxFixed, FxGroup } from '@/index'
import { baseList, badgeList, imageList } from './data'
import TaobaoSvg from '../../../assets/icons/taobao.svg?jsx'
import QqSvg from '../../../assets/icons/qq.svg?jsx'
import WechatSvg from '../../../assets/icons/wechat.svg?jsx'
import WeiboSvg from '../../../assets/icons/weibo.svg?jsx'

const customIconList = [
  {
    value: 'wechat',
    label: '微信',
    icon: WechatSvg
  },
  {
    value: 'qq',
    label: 'QQ',
    icon: QqSvg
  },
  {
    value: 'weibo',
    label: '微博',
    icon: WeiboSvg
  },
  {
    value: 'taobao',
    label: '淘宝',
    icon: TaobaoSvg
  }
]

export default function ExpTabBar() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxTabBar options={baseList} />
      </FxGroup>
      <FxGroup title="徽标">
        <FxTabBar options={badgeList} />
      </FxGroup>
      <FxGroup title="自定义图标">
        <FxTabBar options={customIconList} />
      </FxGroup>
      <FxGroup title="自定义颜色">
        <FxTabBar
          color="#8B8DB8"
          activeColor="#ffffff"
          style={{ backgroundColor: '#6667ab' }}
          options={baseList}
        />
      </FxGroup>
      <FxGroup title="自定义图片（icon=URL）">
        <FxTabBar className="exp-tabBar-custom" options={imageList} />
      </FxGroup>
      <FxGroup title="配合 Fixed 实现置底">
        <FxFixed>
          <FxTabBar options={baseList} />
        </FxFixed>
      </FxGroup>
    </>
  )
}
