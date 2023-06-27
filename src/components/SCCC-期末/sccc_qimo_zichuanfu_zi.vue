<template>
  <!-- 已完成 -->
  <div>
    <button @click="fn">点击按钮进行传值</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 3
    }
  },
  methods: {
    fn: function () {
      this.$emit("chang", this.num);
    }
  }
}
</script>

<style scoped></style>