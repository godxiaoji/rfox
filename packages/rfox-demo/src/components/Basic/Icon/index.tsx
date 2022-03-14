import { FxIcon, FxCol, FxRow, FxGroup } from '@/index'
import TaobaoSVG from '../../../assets/icons/taobao.svg?jsx'
import QqSVG from '../../../assets/icons/qq.svg?jsx'
import WechatSVG from '../../../assets/icons/wechat.svg?jsx'
import WeiboSVG from '../../../assets/icons/weibo.svg?jsx'

export default function ExpIcon() {
  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-icon-flex">
          <FxRow gutter={[16, 16]}>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon"
                icon="UpOutlined"
                data-index={1}
              ></FxIcon>
              <span className="exp-icon-text">UpOutlined</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon className="exp-icon-icon" icon="DownOutlined"></FxIcon>
              <span className="exp-icon-text">DownOutlined</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon className="exp-icon-icon" icon="LeftOutlined"></FxIcon>
              <span className="exp-icon-text">LeftOutlined</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon className="exp-icon-icon" icon="RightOutlined"></FxIcon>
              <span className="exp-icon-text">RightOutlined</span>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="大小">
        <div className="exp-icon-flex">
          <FxRow gutter={[16, 16]} align="bottom">
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon"
                size="16"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">16px</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon"
                size="24"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">24px</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon"
                size="32"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">32px</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon"
                size="40"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">40px</span>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="颜色">
        <div className="exp-icon-flex">
          <FxRow gutter={[16, 16]} align="bottom">
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-primary"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">蓝色</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-success"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">绿色</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-warning"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">橙色</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-danger"
                icon="CheckCircleOutlined"
              ></FxIcon>
              <span className="exp-icon-text">红色</span>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
      <FxGroup title="颜色">
        <div className="exp-icon-flex">
          <FxRow gutter={[16, 16]} align="bottom">
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-primary"
                icon={QqSVG}
              ></FxIcon>
              <span className="exp-icon-text">QQ</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-success"
                icon={WechatSVG}
              ></FxIcon>
              <span className="exp-icon-text">微信</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-warning"
                icon={TaobaoSVG}
              ></FxIcon>
              <span className="exp-icon-text">淘宝</span>
            </FxCol>
            <FxCol span="6">
              <FxIcon
                className="exp-icon-icon color-danger"
                icon={WeiboSVG}
              ></FxIcon>
              <span className="exp-icon-text">微博</span>
            </FxCol>
          </FxRow>
        </div>
      </FxGroup>
    </>
  )
}
