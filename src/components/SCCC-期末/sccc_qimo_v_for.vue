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
        { name: '小明', banji: '计应1班' },
        { name: '小马', banji: '计应1班' },
        { name: '小张', banji: '计应2班' },
        { name: '小成', banji: '计应2班' },
      ]
    }
  }
}
</script>

<style scoped></style>