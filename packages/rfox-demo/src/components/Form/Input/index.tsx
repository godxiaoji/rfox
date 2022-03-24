import { FxInput, FxCell, FxGroup, showToast } from '@/index'

export default function ExpInput() {
  function onInput(value: string) {
    showToast(`当前值为：${value}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxInput type="text" focus placeholder="请输入文本" />
        <FxInput type="text" value="禁用" disabled />
        <FxInput type="text" placeholder="showLimit=true" showLimit showClear />
      </FxGroup>
      <FxGroup title="textarea">
        <FxInput type="textarea" placeholder="showLimit=true" showLimit />
      </FxGroup>
      <FxGroup title="Slot prepend/append">
        <FxInput
          type="text"
          focus
          placeholder="请输入网址"
          renderPrepend={() => 'https://'}
        />
        <FxInput
          type="text"
          focus
          placeholder="请输入网址"
          renderAppend={() => '.com'}
        />
      </FxGroup>
      <FxGroup title="与 Cell 组合">
        <FxCell label="文本">
          <FxInput type="text" placeholder="请输入文本" />
        </FxCell>
      </FxGroup>
      <FxGroup title="设置 type 类型">
        <FxCell label="文本 text">
          <FxInput type="text" placeholder="请输入文本" />
        </FxCell>
        <FxCell label="电话 tel">
          <FxInput type="tel" placeholder="请输入电话" />
        </FxCell>
        <FxCell label="整数 digit">
          <FxInput type="digit" placeholder="请输入整数" />
        </FxCell>
        <FxCell label="数字 number">
          <FxInput type="number" placeholder="请输入数字" />
        </FxCell>
        <FxCell label="搜索 search">
          <FxInput type="search" placeholder="请输入要搜索的内容" />
        </FxCell>
        <FxCell label="密码 password">
          <FxInput type="password" placeholder="请输入密码" />
        </FxCell>
        <FxCell label="文本 textarea">
          <FxInput type="textarea" placeholder="请输入多行文本" />
        </FxCell>
      </FxGroup>
      <FxGroup title="其他">
        <FxCell label="只读 readonly">
          <FxInput type="text" value="只读文本" readonly />
        </FxCell>
        <FxCell label="禁用 disabled">
          <FxInput type="text" value="禁用文本" disabled />
        </FxCell>
        <FxCell label="可清除 showClear">
          <FxInput
            type="text"
            placeholder="请输入文本"
            value="文本内容"
            showClear
          />
        </FxCell>
      </FxGroup>
      <FxGroup title="事件监听">
        <FxCell label="input">
          <FxInput
            type="text"
            placeholder="请输入文本"
            showClear
            onInput={onInput}
          />
        </FxCell>
        <FxCell label="change">
          <FxInput
            type="text"
            placeholder="请输入文本"
            showClear
            onChange={onInput}
          />
        </FxCell>
      </FxGroup>
    </>
  )
}
