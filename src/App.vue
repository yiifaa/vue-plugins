<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <form class="" action="index.html" method="post">
        <input type="text" name="username" required value="">
        <button class="btn btn-primary">Save</button>
    </form>
  </div>

</template>

<script>
import $ from 'jquery'
import 'validation/additional-methods'
import 'validation/localization/message_zh'

export default {
  data () {
    return {
      msg: 'Hello, Vue!'
    }
  },

  ready () {
    $('h1', this.$el).css({color : 'blue'})
    $('form', this.$el).validation()
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
