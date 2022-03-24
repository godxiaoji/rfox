import _Timeline from './Timeline'
import TimelineItem from './TimelineItem'

const Timeline = Object.assign(_Timeline, {
  Item: TimelineItem
})

export { Timeline, TimelineItem }

export default Timeline
