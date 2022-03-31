import fs from 'fs'
import { build } from 'esbuild'
import { rollup } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import { getCoreDeps, getPath } from './utils.mjs'

const { resolveCore, resolve } = getPath(import.meta.url)

export const buildEsmBrowser = () =>
  build({
    entryPoints: [resolveCore('./src/index.ts')],
    external: getCoreDeps(),
    outfile: resolve('./dist/index.esm-browser.js'),
    format: 'esm',
    bundle: true,
    target: ['es2015']
  })

const buildUmdEsm = async () => {
  await build({
    entryPoints: [resolveCore('./src/umd.ts')],
    external: getCoreDeps(),
    outfile: resolve('./dist/umd.js'),
    format: 'esm',
    bundle: true,
    target: ['es2015']
  })
}

const buildUmdJs = async () => {
  const inputOptions = {
    input: resolve('./dist/umd.js'),
    external: getCoreDeps(),
    plugins: [
      nodeResolve(),
      commonjs({
        include: 'node_modules/**'
      }),
      terser()
    ]
  }

  const outOptions = {
    name: 'Rfox',
    format: 'umd',
    file: resolve('./dist/index.js'),
    globals: {
      react: 'React',
      'react-dom': 'ReactDom'
    },
    sourcemap: true
  }

  const bundle = await rollup(inputOptions)
  await bundle.write(outOptions)
}

export const buildUmd = async () => {
  await buildUmdEsm()
  await buildUmdJs()
  await fs.promises.unlink('./dist/umd.js')
}
