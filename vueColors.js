console.log('vue colors')

Vue.component('color-swatch', {
  props: ['color'],
  template: '<li>{{color}}</li>'
})

var app = new Vue({
  el: '#colorApp',
  data: {
    title: 'Random Color Scheme Generator',
    swatches:[
      { id: 0, color: '#123456'}
    ]
  }
})