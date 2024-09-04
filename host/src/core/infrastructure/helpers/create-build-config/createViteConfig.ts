import { type UserConfigExport } from 'vite';

import { buildConfig } from '../../configs';
import type { BuildType } from '../../interfaces';

const createViteConfig = (type: BuildType): UserConfigExport =>
  buildConfig[type];

export default createViteConfig;
