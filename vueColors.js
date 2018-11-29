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
        let newNum = this.randomHSLNumber()
        let newSwatch = this.createNewSwatch(newNum, i)
        this.swatches.push(newSwatch)
      }
    },
    randomRGBNumber: function(){
      return `rgb(${this.randomNumber(255)}, ${this.randomNumber(255)}, ${this.randomNumber(255)})`
    }
    randomHSLNumber: function() {
      return this.randomNumber(360)
    },
    randomNumber: function(max) {
      return Math.floor(Math.random() * max)
    },
    createNewSwatch: function(hslNumber, id) {
      return { id, primaryColor: this.hslColorString(hslNumber), secondaryColor: this.hslColorComplimentString(hslNumber)}
    },
    hslColorString: function (hslNumber) {
      return `hsl(${hslNumber}, 100%, 50%)`
    },
    hslColorComplimentString: function (hslNumber) {
      if(hslNumber > 180)
        return `hsl(${hslNumber - 180}, 100%, 50%)`
      else
        return `hsl(${hslNumber + 180}, 100%, 50%)`
    }
  },
  created: function() {
    this.generateColor()
  }
})
