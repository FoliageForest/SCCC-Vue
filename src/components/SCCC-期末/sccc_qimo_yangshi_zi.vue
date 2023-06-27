<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: ["message"]
};
</script>

<style scoped>
p {
  color: pink;
  font-family: "华文彩云";
  font-size: 30px;
}
</style>
