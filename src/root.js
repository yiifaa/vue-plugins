import template from './root.html'
import Vue from 'vue'
import $ from 'jquery'

let AppRoot = Vue.extend({
    template,
    
    data () {
        return {
            shown : true
        }    
    },
    
    computed : {
        message () {
            return this.shown ? '隐藏' : '显示'
        }
    },
    
    methods : {
        
        toggle () {
            this.shown = !this.shown
            $('.col-xs-4:first', this.$el).css({
                color : 'blue',
                'font-size' : 22
            })
            /**
            if(this.shown) {
                this.message = '隐藏'
            } else {
                this.message = '显示'
            }
            **/
        }
        
    }
})

export default AppRoot