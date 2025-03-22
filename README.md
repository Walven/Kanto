# Kanto Design System

This repository contains the definition and implementations of Kanto.

## Foundations

The foundations contains the tokens and their values. This is the place where maintenance should be done in regard of token attribution.

Currently, it's using typescript files. In the future it'll be based of json files (when a standard for token will be official and usable in Figma).

## CSS implementation

The CSS implementation is contained in the css folder. It is generated through `npm start` which runs the `foundations/generateCSS.ts` file.

The source of truth for CSS values should always be the foundations folder.
