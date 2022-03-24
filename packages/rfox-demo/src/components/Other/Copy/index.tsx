import { FxCopy, FxButton, FxGroup, showToast } from '@/index'

export default function ExpCopy() {
  const onSuccess = (text: string) => {
    showToast({
      title: `${text}`,
      type: 'success'
    })
  }

  const onError = (error: Error) => {
    showToast({
      title: error.message,
      type: 'fail'
    })
  }

  return (
    <>
      <FxGroup title="基本用法">
        <div className="exp-copy-pad">
          <FxCopy className="exp-copy-box" text="复制的文本">
            <FxButton type="primary">点击复制</FxButton>
          </FxCopy>
        </div>
      </FxGroup>
      <FxGroup title="事件监听">
        <div className="exp-copy-pad">
          <FxCopy
            className="exp-copy-box"
            text="复制的文本2"
            onSuccess={onSuccess}
            onError={onError}
          >
            <FxButton type="primary">点击复制</FxButton>
          </FxCopy>
        </div>
      </FxGroup>
    </>
  )
}
