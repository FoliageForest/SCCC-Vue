<template>
  <!-- 已完成 -->
  <div class="page">
    <h2 v-for="(value, index) in person">
      {{ index }} - {{ value.name }} - {{ value.banji }}
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: [
        { name: 'xiaoming', banji: 'jy1' },
        { name: 'xiaocheng', banji: 'jy2' },
        { name: 'xiaoma', banji: 'jy1' },
        { name: 'xiaozhang', banji: 'jy2' },
      ]
    }
  }
}
</script>

<style scoped></style>