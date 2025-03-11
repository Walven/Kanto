import type { Preview } from '@storybook/react';

import '../../css/oakSans.css';
import '../../css/colors/wip.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
