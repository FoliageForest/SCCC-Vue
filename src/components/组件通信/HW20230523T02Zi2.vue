<template>
    <!-- 成功运行 -->
    <div class="page">
        <h1>子组件 2</h1>
        <p>{{ bb }}</p>
        <button @click="fn">减</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: ["bb"],
    methods: {
        fn: function () {
            this.bb--;
            this.$emit("change", this.bb);
        }
    }
};
</script>

<style scoped></style>