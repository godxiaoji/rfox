import { FxCell, FxTimeAgo, FxGroup } from '@/index'
import dayjs from 'dayjs'

const time = new Date()
const time2 = dayjs('2021-05-01', 'YYYY-MM-DD').toDate()

export default function ExpTimeAgo() {
  return (
    <>
      <FxGroup title="基础用法">
        <FxCell label="当前">
          <FxTimeAgo time={time} />
        </FxCell>
        <FxCell label="2021-05-01">
          <FxTimeAgo time={time2} />
        </FxCell>
      </FxGroup>
      <FxGroup title="间隔">
        <FxCell label="interval=2">
          <FxTimeAgo time={time} interval={2} />
        </FxCell>
      </FxGroup>
    </>
  )
}
