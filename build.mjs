import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'

const options = {
  entryPoints: ['src/index.mjs', 'src/Lazy.mjs'],
  outdir: 'dist/',
  plugins: [ pnpPlugin()],
  bundle: true,
  splitting: false,
  format: 'esm',
  publicPath: '/',
  platform: 'browser',
  target: 'esnext',
  treeShaking: true,
  loader: {'.mjs': 'jsx'},
  outExtension: { '.js': '.mjs' },
}

await esbuild.build(options)

// SSR
options.platform = 'node'
options.entryPoints = ['src/server.mjs']
await esbuild.build(options)


