import React from 'react'

export type SVGComponent = React.FC<React.SVGAttributes<SVGSVGElement>>

export type IconData = string | SVGComponent

export interface IconProps {
  icon: IconData
  spin?: boolean
  size?: number | string
  width?: number | string
  height?: number | string
  color?: string
}
