<template>
  <!-- 未完成 -->
  <div class="page">
    <button v-on:click="fn">点击按钮</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      map: new Map([
        ['学号', '2105011228'],
        ['专业', 'jy'],
        ['姓名', 'xr'],
        ['成绩', 'nice'],
      ])
    };
  },

  methods: {
    fn: function () {
      
    }
  }
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: #9860f3a1;
  margin: 10px auto;
}
</style>