console.log('vue colors')

Vue.component('color-swatch', {
  props: ['colorInfo'],
  template: `<div>
  {{ colorInfo.message }}
    <div class="bigSwatch" v-bind:style="{backgroundColor: colorInfo.styleOne}">{{ colorInfo.styleOne }}
      <div class="smallSwatch" v-bind:style="{backgroundColor: colorInfo.styleTwo}">{{ colorInfo.styleTwo }}</div>
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
    }
  },
  created: function() {
    console.log('Start me up!')
    this.generateColor()
  }
})
