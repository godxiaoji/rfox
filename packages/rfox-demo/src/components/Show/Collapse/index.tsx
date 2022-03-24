import {
  CollapseItemOnToggle,
  CollapseOnChange,
  FxCollapse,
  FxCell,
  FxGroup,
  showToast
} from '@/index'

export default function ExpCollapse() {
  const onChange: CollapseOnChange = activeNames => {
    console.log('change', activeNames)
    showToast(
      (activeNames.length > 0 ? activeNames.join('，') : '没有项') + '展开'
    )
  }

  const onToggle: CollapseItemOnToggle = res => {
    console.log('toggle', res)
    showToast(res.spread ? '展开' : '收起')
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxCollapse>
          <FxCollapse.Item title="标题1" name="row1">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="标题2" name="row2">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="标题3" name="row3">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
        </FxCollapse>
      </FxGroup>
      <FxGroup title="手风琴">
        <FxCollapse accordion>
          <FxCollapse.Item title="标题1" name="row1">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="标题2" name="row2">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="标题3" name="row3">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
        </FxCollapse>
      </FxGroup>
      <FxGroup title="其他">
        <FxCollapse activeNames={['row1']}>
          <FxCollapse.Item title="默认展开" name="row1">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="和 Cell 组合" name="row2">
            <FxCell label="单元格" content="内容"></FxCell>
            <FxCell
              label="单元格"
              content="内容"
              description="描述信息"
            ></FxCell>
          </FxCollapse.Item>
          <FxCollapse.Item title="带图标" icon="MenuOutlined" name="row3">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item
            title="禁用"
            disabled
            icon="StopOutlined"
            name="row4"
          >
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
        </FxCollapse>
      </FxGroup>
      <FxGroup title="Collapse 的事件 change">
        <FxCollapse onChange={onChange}>
          <FxCollapse.Item title="标题1" name="第1项">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="标题2" name="第2项">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
          <FxCollapse.Item title="标题3" name="第3项">
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
        </FxCollapse>
      </FxGroup>
      <FxGroup title="CollapseItem 的事件 toggle">
        <FxCollapse>
          <FxCollapse.Item title="标题1" name="row1" onToggle={onToggle}>
            <div className="exp-collapse-pad">
              代码是写出来给人看的，附带能在机器上运行
            </div>
          </FxCollapse.Item>
        </FxCollapse>
      </FxGroup>
    </>
  )
}
