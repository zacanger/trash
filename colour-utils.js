'use strict'

// colour utilities
const hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i

// takes string colour, returns bool
export const isHexBased = color => hex.text(color)

// takes string colour, returns bool
export const isValidHex = color => isHexBased(trimSpaces(color))

// takes string colour, returns either string or null
export const normalizeColor = color => {
  let nextColor = trimSpaces(color)
  if (!isHexBased(color)) {
    return null
  }
  nextColor = trimHash(nextColor)
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, d => d + d)
  }
  return nextColor.toUpperCase()
}

// takes string colour, returns string
export const trimHash = color => typeof color === 'string' ? color.replace('#', '') : color

// takes string colour, returns string
export const trimSpaces = color => typeof color === 'string' ? color.replace(/\s/g, '') : color
