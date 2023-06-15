<template>
  <!-- 教材 P 139 -->
  <div class="hello">
    <input type="text" v-model="firstName">
    <input type="text" v-model="lastName">
    <h1>{{ fullName }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Foo",
      lastName: "Bar",
      fullName: "Foo Bar"
    };
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + " " + this.lastName;
    },
    lastName: function (val) {
      this.fullName = this.firstName + " " + val;
    }
  }
};
</script>

<style scoped></style>