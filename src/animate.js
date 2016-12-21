import * as d3 from 'd3'
import template from './animate.html'

export default {
  template,

  data () {
    return {
      message : '\u{F2B9}'
    }
  },

  ready () {
    //  let d3 = require('d3')
    //d3.select(this.$el).text('Hello,World!')

  },

  methods : {
      getFont () {
          let view = document.getElementById('h2').textContent
         //  console.debug(view)
         // alert(document.getElementById('h2').textContent)
         // document.getElementById('h2').textContent = view
         let context = document.getElementById('canvas').getContext('2d')
         context.fillStyle = 'green'
         context.strokeStyle = 'red'
         context.font = '48px FontAwesome'
         context.fillText(view, 10, 100)
         context.strokeText(view, 10, 100)
         //context.fillRect(10, 10, 50, 50)
      }
  }

}
