console.log('vue colors')

Vue.component('color-swatch', {
  props: ['color'],
  template: '<li>{{color}}</li>'
})

var app = new Vue({
  el: '#colorApp',
  data: {
    title: 'Random Color Scheme Generator',
    numberOfColors: 3,
    swatches:[
      { id: 0, color: '#123456'}
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