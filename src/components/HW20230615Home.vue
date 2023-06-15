<template>
  <!-- 参考老师 -->
  <div>
    <table>
      <tr v-for="(item, index) in package">
        <td>{{ item.name }}</td>
        <td><img :src="item.imgPath" alt="img" width="100" height="70"></td>
        <td>{{ item.price }}</td>
        <td>{{ item.count }}</td>
        <td>
          <button @click="handleReduce(index)" :disabled="item.count == 1">---</button>
        </td>
        <td>
          <button @click="handleReducenum(index)">+++</button>
        </td>
      </tr>
    </table>
    <h2>{{ totalPrice }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      package: [
        {
          imgPath: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          name: "iphone 8",
          price: 5688,
          count: 1
        },
        {
          imgPath: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          name: "ipad",
          price: 2888,
          count: 1
        },
        {
          imgPath: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          name: "apple",
          price: 3,
          count: 5
        },
        {
          imgPath: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png",
          name: "banana",
          price: 6,
          count: 3
        }
      ],
    }
  },

  computed: {
    totalPrice: function () {
      var total = 0;
      for (var i = 0; i < this.package.length; i++) {
        var item = this.package[i];
        total += item.price * item.count;
      }
      return total
    }
  },

  methods: {
    handleReduce: function (index) {
      if (this.package[index].count == 1) return;
      this.package[index].count--;
    },

    handleAdd: function (index) {
      this.package[index].count++;
    },

    handleReducenum: function (index) {
      this.package[index].count++;
    }
  }
};
</script>

<style scoped>
table {
  width: 300px;
  border: 1px solid #888888;
  border-collapse: collapse;
}

td,
th {
  border: 1px solid #888888;
  padding: 10px;
}
</style>