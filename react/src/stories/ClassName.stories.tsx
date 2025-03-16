import { Meta, StoryContext, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';
import { Icon } from './Icon';

type ClassNameProps = {
  typography: string;
  typographyVariant: string | undefined;
  acceptHover: boolean;
  colorVariant: 'strong' | 'muted' | 'subtle' | 'selected' | undefined;
  colorType: string | undefined;
  applyColorToText: boolean;
  applyColorToBackground: boolean;
  children?: ReactNode;
  borderSize?: string | undefined;
  borderRadius: string | undefined;
};

const getClassName = (props: ClassNameProps) =>
  [
    'padding-200 typography',
    props.typography,
    props.typographyVariant,
    props.acceptHover ? 'hover' : undefined,
    props.applyColorToText ? 'text-color' : undefined,
    props.applyColorToBackground ? 'background-color' : undefined,
    props.colorVariant,
    props.colorType,
    props.borderRadius || props.borderSize ? 'border' : undefined,
    props.borderSize,
    props.borderRadius,
  ]
    .filter((c) => !!c)
    .join(' ');

const ComponentWithClassName = (props: ClassNameProps) => {
  const className = getClassName(props);

  if (props.children) return <div className={className}>{props.children}</div>;
  return <div className={className}>{className}</div>;
};

const meta = {
  title: 'Kanto/ClassNames',
  component: ComponentWithClassName,
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        transform: (code: string, storyContext: StoryContext<ClassNameProps>) => {
          const className = getClassName(storyContext.args);
          if (storyContext.name !== 'Example with Icon') return className;

          return code.replaceAll('ComponentWithClassName', 'div').replace(/div\n[^>]+/m, `div className="${className}"`);
        },
      },
      description: {
        component: 'Classes you can assign to a component in order to style it',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    acceptHover: {
      name: 'Accepts Hover interaction',
      description: 'Enables the hover effect when the mouse goes over',
    },
    applyColorToBackground: {
      name: 'Apply color type & variant to background',
    },
    applyColorToText: {
      name: 'Apply color type & variant to text',
    },
    borderRadius: {
      name: 'Border radius',
      options: [
        'radius-sharp',
        'radius-none',
        'radius-xs',
        'radius-s',
        'radius-m',
        'radius-l',
        'radius-xl',
        'radius-round',
        'radius-full',
        undefined,
      ],
      control: {
        type: 'select',
        labels: {
          'radius-sharp': 'Sharp',
          'radius-none': 'None',
          'radius-xs': 'XS',
          'radius-s': 'S',
          'radius-m': 'M',
          'radius-l': 'L',
          'radius-xl': 'XL',
          'radius-round': 'Round',
          'radius-full': 'Full',
          undefined: 'Auto',
        },
      },
    },
    borderSize: {
      name: 'Border size',
      options: ['width-0', 'width-100', 'width-200', 'width-300', 'width-400', undefined],
      control: {
        type: 'select',
        labels: {
          'width-0': '0',
          'width-100': '100',
          'width-200': '200',
          'width-300': '300',
          'width-400': '400',
          undefined: 'Auto',
        },
      },
    },
    typography: {
      name: 'Typography',
      options: [
        'display-l',
        'display-m',
        'display-s',
        'heading-xl',
        'heading-l',
        'heading-m',
        'heading-s',
        'title-l',
        'title-m',
        'title-s',
        'body-l',
        'body-m',
        'body-s',
        'label-l',
        'label-m',
        'label-s',
      ],
      control: {
        type: 'select',
        labels: {
          'display-l': 'Display L',
          'display-m': 'Display M',
          'display-s': 'Display S',
          'heading-xl': 'Heading XL',
          'heading-l': 'Heading L',
          'heading-m': 'Heading M',
          'heading-s': 'Heading S',
          'title-l': 'Title L',
          'title-m': 'Title M',
          'title-s': 'Title S',
          'body-l': 'Body L',
          'body-m': 'Body M',
          'body-s': 'Body S',
          'label-l': 'Label L',
          'label-m': 'Label M',
          'label-s': 'Label S',
        },
      },
    },
    typographyVariant: {
      name: 'Typography Variant',
      description: 'Applies to body typography only',
      options: ['moderate', 'strong', undefined],
      control: {
        type: 'select',
        labels: {
          undefined: 'No variant',
        },
      },
    },
    colorType: {
      name: 'Type of color',
      options: ['accent', 'success', 'critical', 'highlight', undefined],
      control: {
        type: 'select',
        labels: {
          accent: 'Accent',
          success: 'Success',
          critical: 'Critical',
          highlight: 'Highlight',
          undefined: 'Default',
        },
      },
    },
    colorVariant: {
      name: 'Color variant',
      options: ['strong', 'muted', 'subtle', 'selected', undefined],
      control: {
        type: 'select',
        labels: {
          strong: 'Strong',
          muted: 'Muted',
          subtle: 'Subtle',
          selected: 'Selected',
          undefined: 'Default',
        },
      },
    },
  },
  decorators: (Story) => (
    <p>
      <Story />
    </p>
  ),
} satisfies Meta<typeof ComponentWithClassName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    acceptHover: true,
    applyColorToBackground: true,
    applyColorToText: true,
    borderRadius: 'radius-m',
    borderSize: 'width-100',
    colorType: undefined,
    colorVariant: 'muted',
    typography: 'body-m',
    typographyVariant: undefined,
  },
};

export const ExampleWithIcon: Story = {
  name: 'Example with Icon',
  args: {
    acceptHover: false,
    applyColorToBackground: true,
    applyColorToText: true,
    borderRadius: 'radius-xl',
    borderSize: 'width-100',
    colorType: 'success',
    colorVariant: 'subtle',
    typography: 'body-m',
    typographyVariant: 'moderate',
    children: (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Icon name="check" size="L" />
        <span>Success</span>
      </div>
    ),
  },
};
