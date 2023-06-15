<template>
  <!-- 教材 P 136 -->
  <div :style="style" class="page">
    组件内容
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["width"],
  computed: {
    style: function () {
      return {
        width: this.width + "px"
      };
    }
  }
};
</script>

<style scoped>
.page {
  border: 1px solid #ae87fc
}
</style>