<template>
    <div class="page">
        <!-- 成功运行 -->
        <h1>父组件</h1>
        <p>{{ num }}</p>
        <HW20230523T02Zi1 :aa="num" @changeA="getValA"></HW20230523T02Zi1>
        <HW20230523T02Zi2 :bb="num" @changeB="getValB"></HW20230523T02Zi2>
    </div>
</template>

<script>
import HW20230523T02Zi1 from "./HW20230523T02Zi1.vue";
import HW20230523T02Zi2 from "./HW20230523T02Zi2.vue";

export default {
    data() {
        return {
            num: 0
        };
    },
    components: {
        // 注册组件
        HW20230523T02Zi1,
        HW20230523T02Zi2,
    },
    methods: {
        getValA: function(valA) {
            this.num = valA;
        }
        ,
        getValB: function(valB) {
            this.num = valB;
        }
    }
};
</script>

<style scoped>
</style>