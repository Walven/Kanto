# Kanto Colors

This folder holds all the official Kanto Colors. Those colors are stored in 3 files:

- `paletteDark.css`: containing the Kanto Color Palette for Dark preference
- `paletteLight.css`: containing the Kanto Color Palette for Light preference
- `mainColors.css`: containing the Kanto Color alias for other files

We use `preComputeMainColors.rb` to merge `paletteDark.css` and `paletteLight.css` into `mainColors.css`. This aim to reduce the number of lookup browser will have to do to figure out the color from palette.

All the other files (such as `icon.css`) are referring to the alias colors from `mainColors.css`. Later on, we'll implement a better solution to handle palettes.
