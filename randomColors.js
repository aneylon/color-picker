function createHslColor(hue) {
  return `hsl(${hue}, 100%, 50%)`
}

function createHslCompliment(hue) {
  var complimententaryHue = hue + 180

  if (complimententaryHue > 360) {
    complimententaryHue = complimententaryHue - 360
  }

  return createHslColor(complimententaryHue)
}

function createRandomHslNumber(min, max) {
  var min = min || 0 // do this right
  var max = max || 360
  return Math.floor(Math.random() * max)
}