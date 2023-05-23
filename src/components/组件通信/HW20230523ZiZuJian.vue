<template>
        <!-- 成功运行 -->
        <div class="page">
        <h1>子组件</h1>
        <button @click="fn">单击子组件传值父组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aa: 23
        };
    },
    methods: {
        fn: function() {
            this.$emit("change", this.aa);
        }
    }
};
</script>

<style scoped>
</style>