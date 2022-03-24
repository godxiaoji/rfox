import {
  FxFlatList,
  FxCell,
  FxGroup,
  FxEmpty,
  ViewPosition,
  FlatListOnRefreshing,
  showToast,
  FlatListRef,
  FlatListOnEndReached,
  FlatListOnVisibleItemsChange
} from '@/index'
import { useLayoutEffect, useRef, useState } from 'react'

interface ExpList {
  id: number
  text: string
}

// 数据初始化
const list: ExpList[] = []
const largeList: ExpList[] = []
for (let i = 0; i < 100; i++) {
  list.push({
    id: i + 1,
    text: `第 ${i + 1} 个列表`
  })
}
for (let i = 0; i < 100000; i++) {
  largeList.push({
    id: i + 1,
    text: `第 ${i + 1} 个列表`
  })
}

export default function ExpFlatList() {
  // 瀑布流
  function getItemSize(index: number) {
    return 50 + (index % 10) * 2
  }

  // 下拉刷新
  const onRefreshing: FlatListOnRefreshing = (res, done) => {
    setTimeout(() => {
      showToast({
        title: `刷新成功`,
        type: 'success'
      })
      done()
    }, 2000)
  }

  // 加载更多
  const [lowerLoading, setLowerLoading] = useState(true)
  const [loadList, setLoadList] = useState<ExpList[]>([])

  function getLoadList() {
    const newLoadingList = [...loadList]

    for (
      let i = newLoadingList.length, len = newLoadingList.length + 10;
      i < len;
      i++
    ) {
      newLoadingList.push({
        id: i + 1,
        text: `第 ${i + 1} 个列表`
      })
    }

    setLoadList(newLoadingList)

    return newLoadingList.length
  }

  useLayoutEffect(() => {
    getLoadList()
  }, [])

  const onLoadMore: FlatListOnEndReached = res => {
    console.log('end-reached', res)

    const max = 100

    if (loadList.length >= max) {
      return
    }

    setTimeout(() => {
      showToast({
        title: `加载成功`,
        type: 'success'
      })

      if (getLoadList() >= max) {
        setLowerLoading(false)
      }
    }, 500)
  }

  // 事件监听
  const onVisibleItemsChange: FlatListOnVisibleItemsChange = ({ items }) => {
    console.log('visible-items-change', items)

    items.forEach(({ index, visible }) => {
      index === 49 && showToast(`index: ${index}, visable: ${visible}`)
    })
  }
  const onEndReached: FlatListOnEndReached = res => {
    console.log('end-reached', res)
    showToast(`到底了`)
  }

  // 方法调用
  const methodList = useRef<FlatListRef>(null)

  function scrollToIndex(index: number, viewPosition: ViewPosition = 0) {
    methodList.current?.scrollToIndex({ index, viewPosition })
  }
  function scrollTo(offset: number) {
    methodList.current?.scrollTo({ offset })
  }
  function scrollToEnd(animated: boolean) {
    methodList.current?.scrollToEnd(animated)
  }

  return (
    <>
      {/* <FxGroup title="基础用法">
        <FxFlatList
          className="exp-flatList-box"
          ids={list.map(v => v.id)}
          render={({ index }) => (
            <div className="exp-flatList-item">{list[index].text}</div>
          )}
        />
      </FxGroup>
      <FxGroup title="水平列表">
        <FxFlatList
          className="exp-flatList-box"
          itemSize={140}
          initialHorizontal
          ids={list.map(v => v.id)}
          render={({ index }) => (
            <div className="exp-flatList-item">{list[index].text}</div>
          )}
        />
      </FxGroup>
      <FxGroup title="开启下拉刷新">
        <FxFlatList
          className="exp-flatList-box"
          itemSize={50}
          enablePullRefresh
          onRefreshing={onRefreshing}
          ids={list.map(v => v.id)}
          render={({ index }) => (
            <div className="exp-flatList-item">{list[index].text}</div>
          )}
        />
      </FxGroup> */}
      <FxGroup title="展示底部加载更多提示">
        <FxFlatList
          className="exp-flatList-box"
          lowerLoading={lowerLoading}
          ids={loadList.map(v => v.id)}
          render={({ index }) => (
            <div className="exp-flatList-item">{loadList[index].text}</div>
          )}
          onEndReached={onLoadMore}
        />
      </FxGroup>
      <FxGroup title="分割线（#separator）">
        <FxFlatList
          className="exp-flatList-box"
          ids={list.map(v => v.id)}
          render={({ index }) => (
            <div className="exp-flatList-item">{list[index].text}</div>
          )}
          renderSeparator={({ index }) =>
            index < list.length - 1 ? (
              <div className="exp-flatList-item-separator"></div>
            ) : (
              <></>
            )
          }
        />
      </FxGroup>
      <FxGroup title="瀑布流">
        <FxFlatList
          className="exp-flatList-box"
          itemSize={getItemSize}
          initialWaterfallCount={3}
          ids={list.map(v => v.id)}
          render={({ index }) => (
            <div className={`exp-flatList-item color-${index % 10}`}>
              {list[index].text}
            </div>
          )}
        />
      </FxGroup>
      <FxGroup title="事件监听（end-reached/visible-items-change）">
        <FxFlatList
          className="exp-flatList-box"
          itemSize={50}
          ids={list.map(v => v.id)}
          render={({ index }) => (
            <div className="exp-flatList-item">{list[index].text}</div>
          )}
          onEndReached={onEndReached}
          onVisibleItemsChange={onVisibleItemsChange}
        />
      </FxGroup>
      <FxGroup title="Slot empty">
        <FxFlatList
          className="exp-flatList-box"
          ids={[]}
          renderEmpty={() => <FxEmpty description="暂无列表" />}
          render={() => <></>}
        />
      </FxGroup>
      <FxGroup title="Method">
        <FxFlatList
          className="exp-flatList-box"
          ids={largeList.map(v => v.id)}
          ref={methodList}
          itemSize={50}
          render={({ index }) => (
            <div className={`exp-flatList-item color-${index % 10}`}>
              {largeList[index].text}
            </div>
          )}
        />
        <FxCell
          label="scrollToIndex({ index: 49999 })"
          isLink
          onClick={() => scrollToIndex(49999)}
        ></FxCell>
        <FxCell
          label="同上加 viewPosition=0.5"
          isLink
          onClick={() => scrollToIndex(49999, 0.5)}
        ></FxCell>
        <FxCell
          label="同上加 viewPosition=1"
          isLink
          onClick={() => scrollToIndex(49999, 1)}
        ></FxCell>
        <FxCell
          label="scrollTo({ offset: 200 })"
          isLink
          onClick={() => scrollTo(200)}
        ></FxCell>
        <FxCell
          label="scrollToEnd(true)"
          isLink
          onClick={() => scrollToEnd(true)}
        ></FxCell>
      </FxGroup>
    </>
  )
}
