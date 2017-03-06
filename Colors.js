function makeRandomColor(){
  var newColor = makeColor(randomNumber(),randomNumber(),randomNumber())
  return newColor
}

function makeColor(red, green, blue){
  return `rgb(${red}, ${green}, ${blue})`
}

function randomNumber(max){
  max = max || 255
  return Math.floor((Math.random() * max) + 1)
}

function makeSwatches(){
  var num = Number(document.getElementById('numberOfColors').value)
  // clear swatches
  var root = document.getElementById('colors')
  root.innerHTML = ''
  // add new swatches
  for(var i = 0; i < num; i++){
    var newSwatch = document.createElement('div')
    // set swatch color
    newSwatch.style.backgroundColor = makeRandomColor()
    newSwatch.setAttribute('class', 'colorBlock')
    root.appendChild(newSwatch)

  }
}
