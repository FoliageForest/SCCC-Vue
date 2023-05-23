<template>
    <!-- 教材 P120 示例 -->
    <!-- 运行成功 -->
    <div class="page">
        <h1>子组件</h1>
        <button @click="fn">单击子组件传值父组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cMsg: "child 要传递的信息"
        };
    },
    methods: {
        fn: function() {
            this.$emit("change", this.cMsg);
        }
    }
};
</script>

<style scoped>
</style>