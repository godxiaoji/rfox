/// <reference types="vite/client" />

declare module '*.svg?jsx' {
  import React from 'react'
  const src: React.FC<React.SVGAttributes<SVGSVGElement>>
  export default src
}
