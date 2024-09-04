import { defineConfig } from 'vite';

import { Helpers } from './src/core/infrastructure';

const { createViteConfig } = Helpers;

export default defineConfig(createViteConfig('SITE'))
