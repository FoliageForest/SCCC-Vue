<template>
    <!-- 教材 P119 示例 4 -->
    <div class="page">
        <h3>FuZuJian</h3>
        <button v-on:click="skip()">跳转到详情页</button>
        <JiaoCai120 :message="count"></JiaoCai120>
    </div>
</template>

<script>
import JiaoCai120 from "./JiaoCai120.vue";

export default {
    data() {
        return {
            listdata: "",
            count: 100
        };
    },
    components: {
    // 注册组件
    JiaoCai120
},
};
</script>

<style scoped>
</style>