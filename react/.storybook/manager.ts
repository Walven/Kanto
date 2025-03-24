import { addons, types } from '@storybook/manager-api';
import { ADDON_ID, TOOL_ID, Tool } from './addons/KantoDarkLight';

addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Dark Light Toggle',
    match: ({ tabId, viewMode }) => !tabId && (viewMode === 'story' || viewMode === 'docs'),
    render: Tool,
  });
});
