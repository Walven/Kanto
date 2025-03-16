# Work in current script directory
Dir.chdir(File.dirname(__FILE__))

main_colors_css = File.binread('mainColors.css')
# Replacing the whole dark preference section with a placeholder
main_colors_css.sub!(
  /\@media \(prefers-color-scheme\: dark\) {\n[ \t]+\:root {[^}]+}[^}]+}/,
  "<dark>"
)
# Replacing the whole light preference section with a placeholder
main_colors_css.sub!(
  /\@media \(prefers-color-scheme\: light\) {\n[ \t]+\:root {[^}]+}[^}]+}/,
  "<light>"
)

SUPPORTED_GENERIC_ALPHA_TOKENS = %i[neutral accent]

generic_token_light_map = {
  neutral: :iron,
  accent: :indigo,
  success: :emerald,
  critical: :cinnabar,
  highlight: :sapphire,
}

generic_token_dark_map = {
  neutral: :iron,
  accent: :indigo,
  success: :viridian,
  critical: :ruby,
  highlight: :sapphire,
}

floating_dark_colors = {
  "--color-surface-default": "--color-alias-neutral-2"
}

floating_light_colors = {
  "--color-surface-default": "--color-alias-neutral-1"
}

def load_palette(filename)
  File.readlines(filename)
    .select { |l| l.include?('--palette-') }
    .map { |l| l.strip.sub(';', '').sub(': ', ':').split(':') }
    .to_h
end

dark_palette = load_palette('paletteDark.css')
light_palette = load_palette('paletteLight.css')

BAD_COLOR = 'red'

def append_color(palette, color_name, palette_name, buffer, missing_colors)
  unless color = palette[palette_name]
    missing_colors << palette_name
    color = BAD_COLOR
  else
    palette[color_name] = color
  end
  buffer << "    #{color_name}: #{color};\n"
end

def build_colors(palette, generic_tokens, floating_colors)
  missing_colors = []
  buffer = ""
  bad_color = 'red'

  generic_tokens.each do |type, palette_id|
    buffer << "    /* alias: #{type}, palette: #{palette_id} */\n"
    1.upto(15) do |i|
      color_name = "--color-alias-#{type}-#{i}"
      palette_name = "--palette-#{palette_id}-#{i}"
      append_color(palette, color_name, palette_name, buffer, missing_colors)
    end
  end

  SUPPORTED_GENERIC_ALPHA_TOKENS.each do |type|
    palette_id = generic_tokens[type]
    buffer << "    /* alias: #{type}-alpha, palette: #{palette_id}-alpha */\n"
    1.upto(15) do |i|
      color_name = "--color-alias-#{type}-alpha-#{i}"
      palette_name = "--palette-#{palette_id}-alpha-#{i}"
      append_color(palette, color_name, palette_name, buffer, missing_colors)
    end
  end

    buffer << "    /* floating colors */\n"
  floating_colors.each do |color_name, palette_name|
    append_color(palette, color_name, palette_name, buffer, missing_colors)
  end
  return [buffer, missing_colors]
end

dark_colors, missing_dark_colors = build_colors(dark_palette, generic_token_dark_map, floating_dark_colors)
light_colors, missing_light_colors = build_colors(light_palette, generic_token_light_map, floating_light_colors)

if missing_dark_colors.any? || missing_light_colors.any?
  if missing_dark_colors.any?
    puts "Missing dark colors in paletteDark.css:", missing_dark_colors
  end
  if missing_light_colors.any?
    puts "Missing light colors in paletteLight.css:", missing_light_colors
  end
  exit!(1) # Explicit failure
end

main_colors_css.sub!('<dark>', "@media (prefers-color-scheme: dark) {\n  :root {\n#{dark_colors}  }\n}")
main_colors_css.sub!('<light>', "@media (prefers-color-scheme: light) {\n  :root {\n#{light_colors}  }\n}")

File.binwrite('mainColors.css', main_colors_css)

exit!(0) # Explicit success
