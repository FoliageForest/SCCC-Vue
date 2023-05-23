<template>
    <!-- 成功运行 -->
    <div class="page">
        <h1>子组件 1</h1>
        <button @click="fn">传值到父组件</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            num: 10
        };
    },
    methods: {
        fn: function () {
            this.$emit("change", this.num);
        }
    }
};
</script>

<style scoped>
.page {
    border: 1px solid #000;
    padding: 10px;
    margin-bottom: 10px;
}
</style>