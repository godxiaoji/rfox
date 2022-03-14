import classNames from 'classnames'
import type {
  ButtonOption,
  NavBarProps,
  OnButtonClick,
  OnTitleDbClick
} from './types'
import type { FC, OnClick, RenderProp } from '../helpers/types'
import { Button, ButtonGroup } from '../Button'
import { useLocale } from '../ConfigProvider/context'
import LeftOutlined from '../Icon/icons/LeftOutlined'
import HomeOutlined from '../Icon/icons/HomeOutlined'
import { useRef } from 'react'
import type { MouseEvent } from 'react'
import { useDbClick } from '../hooks/use-db-click'

type ButtonMouseEvent = MouseEvent<HTMLButtonElement>

const FxNavBar: FC<
  NavBarProps & {
    renderLeft?: RenderProp
    renderRight?: RenderProp

    onBackClick?: OnButtonClick
    onHomeClick?: OnButtonClick
    onLeftButtonClick?: OnButtonClick
    onRightButtonClick?: OnButtonClick
    onTitleDbclick?: OnTitleDbClick
  }
> = props => {
  const { locale } = useLocale()
  const titleEl = useRef<HTMLDivElement>(null)

  const classes = classNames(
    'fx-nav-bar',
    'fx-horizontal-hairline',
    props.className
  )

  const onBack: OnClick = e => {
    props.onBackClick &&
      props.onBackClick(
        {
          index: 0,
          item: {
            text: 'back'
          }
        },
        e.currentTarget
      )
  }

  const onHome: OnClick = e => {
    props.onHomeClick &&
      props.onHomeClick(
        {
          item: {
            text: 'home'
          },
          index: props.showBack ? 1 : 0
        },
        e.currentTarget
      )
  }

  function onLeftIconClick(
    e: ButtonMouseEvent,
    item: ButtonOption,
    index: number
  ) {
    props.onLeftButtonClick &&
      props.onLeftButtonClick(
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
  }

  function onRightIconClick(
    e: ButtonMouseEvent,
    item: ButtonOption,
    index: number
  ) {
    props.onRightButtonClick &&
      props.onRightButtonClick(
        {
          item: {
            text: item.text
          },
          index
        },
        e.currentTarget
      )
  }

  function renderLeftButtons() {
    if (
      (props.leftButtons && props.leftButtons.length > 0) ||
      props.showBack ||
      props.showHome
    ) {
      return (
        <ButtonGroup
          className="fx-nav-bar_button-group"
          shape={props.iconOnly ? 'square' : 'rectangle'}
          pattern="borderless"
        >
          {props.leftButtons && props.leftButtons.length > 0 ? (
            props.leftButtons.map((item, index) => {
              return (
                <Button
                  className="fx-nav-bar_button"
                  key={index}
                  transparent
                  type={item.type}
                  icon={item.icon}
                  onClick={(e: ButtonMouseEvent) =>
                    onLeftIconClick(e, item, index)
                  }
                >
                  {item.text}
                </Button>
              )
            })
          ) : (
            <>
              {props.showBack ? (
                <Button
                  className="fx-nav-bar_button"
                  type="default"
                  icon={LeftOutlined}
                  transparent
                  onClick={onBack}
                >
                  {locale.navBarBackButtonText}
                </Button>
              ) : (
                <></>
              )}
              {props.showHome ? (
                <Button
                  className="fx-nav-bar_button"
                  type="default"
                  icon={HomeOutlined}
                  transparent
                  onClick={onHome}
                >
                  {locale.navBarHomeButtonText}
                </Button>
              ) : (
                <></>
              )}
            </>
          )}
        </ButtonGroup>
      )
    }
    return <></>
  }

  function renderRightButtons() {
    if (props.rightButtons && props.rightButtons.length > 0) {
      return (
        <ButtonGroup
          className="fx-nav-bar_button-group"
          shape={props.iconOnly ? 'square' : 'rectangle'}
          pattern="borderless"
        >
          {' '}
          {props.rightButtons.map((item, index) => {
            return (
              <Button
                className="fx-nav-bar_button"
                key={index}
                transparent
                type={item.type}
                icon={item.icon}
                onClick={(e: ButtonMouseEvent) =>
                  onRightIconClick(e, item, index)
                }
              >
                {item.text}
              </Button>
            )
          })}
        </ButtonGroup>
      )
    }
    return <></>
  }

  useDbClick(titleEl, ($el, event) => {
    if (event === 'dbclick') {
      props.onTitleDbclick && props.onTitleDbclick($el)
    }
  })

  return (
    <div className={classes}>
      <div className="fx-nav-bar_inner">
        <div className="fx-nav-bar_left">
          {props.renderLeft ? props.renderLeft() : renderLeftButtons()}
        </div>
        <div className="fx-nav-bar_title" ref={titleEl}>
          {props.title}
        </div>
        <div className="fx-nav-bar_right">
          {props.renderRight ? props.renderRight() : renderRightButtons()}
        </div>
      </div>
    </div>
  )
}

FxNavBar.defaultProps = {
  showBack: false,
  showHome: false,
  iconOnly: true
}

export default FxNavBar
