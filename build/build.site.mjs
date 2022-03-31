import { runTask } from './utils.mjs'
import { buildDemo, buildDocs } from './buildTask.site.mjs'

const runBuild = async () => {
  await runTask('docs', buildDocs)
  await Promise.all([runTask('demo', buildDemo)])
}

runBuild()
