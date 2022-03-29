import { HTMLAttributes, FC, SVGAttributes } from 'react'

export type SVGComponent = FC<SVGAttributes<SVGSVGElement>>

export type IconData = string | SVGComponent

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
  icon: IconData
  spin?: boolean
  size?: number | string
  width?: number | string
  height?: number | string
  color?: string
}

export interface SpriteSVGProps extends HTMLAttributes<SVGSVGElement> {
  iconName: string
}
