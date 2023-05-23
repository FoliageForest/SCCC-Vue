<template>
    <!-- 教材 P122 示例 -->
    <!-- 运行成功 -->
    <div class="page">
        <h1>父组件</h1>
        <p>子组件传递的数据: {{ message }}</p>
        <JiaoCai122ShiLi7 @change="getVal"></JiaoCai122ShiLi7>
    </div>
</template>

<script>
import JiaoCai122ShiLi7 from "@/components/JiaoCai122ShiLi7.vue";

export default {
    data() {
        return {
            message: ""
        };
    },
    components: {
        // 注册组件
        JiaoCai122ShiLi7
    },
    methods: {
        getVal: function(val) {
            this.message = val;
        }
    }
};
</script>

<style scoped></style>