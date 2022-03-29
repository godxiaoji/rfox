import {
  FxSearchBar,
  FxGroup,
  showToast,
  SearchBarOnFieldClick,
  SearchBarOnInput,
  SearchBarOnSearch
} from '@/index'
import { placeholders } from './data'

export default function ExpSearchBar() {
  const onInput: SearchBarOnInput = (text, fn) => {
    fn(
      text
        ? 'ABCD'.split('').map(v => {
            return {
              text: `${text} ${v}`,
              tags: ['tag1', 'tag2']
            }
          })
        : []
    )
  }

  const onInput2: SearchBarOnInput = (text, fn) => {
    showToast(`输入了 ${text}`)

    onInput(text, fn)
  }

  const onSearch: SearchBarOnSearch = res => {
    console.log('onSearch', res)
    showToast(`搜索了 ${res.text}`)
  }

  const onClick: SearchBarOnFieldClick = res => {
    console.log('onFieldClick', res)
    showToast(`搜索词 ${res.text}`)
  }

  return (
    <>
      <FxGroup title="基础用法">
        <FxSearchBar />
      </FxGroup>
      <FxGroup title="搜索建议">
        <FxSearchBar onInput={onInput} />
      </FxGroup>
      <FxGroup title="显示取消按钮">
        <FxSearchBar showCancel />
      </FxGroup>
      <FxGroup title="设置候选项">
        <FxSearchBar placeholders={placeholders} />
      </FxGroup>
      <FxGroup title="深色适配">
        <FxSearchBar className="exp-searchBar-dark-style" showCancel ghost />
      </FxGroup>
      <FxGroup title="只读（readonly=true）">
        <FxSearchBar readOnly placeholders={placeholders} />
      </FxGroup>
      <FxGroup title="onInput/onFocus/onBlur/onCancelClick/onSearch">
        <FxSearchBar
          showCancel
          placeholders={placeholders}
          onInput={onInput2}
          onFocus={() => showToast('focus')}
          onBlur={() => showToast('blur')}
          onCancelClick={() => {
            showToast('取消按钮点击')
          }}
          onSearch={onSearch}
        />
      </FxGroup>
      <FxGroup title="onFieldClick & readOnly=true">
        <FxSearchBar
          readOnly
          placeholders={placeholders}
          onFieldClick={onClick}
        />
      </FxGroup>
    </>
  )
}
