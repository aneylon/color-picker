console.log('vue colors')

Vue.component('color-swatch', {
  props: ['socolor'],
  template: `<div>
  {{ socolor.message }}
    <div class="bigSwatch" v-bind:style="{backgroundColor: socolor.primaryColor}">{{ socolor.primaryColor }}
      <div class="smallSwatch" v-bind:style="{backgroundColor: socolor.secondaryColor}">{{ socolor.secondaryColor }}</div>
    </div>
  </div>`
})

var app = new Vue({
  el: '#colorApp',
  data: {
    title: 'Random Color Scheme Generator',
    numberOfColors: 2,
    swatches:[]
  },
  methods: {
    generateColor: function() {
      this.swatches = []
      for(let i = 0; i < this.numberOfColors; i++) {
        let newSwatchHSL = this.createHslSwatch(`HSL${i}`)
        let newSwatchRGB = this.createRGBSwatch(`RGB${i}`)
        this.swatches.push(newSwatchHSL)
        this.swatches.push(newSwatchRGB)
      }
    },
    createHslSwatch: function(id) {
      let hue = this.randomNumber(360)
      let saturation = this.randomNumber(100)
      let lightness = this.randomNumber(100)

      return {
        id,
        primaryColor: this.hslColorString(hue, saturation, lightness),
        secondaryColor: this.hslColorComplimentString(hue, saturation, lightness)
      }
    },
    randomRGBNumber: function(){
      return `rgb(${this.randomNumber(255)}, ${this.randomNumber(255)}, ${this.randomNumber(255)})`
    },
    randomNumber: function(max) {
      return Math.floor(Math.random() * max)
    },
    hslColorString: function (hue, saturation, lightness) {
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`
    },
    hslColorComplimentString: function (hue, saturation, lightness) {
      if(hue > 180)
        return `hsl(${hue - 180}, ${saturation}%, ${lightness}%)`
      else
        return `hsl(${hue + 180}, ${saturation}%, ${lightness}%)`
    },
    createRGBSwatch: function (id) {
      let numbers = {
        red: this.randomNumber(255),
        green: this.randomNumber(255),
        blue: this.randomNumber(255)
      }
      return {
        id,
        primaryColor: this.createRGBPrimary(numbers),
        secondaryColor: this.createRGBCompliment(numbers)
      }
    },
    createRGBPrimary: function (numbers) {
      return `rgb(${numbers.red},${numbers.green},${numbers.blue})`
    },
    createRGBCompliment: function (numbers) {
      for(number in numbers) {
        let compliment = numbers[number] + 127
        if(compliment > 255) {
          compliment -= 255
        }
        numbers[number] = compliment
      }
      return `rgb(${numbers.red},${numbers.green},${numbers.blue})`
    }
  },
  created: function() {
    this.generateColor()
  }
})
