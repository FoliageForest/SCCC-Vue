<template>
  <div class="page">
    <sccc_qimo_yangshi_zi :message="mes"></sccc_qimo_yangshi_zi>
  </div>
</template>

<script>
import sccc_qimo_yangshi_zi from "./sccc_qimo_yangshi_zi.vue"
export default {
  data() {
    return {
      mes: "将此文本传递给子组件进行样式设置"
    };
  },
  components: {
    sccc_qimo_yangshi_zi
  },
}
</script>

<style scoped>
</style>
