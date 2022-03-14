import { runTask } from './utils.mjs'
import { buildSrcFullStyle } from './buildTask.css.mjs'
import { buildSrcCompEntry } from './buildTask.components.mjs'

const runBuild = async () => {
  await Promise.all([
    runTask('css src', buildSrcFullStyle),
    runTask('component src', buildSrcCompEntry)
  ])
}

runBuild()
