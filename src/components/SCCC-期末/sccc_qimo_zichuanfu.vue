<template>
  <!-- 已完成 -->
  <div>
    <h2>接收子组件的传值进行计算</h2>
    <p>{{ count }}*10={{ message }}</p>
    <zi :count="message" @chang="getVal" />
  </div>
</template>

<script>
import zi from './sccc_qimo_zichuanfu_zi.vue'
export default {
  components: {
    zi
  },

  data() {
    return {
      count: "shuju",
      message: 0
    }
  },
  methods: {
    getVal: function (value) {
      this.message = value * 10;
    }
  }
}
</script>

<style scoped></style>