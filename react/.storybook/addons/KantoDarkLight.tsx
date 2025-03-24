import React, { memo, useCallback } from 'react';

import { useGlobals } from '@storybook/manager-api';
import { IconButton } from '@storybook/components';
import { MoonIcon, SunIcon } from '@storybook/icons';
import { ArgsStoryFn, StrictArgs } from 'storybook/internal/types';
import { ReactRenderer, StoryContext } from '@storybook/react';

export const ADDON_ID = 'kanto-dark-light-addon';
export const PARAM_KEY = 'kanto-dark-light';
export const TOOL_ID = 'kanto-dark-light-tool';

export const Tool = memo(function MyAddonSelector() {
  const [globals, updateGlobals] = useGlobals();

  const mode = globals[PARAM_KEY] === 'dark' ? 'dark' : 'light';
  const nextMode = mode === 'dark' ? 'light' : 'dark';

  const toggleMyTool = useCallback(() => {
    updateGlobals({
      [PARAM_KEY]: nextMode,
    });
  }, [nextMode]);

  return (
    <IconButton key={TOOL_ID} title={`Toggle to ${nextMode}`} onClick={toggleMyTool}>
      {mode === 'light' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
});

const setCanvasContextForKantoDarkLight = (context: StoryContext) => {
  const mode = context.globals[PARAM_KEY] === 'dark' ? 'dark' : 'light';
  context.canvasElement.className = `kanto-${mode}`;
};

export const withKantoDarkLightRenderer =
  <T extends StrictArgs>(render: ArgsStoryFn<ReactRenderer, T>): ArgsStoryFn<ReactRenderer, T> =>
  (args, context) => {
    setCanvasContextForKantoDarkLight(context);
    return render(args, context);
  };

export const StoryRenderer: ArgsStoryFn<ReactRenderer> = (args, context) => {
  setCanvasContextForKantoDarkLight(context);
  return context.component ? <context.component {...args} /> : <></>;
};
