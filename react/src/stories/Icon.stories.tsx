import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Kanto/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    type: 'outline',
    size: 'L',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'info',
  },
};

export const Small: Story = {
  args: {
    name: 'info',
    size: 'S',
  },
};

export const Medium: Story = {
  args: {
    name: 'info',
    size: 'M',
  },
};

export const Solid: Story = {
  args: {
    name: 'info',
    type: 'solid',
  },
};

export const InASuccessContainer: Story = {
  args: { name: 'check' },
  render: (args) => (
    <div className="success">
      <Icon {...args} />
    </div>
  ),
};

export const InACriticalContainer: Story = {
  args: { name: 'warning' },
  render: (args) => (
    <div className="critical">
      <Icon {...args} />
    </div>
  ),
};

export const InAHighlightContainer: Story = {
  args: { name: 'info' },
  render: (args) => (
    <div className="highlight">
      <Icon {...args} />
    </div>
  ),
};

export const InAHoverSensitiveElement: Story = {
  args: { name: 'add' },
  render: (args) => (
    <div className="hover" style={{ cursor: 'pointer' }}>
      <Icon {...args} />
    </div>
  ),
};
