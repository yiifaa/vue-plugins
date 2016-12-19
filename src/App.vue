<template>
  <div id="app">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
      msg: 'Hello, Vue!'
    }
  },

  ready () {
    $('h1', this.$el).css({color : 'blue'})
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
