import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { BADGE_DECORATION_COLORS } from '../../../components/badge';
import { Icon } from './Icon';
import { Label } from './Label';

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
    children: {
      options: ['With Icon', 'Without Icon', 'Without Label'],
      mapping: {
        'With Icon': [<Icon name="circle" />, <Label>Badge</Label>],
        'Without Icon': <Label>Badge</Label>,
        'Without Label': <Icon name="circle" />,
      },
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
    icon: 'icon',
    children: [<Icon name="circle" />, <Label>Badge</Label>],
  },
};

export const WithNoIcon: Story = {
  args: {
    type: 'critical',
    style: 'solid',
    size: 'xs',
    children: <Label>12</Label>,
  },
};

export const IconOnly: Story = {
  args: {
    type: 'accent',
    style: 'soft',
    size: 's',
    icon: 'icon-only',
    children: <Icon name="circle" />,
  },
  parameters: {
    docs: { description: { story: 'Badge in `xs` size is not supported.' } },
  },
};

export const UsingDecorativeColor: Story = {
  args: {
    type: 'decorative-fuchsia',
    style: 'soft',
    size: 'm',
    children: [<Icon name="circle" />, <Label>Badge</Label>],
  },
  parameters: {
    docs: { description: { story: 'Does not support solid style on the badge itself. (Solid icon remain supported in features.)' } },
  },
};

export const IllegalBadge: Story = {
  args: {
    type: 'decorative-olive',
    style: 'soft',
    size: 'm',
    children: [
      <Icon name="clear" style="solid" />,
      <Icon name="circle" color="static-black" />,
      <Label>Usually not happening</Label>,
      <Icon name="close" />,
    ],
  },
};
