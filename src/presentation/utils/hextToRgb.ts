export interface RGB {
  b: number
  g: number
  r: number
}

const DEFAULT_RGB_COLOR: RGB = {
  g: 255,
  r: 255,
  b: 255,
}

export function hexToRgb(hex: string) {
  // Check if the input is a valid hexadecimal color code
  const hexRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/

  if (!hexRegex.test(hex)) {
    return `rgb(${DEFAULT_RGB_COLOR.r}, ${DEFAULT_RGB_COLOR.g}, ${DEFAULT_RGB_COLOR.b}, 1)`
  }

  // Remove the '#' symbol if present
  hex = hex.replace('#', '')

  // Check if the input is a shorthand hexadecimal color code (e.g., #ABC)
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('')
  }

  const red = parseInt(hex.substring(0, 2), 16)
  const green = parseInt(hex.substring(2, 4), 16)
  const blue = parseInt(hex.substring(4, 6), 16)

  return `rgba(${red}, ${green}, ${blue}, 1)`
}
