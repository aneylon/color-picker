console.log('vue colors')

Vue.component('color-swatch', {
  props: ['socolor'],
  template: `<div>
  {{ socolor.message }}
    <div class="bigSwatch" v-bind:style="{backgroundColor: socolor.styleOne}">{{ socolor.styleOne }}
      <div class="smallSwatch" v-bind:style="{backgroundColor: socolor.styleTwo}">{{ socolor.styleTwo }}</div>
    </div>
  </div>`
})

var app = new Vue({
  el: '#colorApp',
  data: {
    title: 'Random Color Scheme Generator',
    numberOfColors: 3,
    swatches:[
      { id:0, message: 'One', styleOne: 'red', styleTwo: 'green'},
      { id:1, message: 'Two', styleOne: 'blue', styleTwo: 'orange'},
      { id:2, message: 'Three', styleOne: 'yellow', styleTwo: 'purple'}
    ]
  },
  methods: {
    generateColor: function() {
      console.log('make a new color!')
      console.log(this.numberOfColors)
      // clear swatches
      this.swatches = []
      // for each number
      for(let i = 0; i < this.numberOfColors; i++) {
        let newNum = this.randomHSLNumber()
        console.log(newNum)
        let newSwatch = this.createNewSwatch(newNum)
        console.log(newSwatch)
      }
      // create and add new swatch
      // random once, then opposite.
    },
    randomHSLNumber: function() {
      return Math.random() * 360
    },
    createNewSwatch: function(hslNumber) {
      console.log('making new swatch with hsl#:', hslNumber)
      // get opposite number
      return { primaryColor: ``, secondaryColor: ``}
    }
  },
  created: function() {
    console.log('Start me up!')
    this.generateColor()
  }
})
