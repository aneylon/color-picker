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
    numberOfColors: 3,
    swatches:[]
  },
  methods: {
    generateColor: function() {
      this.swatches = []
      for(let i = 0; i < this.numberOfColors; i++) {
        // let newNum = this.randomHSLNumber()
        // let newSwatch = this.createNewSwatch(newNum, i)
        let newSwatch = this.createRGBSwatch(i)
        this.swatches.push(newSwatch)
      }
    },
    randomRGBNumber: function(){
      return `rgb(${this.randomNumber(255)}, ${this.randomNumber(255)}, ${this.randomNumber(255)})`
    },
    randomHSLNumber: function() {
      return this.randomNumber(360)
    },
    randomNumber: function(max) {
      return Math.floor(Math.random() * max)
    },
    createNewSwatch: function(hslNumber, id) {
      return {
        id,
        primaryColor: this.hslColorString(hslNumber),
        secondaryColor: this.hslColorComplimentString(hslNumber)
      }
    },
    hslColorString: function (hslNumber) {
      return `hsl(${hslNumber}, ${this.randomHSLNumber(100)}%, ${this.randomNumber(100)}%)`
    },
    hslColorComplimentString: function (hslNumber) {
      if(hslNumber > 180)
        return `hsl(${hslNumber - 180}, 100%, 50%)`
      else
        return `hsl(${hslNumber + 180}, 100%, 50%)`
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
      console.log(numbers)
      for(number in numbers) {
        console.log(number, numbers[number])
        let compliment = numbers[number] + 127
        if(compliment > 255) {
          compliment -= 255
        }
        numbers[number] = compliment
      }
      console.log(numbers)
      return `rgb(${numbers.red},${numbers.green},${numbers.blue})`
    }
  },
  created: function() {
    this.generateColor()
  }
})
