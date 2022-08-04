import esbuild from 'esbuild'
import { pnpPlugin } from '@yarnpkg/esbuild-plugin-pnp'



const options = {
  entryPoints: [ 'src/server.mjs', 'src/readable.mjs' ],
  plugins: [ pnpPlugin() ],
  outdir: 'dist',
  bundle: true,
  splitting: false,
  format: 'esm',
  publicPath: '/',
  platform: 'node',
  target: 'esnext',
  // minify: isProd,
  treeShaking: true,
  loader: {'.mjs': 'jsx'},
  external: ['react', 'react-dom', 'react-router-dom'],
  outExtension: { '.js': '.mjs' },
}


await esbuild.build(options)
