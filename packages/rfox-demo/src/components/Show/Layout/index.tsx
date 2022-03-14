import { FxRow, FxCol, FxGroup } from '@/index'

export default function ExpLayout() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col">col-24</FxCol>
        </FxRow>
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="12">
            col-12
          </FxCol>
          <FxCol className="exp-layout-col" span="12">
            col-12
          </FxCol>
        </FxRow>
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
        </FxRow>
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="6">
            col-6
          </FxCol>
          <FxCol className="exp-layout-col" span="6">
            col-6
          </FxCol>
          <FxCol className="exp-layout-col" span="6">
            col-6
          </FxCol>
          <FxCol className="exp-layout-col" span="6">
            col-6
          </FxCol>
        </FxRow>
      </FxGroup>
      <FxGroup title="区块间隔">
        <FxRow className="exp-layout-row" gutter="10">
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
        </FxRow>
      </FxGroup>
      <FxGroup title="左右偏移">
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="8">
            col-8
          </FxCol>
          <FxCol className="exp-layout-col" span="8" offset="8">
            col-8 offset-8
          </FxCol>
        </FxRow>
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="6" offset="6">
            col-6 offset-6
          </FxCol>
          <FxCol className="exp-layout-col" span="6" offset="6">
            col-6 offset-6
          </FxCol>
        </FxRow>
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="12" offset="6">
            col-12 offset-6
          </FxCol>
        </FxRow>
      </FxGroup>
      <FxGroup title="栅格排序">
        <FxRow className="exp-layout-row">
          <FxCol className="exp-layout-col" span="18" push="6">
            col-18 push-6
          </FxCol>
          <FxCol className="exp-layout-col" span="6" pull="18">
            col-6 pull-18
          </FxCol>
        </FxRow>
      </FxGroup>
      <FxGroup title="水平对齐方式">
        <div className="exp-layout-title">justify: start</div>
        <FxRow className="exp-layout-row" justify="start">
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
        </FxRow>
        <div className="exp-layout-title">justify: center</div>
        <FxRow className="exp-layout-row" justify="center">
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
        </FxRow>
        <div className="exp-layout-title">justify: end</div>
        <FxRow className="exp-layout-row" justify="end">
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
        </FxRow>
        <div className="exp-layout-title">justify: space-around</div>
        <FxRow className="exp-layout-row" justify="space-around">
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
        </FxRow>
        <div className="exp-layout-title">justify: space-between</div>
        <FxRow className="exp-layout-row" justify="space-between">
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col" span="4">
            col-4
          </FxCol>
        </FxRow>
      </FxGroup>
      <FxGroup title="垂直对齐方式">
        <div className="exp-layout-title">align: top</div>
        <FxRow className="exp-layout-row" justify="space-around" align="top">
          <FxCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </FxCol>
        </FxRow>
        <div className="exp-layout-title">align: middle</div>
        <FxRow className="exp-layout-row" justify="space-around" align="middle">
          <FxCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </FxCol>
        </FxRow>
        <div className="exp-layout-title">align: bottom</div>
        <FxRow className="exp-layout-row" justify="space-around" align="bottom">
          <FxCol className="exp-layout-col exp-layout-h-80" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-40" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-100" span="4">
            col-4
          </FxCol>
          <FxCol className="exp-layout-col exp-layout-h-60" span="4">
            col-4
          </FxCol>
        </FxRow>
      </FxGroup>
    </>
  )
}
