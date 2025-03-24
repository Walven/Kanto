import type { Preview } from '@storybook/react';

import '../../css/oakSans.css';
import '../../css/typography.css';
import '../../css/primitiveColors.css';
import '../../css/semanticColors.css';
import '../../css/border.css';
import '../../css/spacing.css';

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
