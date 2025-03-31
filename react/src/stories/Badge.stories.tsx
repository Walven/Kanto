import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { BADGE_DECORATION_COLORS } from '../../../foundations/components/badge';

const meta = {
  title: 'Kanto/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { options: ['m', 's', 'xs'], control: 'select' },
    style: { control: { type: 'select' } },
    type: { options: ['neutral', 'accent', 'success', 'critical', 'highlight', ...BADGE_DECORATION_COLORS.map((v) => `decorative-${v}`)] },
    features: {
      description: 'All the features added to badge.  \n*Cannot be set when `size="xs"`*',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SolidNeutral: Story = {
  args: {
    type: 'neutral',
    style: 'solid',
    size: 'm',
    label: 'Badge',
    features: [{ type: 'icon', name: 'circle' }],
  },
};

export const WithNoIcon: Story = {
  args: {
    type: 'critical',
    style: 'solid',
    size: 'xs',
    label: '12',
  },
};

export const IconOnly: Story = {
  args: {
    type: 'accent',
    style: 'soft',
    size: 's',
    features: [{ type: 'icon', name: 'info' }],
  },
};

export const UsingDecorativeColor: Story = {
  args: {
    type: 'decorative-fuchsia',
    style: 'soft',
    label: 'Label',
    features: [{ type: 'icon', name: 'clear' }],
    size: 'm',
  },
  parameters: {
    docs: { description: { story: 'Does not support solid style on the badge itself. (Solid icon remain supported in features.)' } },
  },
};

export const IllegalBadge: Story = {
  args: {
    type: 'decorative-olive',
    style: 'soft',
    label: 'Usually not happening',
    size: 'm',
    features: [
      { type: 'icon', name: 'clear', style: 'solid' },
      { type: 'icon', name: 'circle' },
      { type: 'icon', name: 'close', position: 'after' },
    ],
  },
};
