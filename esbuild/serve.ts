import { build } from 'esbuild';
import chokidar from 'chokidar';
import liveServer from 'live-server';

(async () => {
  const builder = await build({
    bundle: true,
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    },
    entryPoints: ['src/index.tsx'],
    incremental: true,
    minify: process.env.NODE_ENV === 'production',
    outfile: 'public/script.js',
    sourcemap: true,
  });
  chokidar
    .watch('src/**/*.{ts,tsx}', {
      interval: 0,
    })
    .on('all', () => {
      builder.rebuild();
    });
  liveServer.start({
    open: true,
    port: 8080,
    root: 'public',
  });
})();
