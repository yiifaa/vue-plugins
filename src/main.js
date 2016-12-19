import Vue from 'vue'
import App from './App.vue'
import $ from 'jquery'

let app= Vue.extend(App)

new app({
  replace : false,
  el : 'body'
})
