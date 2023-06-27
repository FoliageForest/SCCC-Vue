<template>
  <!-- 已完成 -->
  <div class="page">
    <button v-on:click="fn">点击按钮控制盒子显示</button>
    <div class="box" v-show="bol">盒子</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bol: true
    };
  },

  methods: {
    fn: function () {
      this.bol = !this.bol;
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