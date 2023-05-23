<template>
    <!-- 成功运行 -->
    <div class="page">
        <h1>子组件 2</h1>
        <p>{{ count }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: ["count"]
};
</script>

<style scoped>
.page {
    border: 1px solid #000;
    padding: 10px;
}
</style>