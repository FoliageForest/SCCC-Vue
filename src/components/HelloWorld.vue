<template>
  <div class="hello">
    <!-- <button type="success">成功</button> -->
    <h1>{{ msg }}</h1>
    <p>{{ 10 }}</p>
    <p>{{ "strng" }}</p>
    <p>{{ 1 + 1 }}</p>
    <p>{{ 'hello' + name }}</p>
    <p>{{ 2 > 3 ? 'tru' : 'fa' }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
-->