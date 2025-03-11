import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig, searchForWorkspaceRoot } from 'vite';

const workspace = searchForWorkspaceRoot(process.cwd());

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      server: {
        fs: { allow: (config.server?.fs?.allow ?? []).concat(['../fonts/OakSans/fonts/webFonts', workspace]) },
      },
    });
  },
};
export default config;
