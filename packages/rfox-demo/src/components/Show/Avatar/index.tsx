import { FxAvatar, FxCell, FxGroup } from '@/index'

export default function ExpAvatar() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="默认">
          <FxAvatar />
        </FxCell>
        <FxCell label="图片（src=xxx）">
          <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
        </FxCell>
        <FxCell label="文字">
          <FxAvatar>曹</FxAvatar>
        </FxCell>
      </FxGroup>
      <FxGroup title="色彩（color）">
        <div className="exp-avatar-custom-list">
          <FxAvatar color="#ff4d4f">DR</FxAvatar>
          <FxAvatar color="#ff7a45">V</FxAvatar>
          <FxAvatar color="#fa8c16">SO</FxAvatar>
          <FxAvatar color="#faad14">CG</FxAvatar>
          <FxAvatar color="#fadb14">SY</FxAvatar>
          <FxAvatar color="#597ef7">GB</FxAvatar>
          <FxAvatar color="#1890ff">DB</FxAvatar>
          <FxAvatar color="#36cfc9">C</FxAvatar>
          <FxAvatar color="#52c41a">PG</FxAvatar>
          <FxAvatar color="#a0d911">L</FxAvatar>
          <FxAvatar color="#9254de">GP</FxAvatar>
          <FxAvatar color="#f759ab">M</FxAvatar>
        </div>
      </FxGroup>
      <FxGroup title="形状（shape）">
        <FxCell label="circle">
          <FxAvatar shape="circle" />
        </FxCell>
        <FxCell label="square">
          <FxAvatar shape="square" />
        </FxCell>
      </FxGroup>
      <FxGroup title="尺寸（size）">
        <div className="exp-avatar-custom-list">
          <FxAvatar size={24}>24</FxAvatar>
          <FxAvatar size="small">SM</FxAvatar>
          <FxAvatar size="middle">MD</FxAvatar>
          <FxAvatar size="large">LG</FxAvatar>
        </div>
      </FxGroup>
      <FxGroup title="角标">
        <FxCell label="gender">
          <div className="exp-avatar-list">
            <FxAvatar
              shape="square"
              gender="man"
              src="https://cdn.fox2.cn/vfox/avatar/1.png"
            />
            <FxAvatar
              shape="square"
              gender="woman"
              src="https://cdn.fox2.cn/vfox/avatar/2.png"
            />
            <FxAvatar
              shape="circle"
              gender="man"
              src="https://cdn.fox2.cn/vfox/avatar/3.png"
            />
            <FxAvatar
              shape="circle"
              gender="woman"
              src="https://cdn.fox2.cn/vfox/avatar/4.png"
            />
          </div>
        </FxCell>
        <FxCell label="badge">
          <div className="exp-avatar-list">
            <FxAvatar shape="square" badge="99" />
            <FxAvatar shape="square" badge={{ content: 1, dot: true }} />
          </div>
        </FxCell>
      </FxGroup>
      <FxGroup title="头像组">
        <FxCell label="size=small">
          <FxAvatar.Group size="small">
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/5.png" />
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/6.png" />
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/7.png" />
          </FxAvatar.Group>
        </FxCell>
        <FxCell label="totalCount=123456">
          <FxAvatar.Group size="small" totalCount="123456" countColor="#6667AB">
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/1.png" />
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/2.png" />
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/3.png" />
            <FxAvatar src="https://cdn.fox2.cn/vfox/avatar/4.png" />
          </FxAvatar.Group>
        </FxCell>
      </FxGroup>
    </>
  )
}
