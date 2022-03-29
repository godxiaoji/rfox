import _TabView from './TabView'
import TabViewItem from './TabViewItem'

const TabView = Object.assign(_TabView, {
  Item: TabViewItem
})

export { TabView, TabViewItem }

export default TabView
