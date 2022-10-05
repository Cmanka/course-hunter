import { BuildOptions } from 'esbuild';
import path from 'path';

import { CleanPlugin } from './plugins/clean-plugin';
import { HTMLPlugin } from './plugins/html-plugin';

export const config: BuildOptions = {
  outdir: path.resolve(__dirname, '..', 'build'),
  entryPoints: [path.resolve(__dirname, '..', 'src', 'index.tsx')],
  entryNames: '[dir]/bundle.[name]-[hash]',
  tsconfig: path.resolve(__dirname, '..', 'tsconfig.json'),
  bundle: true,
  allowOverwrite: true,
  minify: false, // Change on prod
  sourcemap: true, // Change on prod
  metafile: true,
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.svg': 'file',
  },
  plugins: [CleanPlugin, HTMLPlugin({ title: 'course hunter' })],
};
