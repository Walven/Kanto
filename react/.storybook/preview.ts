import type { Preview } from '@storybook/react';

import '../../css/oakSans.css';
import '../../css/typography.css';
import '../../css/primitiveColors.css';
import '../../css/semanticColors.css';
import '../../css/border.css';
import '../../css/spacing.css';
import '../../css/size.css';
import { PARAM_KEY, StoryRenderer } from './addons/KantoDarkLight';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
      options: {
        dark: { name: 'Dark', value: 'var(--color-surface)' },
        light: { name: 'Light', value: 'var(--color-surface)' },
      },
      default: 'light',
    },
  },
  globalTypes: {
    [PARAM_KEY]: { type: 'string', description: 'Toggle between dark mode and light mode' },
  },
  render: StoryRenderer,
};

export default preview;
