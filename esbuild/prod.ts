import { build } from 'esbuild';

import { config } from './config';

build(config).catch(console.log);
