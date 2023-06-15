<template>
  <div class="hello">
    <!-- 教材 P 133 -->
    <h1>计算属性: {{ reversedMsg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello world"
    };
  },
  computed: {
    reversedMsg: function() {
      return this.msg.split('').reverse().join('');
    }
  }
};
</script>

<style scoped>
</style>