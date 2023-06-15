<template>
  <div class="page">
    <!-- 教材 P 134 -->
    <h1>计算属性: {{ prices }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      package1: [
        {
          name: "iphone 8",
          price: 5688,
          count: 1
        },
        {
          name: "ipad",
          price: 2888,
          count: 1
        },
      ],
      package2: [
        {
          name: "apple",
          price: 3,
          count: 5
        },
        {
          name: "banana",
          price: 6,
          count: 3
        }
      ]
    };
  },
  computed: {
    prices: function () {
      var prices = 0;
      for (var i = 0; i < this.package1.length; i++) {
        prices += this.package1[i].price * this.package1[i].count;
      }
      for (var i = 0; i < this.package2.length; i++) {
        prices += this.package2[i].price * this.package2[i].count;
      }
      return prices;
    }
  }
};

</script>
<style scoped></style>