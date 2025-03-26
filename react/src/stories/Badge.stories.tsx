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
    size: { control: { type: 'select' } },
    style: { control: { type: 'select' } },
    type: { options: ['neutral', 'accent', 'success', 'critical', 'highlight', ...BADGE_DECORATION_COLORS.map((v) => `decorative-${v}`)] },
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
    icon: 'circle',
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
    icon: 'info',
  },
};

export const UsingDecorativeColor: Story = {
  args: {
    type: 'decorative-fuchsia',
    style: 'soft',
    label: 'Label',
    icon: 'clear',
    size: 'm',
  },
  parameters: {
    docs: { description: { story: 'Does not support solid style' } },
  },
};
