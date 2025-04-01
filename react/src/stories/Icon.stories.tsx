import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { withKantoDarkLightRenderer } from '../../.storybook/addons/KantoDarkLight';

const meta = {
  title: 'Kanto/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    style: 'outline',
    size: 'm',
  },
  argTypes: {
    size: { control: { type: 'select' } },
    style: { control: { type: 'select' } },
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
    size: 's',
  },
};

export const Solid: Story = {
  args: {
    name: 'info',
    style: 'solid',
  },
};

export const UsingStaticColor: Story = {
  args: { name: 'info', color: 'static-black' },
};

export const InASuccessContainer: Story = {
  args: { name: 'check' },
  render: withKantoDarkLightRenderer((args) => (
    <div className="success">
      <Icon {...args} />
    </div>
  )),
};

export const InACriticalContainer: Story = {
  args: { name: 'warning' },
  render: withKantoDarkLightRenderer((args) => (
    <div className="critical">
      <Icon {...args} />
    </div>
  )),
};

export const InAHighlightContainer: Story = {
  args: { name: 'info' },
  render: withKantoDarkLightRenderer((args) => (
    <div className="highlight">
      <Icon {...args} />
    </div>
  )),
};

export const InAHoverSensitiveElement: Story = {
  args: { name: 'add' },
  render: withKantoDarkLightRenderer((args) => (
    <div className="hover" style={{ cursor: 'pointer' }}>
      <Icon {...args} />
    </div>
  )),
};
