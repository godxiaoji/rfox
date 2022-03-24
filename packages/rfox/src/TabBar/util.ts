export const getTabBarClasses = () => {
  return ['fx-tab-bar', 'fx-horizontal-hairline']
}

export const getTabBarItemClasses = (index: number, activeIndex: number) => {
  return [
    'fx-tab-bar_item',
    {
      active: index === activeIndex
    }
  ]
}
