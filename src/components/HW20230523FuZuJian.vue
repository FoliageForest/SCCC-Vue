<template>
    <div class="page">
        <!-- 成功运行 -->
        <h1>父组件</h1>
        <p>子组件传递的数据: {{ mess }}</p>
        <p>2 + mess = {{ 2 + mess }}</p>
        <HW20230523ZiZuJian @change="getVa"></HW20230523ZiZuJian>
    </div>
</template>

<script>
import HW20230523ZiZuJian from "./HW20230523ZiZuJian.vue";

export default {
    data() {
        return {
            mess: 0
        };
    },
    components: {
        // 注册组件
        HW20230523ZiZuJian
    },
    methods: {
        getVa: function(val) {
            this.mess = val;
        }
    }
};
</script>

<style scoped></style>