import {
  FxSkeleton,
  FxGroup,
  FxIcon,
  SkeletonAvatarShape,
  SkeletonButtonShape
} from '@/index'
import { useState } from 'react'

export default function ExpSkeleton() {
  const [animated] = useState(true)
  const [avatarShape] = useState<SkeletonAvatarShape>('circle')
  const [buttonShape] = useState<SkeletonButtonShape>('default')
  const [loading] = useState(false)

  return (
    <>
      <FxGroup title="基础用法">
        <div className="exp-skeleton-panel">
          <FxSkeleton />
        </div>
      </FxGroup>
      <FxGroup title="显示头像">
        <div className="exp-skeleton-panel">
          <FxSkeleton avatar />
        </div>
      </FxGroup>
      <FxGroup title="带动画">
        <div className="exp-skeleton-panel">
          <FxSkeleton avatar animated={animated} avatarShape={avatarShape} />
        </div>
      </FxGroup>
      <FxGroup title="显示子组件">
        <div className="exp-skeleton-panel">
          {/* <div className="exp-skeleton-switch">
        <fx-switch v-model="loadingSwitch" />
      </div> */}
          <FxSkeleton avatar loading={loading}>
            <div className="exp-skeleton-sub-component">
              <FxIcon icon="HeartFilled" size="32" />
              <h4 className="title">hello World</h4>
              <p className="paragraph">简单不先于复杂，而是在复杂之后。</p>
            </div>
          </FxSkeleton>
        </div>
      </FxGroup>
      <FxGroup title="自由组合">
        <div className="exp-skeleton-panel">
          <FxSkeleton
            className="exp-skeleton-custom"
            buttonShape={buttonShape}
            renderLayout={() => (
              <>
                <FxSkeleton.Image />
                <FxSkeleton.Title />
                <FxSkeleton.Paragraph row={2} />
                <FxSkeleton.Button />
              </>
            )}
          ></FxSkeleton>
        </div>
      </FxGroup>
    </>
  )
}
