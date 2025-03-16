import type { Preview } from '@storybook/react';

import '../../css/oakSans.css';
import '../../css/typography.css';
import '../../css/colors/mainColors.css';
import '../../css/colors/background.css';
import '../../css/colors/border.css';
import '../../css/colors/text.css';
import '../../css/sizes/gap.css';
import '../../css/sizes/spacing.css';
import '../../css/sizes/margin.css';
import '../../css/sizes/padding.css';
import '../../css/sizes/border.css';

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
