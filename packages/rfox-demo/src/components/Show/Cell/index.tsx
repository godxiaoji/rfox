import { FxCell, FxIcon, FxGroup } from '@/index'

export default function ExpCell() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="单元格" content="内容"></FxCell>
        <FxCell label="单元格" content="内容" description="描述信息"></FxCell>
      </FxGroup>
      <FxGroup title="包含图标">
        <FxCell label="单元格" content="内容" icon="EditOutlined"></FxCell>
        <FxCell
          label="单元格"
          content="内容"
          description="描述信息"
          icon="EditOutlined"
        ></FxCell>
      </FxGroup>
      <FxGroup title="展示箭头">
        <FxCell label="单元格" isLink></FxCell>
        <FxCell
          label="单元格"
          content="内容"
          isLink
          arrowDirection="down"
        ></FxCell>
        <FxCell
          label="单元格"
          content="内容"
          isLink
          arrowDirection="left"
        ></FxCell>
        <FxCell
          label="单元格"
          description="描述信息"
          isLink
          arrowDirection="up"
        ></FxCell>
        <FxCell
          label="单元格"
          content="内容"
          description="描述信息"
          isLink
        ></FxCell>
      </FxGroup>
      <FxGroup title="其他">
        <FxCell
          label="必填"
          content="内容"
          isLink
          arrowDirection="down"
          required
        ></FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell
          label="单元格"
          content="内容"
          description="描述信息"
          isLink
          onClick={() => console.log('点击事件')}
        ></FxCell>
      </FxGroup>
      <FxGroup title="Slot default">
        <FxCell label="右侧图标" content="内容">
          <FxIcon icon="CloseOutlined" />
        </FxCell>
        {/* <FxCell checkbox>
          <div className="exp-cell-user-item">
            <FxImage
              className="exp-cell-user-item-avatar"
              src="https://cdn.fox2.cn/vfox/swiper/center-2.jpg"
              mode="aspectFill"
            />
            <span className="exp-cell-user-item-nickname">小明</span>
          </div>
        </FxCell> */}
      </FxGroup>
      {/* <FxGroup title="Slot icon">
    <FxCell checkbox>
      <div className="exp-cell-user-item">
        <FxImage
          className="exp-cell-user-item-avatar"
          src="https://cdn.fox2.cn/vfox/swiper/center-2.jpg"
          mode="aspectFill"
        />
        <span className="exp-cell-user-item-nickname">小明</span>
      </div>
      <template #icon>
        <fx-checkbox circle @change="onCheckboxChange" />
      </template>
    </FxCell>
  </FxGroup> */}
    </>
  )
}
