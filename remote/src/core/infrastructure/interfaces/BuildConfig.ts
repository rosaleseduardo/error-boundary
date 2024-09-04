import type { UserConfig } from 'vite';

export type BuildType = 'LIB' | 'SITE';

export type ConfigObject = Record<BuildType, UserConfig>;
