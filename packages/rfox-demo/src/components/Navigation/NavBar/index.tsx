import {
  showToast,
  FxButton,
  FxNavBar,
  FxGroup,
  NavBarOnButtonClick
} from '@/index'

export default function ExpNavBar() {
  const onRightButtonClick: NavBarOnButtonClick = res => {
    console.log(res)

    // showDialog({
    //   title: '右侧按钮点击',
    //   showCancel: false,
    //   content: `text: '${res.item.text}'\nindex: ${res.index}`
    // })
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxNavBar title="标题" />
      </FxGroup>
      <FxGroup title="显示返回按钮">
        <FxNavBar title="标题" showBack />
      </FxGroup>
      <FxGroup title="展示首页按钮">
        <FxNavBar title="标题" showBack showHome />
      </FxGroup>
      <FxGroup title="展示右侧按钮">
        <FxNavBar
          title="标题"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
      </FxGroup>
      <FxGroup title="按钮带文本">
        <FxNavBar
          title="标题"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
        <FxNavBar
          title="标题"
          showBack
          iconOnly={false}
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
        />
      </FxGroup>
      <FxGroup title="固定顶部(配合 fixed 组件)">
        <div className="exp-navBar-fixed">上下滑动观察最顶部的导航</div>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxNavBar
          title="标题双击"
          showBack
          showHome
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
          onBackClick={() => showToast('返回按钮点击')}
          onHomeClick={() => showToast('首页按钮点击')}
          onTitleDbclick={() => showToast('标题双击')}
          onRightButtonClick={onRightButtonClick}
        />
      </FxGroup>
      <FxGroup title="renderLeft/renderRight">
        <FxNavBar
          title="标题"
          rightButtons={[{ icon: 'MenuOutlined', text: '菜单' }]}
          renderLeft={() => <div className="exp-navBar-left">renderLeft</div>}
        />
        <FxNavBar
          title="标题"
          showBack
          showHome
          renderRight={() => (
            <div className="exp-navBar-right">renderRight</div>
          )}
        />
        <FxNavBar
          title="标题"
          showBack
          showHome
          renderLeft={() => (
            <div className="exp-navBar-left">
              <FxButton type="primary" icon="LeftOutlined" size="small">
                返回
              </FxButton>
            </div>
          )}
          renderRight={() => (
            <div className="exp-navBar-right">
              <FxButton type="primary" icon="MenuOutlined" size="small">
                菜单
              </FxButton>
            </div>
          )}
        />
      </FxGroup>
    </>
  )
}
