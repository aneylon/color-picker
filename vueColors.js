console.log('vue colors')

Vue.component('color-swatch', {
  props: ['color', 'compliment'],
  template: `<li>
    <div class="colorSwatch" v-bind:style="{backgroundColor: color}">
    {{color}}
      <div class="complimentSwatch" v-bind:style="{backgroundColor: compliment}">
        {{compliment}}
      </div>
    </div>
  </li>`
})

var app = new Vue({
  el: '#colorApp',
  data: {
    title: 'Random Color Scheme Generator',
    numberOfColors: 3,
    swatches:[
      { id: 0, color: '#123456', compliment: '#abcdef'},
      {
        id: 1,
        color: 'hsl(123, 100%, 50%)',
        compliment: 'hsl(303, 100%, 50%)'
      }
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