<template>
    <!-- 成功运行 -->
    <div class="page">
        <h1>子组件 1</h1>
        <p>{{ aa }}</p>
        <button @click="fn">加</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },
    props: ["aa"],
    methods: {
        fn: function () {
            this.aa++;
            this.$emit("change", this.aa);
        }
    }
};
</script>

<style scoped></style>