import fs from 'fs';
import path from 'path';
import { fontWeights, typography } from './typography';
import { palette } from './palette';
import { ColorMixTokenType, colorMixTokenValueToString } from './tokenTypes';
import { colors } from './colors';
import { borderRadiuses, borderWidths } from './border';
import { spacing } from './spacing';
import { iconColorSelectors, iconSizeSelectors } from './components/icon';

const cssRoot = path.join(__dirname, '..', 'css');

/**
 * Generation of typography.css
 * @note This function may be subjected to change when typography tokens will be generated
 */
const generateTypographyCSS = () => {
  const entries = Object.entries(typography);
  const cssClasses = entries.map(
    ([className, typography]) =>
      `.${className} {
  font-family: OakSans, system-ui;
  font-weight: ${fontWeights[typography.weight]};
  font-size: ${typography.size};
  line-height: ${typography.lineHeight};
  letter-spacing: ${typography.letterSpacing};
}
`
  );
  fs.writeFileSync(path.join(cssRoot, 'typography.css'), cssClasses.join('\n'));
};

const combineCSSVariablesInRoot = (input: string[]) => `:root {
  ${input.join('\n  ')}
}
`;

const toVariableOrColorMix = <T extends string>(input: string | ColorMixTokenType<T>) => {
  if (typeof input === 'string') {
    if (input.startsWith('color-') || input.startsWith('palette-')) return `var(--${input})`;

    return input;
  }
  return colorMixTokenValueToString(input);
};

const lightDarkColor = <T extends string>(
  light: string | ColorMixTokenType<T>,
  dark: string | ColorMixTokenType<T>
) => {
  if (light === dark) return toVariableOrColorMix(light);

  return `light-dark(${toVariableOrColorMix(light)}, ${toVariableOrColorMix(dark)})`;
};

/**
 * Generation of primitiveColors.css and semanticColors.css
 */
const generateColorsCSS = () => {
  const paletteEntries = Object.entries(palette);
  const paletteCssVariables = paletteEntries.map(([token, value]) =>
    typeof value === 'string' ? `--${token}: ${value};` : `--${token}: ${colorMixTokenValueToString(value)};`
  );
  fs.writeFileSync(
    path.join(cssRoot, 'primitiveColors.css'),
    combineCSSVariablesInRoot(['color-scheme: light dark;', ...paletteCssVariables])
  );

  const colorEntries = Object.entries(colors);
  const colorCSSVariables = colorEntries.map(
    ([token, { dark, light }]) => `--${token}: ${lightDarkColor(light, dark)};`
  );
  fs.writeFileSync(path.join(cssRoot, 'semanticColors.css'), combineCSSVariablesInRoot(colorCSSVariables));
};

/**
 * Generation of border.css
 */
const generateBorderCSS = () => {
  const borderRadiusEntries = Object.entries(borderRadiuses);
  const borderWidthEntries = Object.entries(borderWidths);
  const variables = borderRadiusEntries
    .map(([token, value]) => `--${token}: ${value};`)
    .concat(borderWidthEntries.map(([token, value]) => `--${token}: ${value};`));

  fs.writeFileSync(path.join(cssRoot, 'border.css'), combineCSSVariablesInRoot(variables));
};

/**
 * Generation of spacing.css
 */
const generateSpacingCSS = () => {
  const spaceEntries = Object.entries(spacing);
  const variables = spaceEntries.map(([token, value]) => `--${token}: ${value};`);

  fs.writeFileSync(path.join(cssRoot, 'spacing.css'), combineCSSVariablesInRoot(variables));
};

const toCSSRule = (selectors: string[], rules: string[]) => `${selectors.join(',\n')} {\n  ${rules.join('\n  ')}\n}`;

/**
 * Generation of components/icon.css
 */
const generateComponentIconCSS = () => {
  const colorEntries = Object.entries(iconColorSelectors);
  const colorRules = colorEntries.map(([token, selectors]) => toCSSRule(selectors, [`color: var(--${token});`]));
  const sizeEntries = Object.entries(iconSizeSelectors);
  const sizeRules = sizeEntries.map(([size, selectors]) =>
    toCSSRule(selectors, [`width: ${size};`, `height: ${size};`])
  );

  fs.writeFileSync(path.join(cssRoot, 'components/icon.css'), colorRules.concat(sizeRules).join('\n\n'));
};

generateTypographyCSS();
generateColorsCSS();
generateBorderCSS();
generateSpacingCSS();
generateComponentIconCSS();
