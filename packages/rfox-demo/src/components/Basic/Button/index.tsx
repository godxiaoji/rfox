import { FxButton, FxGroup } from '@/index'

export default function ExpButton() {
  return (
    <>
      <FxGroup title="标准 & 渐变 & 实线 & 虚线 & 无边框">
        <ul className="exp-button-group">
          <li>
            <FxButton type="default">默认</FxButton>
            <FxButton type="primary">主要</FxButton>
            <FxButton type="success">成功</FxButton>
            <FxButton type="warning">警告</FxButton>
            <FxButton type="danger">危险</FxButton>
          </li>
          <li>
            <FxButton type="default" pattern="gradient">
              默认
            </FxButton>
            <FxButton type="primary" pattern="gradient">
              主要
            </FxButton>
            <FxButton type="success" pattern="gradient">
              成功
            </FxButton>
            <FxButton type="warning" pattern="gradient">
              警告
            </FxButton>
            <FxButton type="danger" pattern="gradient">
              危险
            </FxButton>
          </li>
          <li>
            <FxButton type="default" pattern="solid">
              默认
            </FxButton>
            <FxButton type="primary" pattern="solid">
              主要
            </FxButton>
            <FxButton type="success" pattern="solid">
              成功
            </FxButton>
            <FxButton type="warning" pattern="solid">
              警告
            </FxButton>
            <FxButton type="danger" pattern="solid">
              危险
            </FxButton>
          </li>
          <li>
            <FxButton type="default" pattern="dashed">
              默认
            </FxButton>
            <FxButton type="primary" pattern="dashed">
              主要
            </FxButton>
            <FxButton type="success" pattern="dashed">
              成功
            </FxButton>
            <FxButton type="warning" pattern="dashed">
              警告
            </FxButton>
            <FxButton type="danger" pattern="dashed">
              危险
            </FxButton>
          </li>
          <li>
            <FxButton type="default" pattern="borderless">
              默认
            </FxButton>
            <FxButton type="primary" pattern="borderless">
              主要
            </FxButton>
            <FxButton type="success" pattern="borderless">
              成功
            </FxButton>
            <FxButton type="warning" pattern="borderless">
              警告
            </FxButton>
            <FxButton type="danger" pattern="borderless">
              危险
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="幽灵按钮">
        <ul className="exp-button-group" style={{ background: '#000' }}>
          <li>
            <FxButton type="default" ghost>
              默认
            </FxButton>
          </li>
          <li>
            <FxButton type="primary" ghost>
              主要
            </FxButton>
            <FxButton type="success" ghost>
              成功
            </FxButton>
            <FxButton type="warning" ghost>
              警告
            </FxButton>
            <FxButton type="danger" ghost>
              危险
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="自定义颜色（长春花色#6667AB/莲花色#E2C0BF）">
        <ul className="exp-button-group">
          <li>
            <FxButton color="#6667AB">深色</FxButton>
            <FxButton color="#6667AB" pattern="gradient">
              渐变
            </FxButton>
            <FxButton color="#E2C0BF">浅色</FxButton>
          </li>
          <li>
            <FxButton color="#6667AB" pattern="solid">
              实线
            </FxButton>
            <FxButton color="#6667AB" pattern="dashed">
              虚线
            </FxButton>
            <FxButton color="#6667AB" pattern="borderless">
              无边框
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="禁用">
        <ul className="exp-button-group">
          <li>
            <FxButton type="default" disabled>
              默认
            </FxButton>
            <FxButton type="primary" pattern="solid" disabled>
              实线
            </FxButton>
            <FxButton type="primary" pattern="dashed" disabled>
              虚线
            </FxButton>
          </li>
          <li>
            <FxButton type="primary" disabled>
              主要
            </FxButton>
            <FxButton type="success" disabled>
              成功
            </FxButton>
            <FxButton type="warning" disabled>
              警告
            </FxButton>
            <FxButton type="danger" disabled>
              危险
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="附带图标">
        <ul className="exp-button-group">
          <li>
            <FxButton
              type="danger"
              shape="square"
              icon="HeartOutlined"
            ></FxButton>
            <FxButton
              type="primary"
              pattern="solid"
              shape="square"
              icon="EditOutlined"
            ></FxButton>
            <FxButton
              type="success"
              pattern="dashed"
              shape="square"
              icon="CheckOutlined"
            ></FxButton>
            <FxButton type="danger" icon="SearchOutlined">
              {' '}
            </FxButton>
          </li>
          <li>
            <FxButton
              type="primary"
              shape="circle"
              icon="SearchOutlined"
            ></FxButton>
            <FxButton
              type="success"
              pattern="solid"
              shape="circle"
              icon="EditOutlined"
            ></FxButton>
            <FxButton
              type="danger"
              pattern="dashed"
              shape="circle"
              icon="CheckOutlined"
            ></FxButton>
            <FxButton type="default" loading shape="round">
              加载中
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="middle 尺寸">
        <ul className="exp-button-group">
          <li>
            <FxButton
              type="danger"
              size="middle"
              shape="circle"
              icon="HeartOutlined"
            ></FxButton>
            <FxButton type="danger" size="middle" disabled>
              危险
            </FxButton>
            <FxButton type="default" size="middle" loading shape="round">
              加载中
            </FxButton>
          </li>
          <li>
            <FxButton
              type="warning"
              size="middle"
              shape="square"
              icon="BorderOutlined"
            ></FxButton>
            <FxButton
              type="primary"
              size="middle"
              pattern="solid"
              icon="PlusOutlined"
            >
              主要
            </FxButton>
            <FxButton type="success" size="middle" pattern="dashed">
              成功
            </FxButton>
            <FxButton type="danger" size="middle" pattern="borderless">
              危险
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="small 尺寸">
        <ul className="exp-button-group">
          <li>
            <FxButton
              type="danger"
              size="small"
              shape="circle"
              icon="HeartOutlined"
            ></FxButton>
            <FxButton type="danger" size="small" disabled>
              危险
            </FxButton>
            <FxButton type="default" size="small" loading shape="round">
              加载中
            </FxButton>
          </li>
          <li>
            <FxButton
              type="warning"
              size="small"
              shape="square"
              icon="SearchOutlined"
            ></FxButton>
            <FxButton
              type="primary"
              size="small"
              pattern="solid"
              icon="PlusOutlined"
            >
              主要
            </FxButton>
            <FxButton type="success" size="small" pattern="dashed">
              成功
            </FxButton>
            <FxButton type="danger" size="small" pattern="borderless">
              危险
            </FxButton>
          </li>
        </ul>
      </FxGroup>
      <FxGroup title="group 组合">
        <ul className="exp-button-group">
          <li>
            <FxButton.Group shape="square" size="small">
              <FxButton type="default" icon="LeftOutlined"></FxButton>
              <FxButton type="default" icon="HomeOutlined"></FxButton>
            </FxButton.Group>
            <FxButton.Group size="small">
              <FxButton type="default" icon="LeftOutlined">
                返回
              </FxButton>
              <FxButton type="default" icon="HomeOutlined">
                首页
              </FxButton>
            </FxButton.Group>
          </li>
          <li>
            <FxButton.Group shape="square" size="large">
              <FxButton type="default" icon="LeftOutlined"></FxButton>
              <FxButton type="default" icon="HomeOutlined"></FxButton>
            </FxButton.Group>
            <FxButton.Group size="large">
              <FxButton type="default" icon="LeftOutlined">
                返回
              </FxButton>
              <FxButton type="default" icon="HomeOutlined">
                首页
              </FxButton>
            </FxButton.Group>
          </li>
          <li>
            <FxButton.Group shape="circle" size="small">
              <FxButton type="default" icon="LeftOutlined"></FxButton>
              <FxButton type="default" icon="HomeOutlined"></FxButton>
            </FxButton.Group>
            <FxButton.Group shape="round" size="small">
              <FxButton type="default" icon="LeftOutlined">
                返回
              </FxButton>
              <FxButton type="default" icon="HomeOutlined">
                首页
              </FxButton>
            </FxButton.Group>
          </li>
          <li>
            <FxButton.Group shape="circle" size="large">
              <FxButton type="default" icon="LeftOutlined"></FxButton>
              <FxButton type="default" icon="HomeOutlined"></FxButton>
            </FxButton.Group>
            <FxButton.Group shape="round" size="large">
              <FxButton type="default" icon="LeftOutlined">
                返回
              </FxButton>
              <FxButton type="default" icon="HomeOutlined">
                首页
              </FxButton>
            </FxButton.Group>
          </li>
          <li>
            <FxButton.Group shape="circle" pattern="solid">
              <FxButton type="primary" icon="LeftOutlined"></FxButton>
              <FxButton type="primary" icon="HomeOutlined"></FxButton>
            </FxButton.Group>
            <FxButton.Group shape="round" pattern="gradient">
              <FxButton type="warning">加购物车</FxButton>
              <FxButton type="danger">立即购买</FxButton>
            </FxButton.Group>
          </li>
        </ul>
      </FxGroup>
    </>
  )
}
