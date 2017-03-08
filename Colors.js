function makeRandomColor(){
  var red = randomNumber()
  var green = randomNumber()
  var blue = randomNumber()
  var rgbString = makeRGBString(red, green, blue)
  var hexString = makeHexString(red, green, blue)
  return {
    rgbString,
    hexString
  }
}

function makeHexString(red, green, blue){
  return Array.prototype.reduce.call(arguments, (acc, cur) => {
    tmp = cur.toString(16)

    if(tmp.length == 1) tmp = '0' + tmp

    return acc + tmp
  }, '#')
}

function makeRGBString(red, green, blue){
  return `rgb(${red}, ${green}, ${blue})`
}

function randomNumber(max){
  max = max || 255
  return Math.floor((Math.random() * max) + 1)
}

function makeSwatches(num){
  num = num || Number(document.getElementById('numberOfColors').value)
  // var num = Number(document.getElementById('numberOfColors').value)
  // clear swatches
  var root = document.getElementById('colors')
  root.innerHTML = ''
  // add new swatches
  for(var i = 0; i < num; i++){
    var newSwatch = document.createElement('div')
    // set swatch color
    var randomColor = makeRandomColor()
    newSwatch.style.backgroundColor = randomColor.rgbString
    newSwatch.innerHTML = `<p>${randomColor.hexString}</p>`
    console.log(randomColor.hexString)
    newSwatch.setAttribute('class', 'colorBlock')
    root.appendChild(newSwatch)

  }
}

function init() {
  document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault()
  })
  makeSwatches(3)
}
