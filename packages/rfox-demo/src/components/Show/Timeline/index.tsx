import { FxTimeline, FxIcon, FxGroup } from '@/index'

export default function ExpTimeline() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxTimeline>
          <FxTimeline.Item title="成功获得0.01元收益">
            搞半天就这点？
          </FxTimeline.Item>
          <FxTimeline.Item title="十天后到账">
            0.01元还要十天到账？
          </FxTimeline.Item>
          <FxTimeline.Item title="爱要不要">不要了，滚。</FxTimeline.Item>
        </FxTimeline>
      </FxGroup>
      <FxGroup title="自定义轴点颜色（color）">
        <FxTimeline>
          <FxTimeline.Item dotColor="#52c41a" title="成功获得0.01元收益">
            搞半天就这点？
          </FxTimeline.Item>
          <FxTimeline.Item dotColor="#faad14" title="十天后到账">
            0.01元还要十天到账？
          </FxTimeline.Item>
          <FxTimeline.Item dotColor="#ff4d4f" title="爱要不要">
            不要了，滚。
          </FxTimeline.Item>
        </FxTimeline>
      </FxGroup>
      <FxGroup title="自定义轴点（TimelineItem Slot dot）">
        <FxTimeline>
          <FxTimeline.Item
            title="成功获得0.01元收益"
            renderDot={() => (
              <div className="exp-timeline-custom-dot">
                <FxIcon icon="HeartOutlined" />
              </div>
            )}
          >
            搞半天就这点？
          </FxTimeline.Item>
          <FxTimeline.Item
            title="十天后到账"
            renderDot={() => (
              <div className="exp-timeline-custom-dot">
                <FxIcon icon="HeartOutlined" />
              </div>
            )}
          >
            0.01元还要十天到账？
          </FxTimeline.Item>
          <FxTimeline.Item
            title="爱要不要"
            renderDot={() => (
              <div className="exp-timeline-custom-dot">
                <FxIcon icon="HeartOutlined" />
              </div>
            )}
          >
            不要了，滚。
          </FxTimeline.Item>
        </FxTimeline>
      </FxGroup>
      <FxGroup title="自定义内容（TimelineItem default/title）">
        <FxTimeline>
          <FxTimeline.Item
            renderTitle={() => (
              <>
                【珠海市】快件已送达【正方云创园】，如有疑问请电联：
                <a href="tel:10000">10000</a>，感谢您使用中通快递
              </>
            )}
          >
            2021-04-13 12:42:57
          </FxTimeline.Item>
          <FxTimeline.Item
            renderTitle={() => (
              <>
                【珠海市】【珠海一部】快递小哥正在派件（
                <a href="tel:10000">10000</a>）
              </>
            )}
          >
            2021-04-13 11:22:16
          </FxTimeline.Item>
          <FxTimeline.Item title="【珠海市】快件离开【珠海中心】已发往【珠海一部】">
            2021-04-13 09:04:03
          </FxTimeline.Item>
        </FxTimeline>
      </FxGroup>
    </>
  )
}
