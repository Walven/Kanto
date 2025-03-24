import { PixelUnitTokenType } from './tokenTypes';

// Note: Nothing in this file is definitive

export const fontWeights = {
  semibold: '550',
  regular: '400',
  medium: '475',
};

type Typography = {
  weight: keyof typeof fontWeights;
  size: PixelUnitTokenType;
  lineHeight: PixelUnitTokenType;
  letterSpacing: PixelUnitTokenType;
};

export const typography = {
  'display-l': {
    weight: 'semibold',
    size: '80px',
    lineHeight: '96px',
    letterSpacing: '-1.5px',
  },
  'display-m': {
    weight: 'semibold',
    size: '60px',
    lineHeight: '72px',
    letterSpacing: '-1.0px',
  },
  'display-s': {
    weight: 'semibold',
    size: '48px',
    lineHeight: '58px',
    letterSpacing: '-0.5px',
  },
  'heading-xl': {
    weight: 'semibold',
    size: '40px',
    lineHeight: '48px',
    letterSpacing: '-0.4px',
  },
  'heading-l': {
    weight: 'semibold',
    size: '32px',
    lineHeight: '40px',
    letterSpacing: '-0.2px',
  },
  'heading-m': {
    weight: 'semibold',
    size: '28px',
    lineHeight: '36px',
    letterSpacing: '-0.1px',
  },
  'heading-s': {
    weight: 'semibold',
    size: '24px',
    lineHeight: '32px',
    letterSpacing: '0px',
  },
  'title-l': {
    weight: 'semibold',
    size: '18px',
    lineHeight: '24px',
    letterSpacing: '0px',
  },
  'title-m': {
    weight: 'semibold',
    size: '16px',
    lineHeight: '24px',
    letterSpacing: '0.1px',
  },
  'title-s': {
    weight: 'semibold',
    size: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
  },
  'body-l': {
    weight: 'regular',
    size: '16px',
    lineHeight: '24px',
    letterSpacing: '0.3px',
  },
  'body-m': {
    weight: 'regular',
    size: '14px',
    lineHeight: '20px',
    letterSpacing: '0.3px',
  },
  'body-s': {
    weight: 'regular',
    size: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
  },
  'body-l-moderate': {
    weight: 'medium',
    size: '16px',
    lineHeight: '24px',
    letterSpacing: '0.3px',
  },
  'body-m-moderate': {
    weight: 'medium',
    size: '14px',
    lineHeight: '20px',
    letterSpacing: '0.3px',
  },
  'body-s-moderate': {
    weight: 'medium',
    size: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
  },
  'body-l-strong': {
    weight: 'semibold',
    size: '16px',
    lineHeight: '24px',
    letterSpacing: '0.3px',
  },
  'body-m-strong': {
    weight: 'semibold',
    size: '14px',
    lineHeight: '20px',
    letterSpacing: '0.3px',
  },
  'body-s-strong': {
    weight: 'semibold',
    size: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4px',
  },
  'label-l': {
    weight: 'medium',
    size: '14px',
    lineHeight: '20px',
    letterSpacing: '0.2px',
  },
  'label-m': {
    weight: 'medium',
    size: '12px',
    lineHeight: '16px',
    letterSpacing: '0.3px',
  },
  'label-s': {
    weight: 'medium',
    size: '10px',
    lineHeight: '12px',
    letterSpacing: '0.5px',
  },
} satisfies Record<string, Typography>;
