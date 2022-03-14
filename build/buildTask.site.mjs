import { execa } from 'execa'
import { getPath } from './utils.mjs'

const { resolve } = getPath(import.meta.url)

const DOCS_CWD = resolve('./packages/vfox-docs')
const PLAYGROUND_CWD = resolve('./packages/vfox-playground')
const DEMO_CWD = resolve('./packages/vfox-demo')

export const buildDocs = () => execa('pnpm', ['build'], { cwd: DOCS_CWD })
export const buildPlayground = () =>
  execa('pnpm', ['build'], { cwd: PLAYGROUND_CWD })
export const buildDemo = () => execa('pnpm', ['build'], { cwd: DEMO_CWD })
