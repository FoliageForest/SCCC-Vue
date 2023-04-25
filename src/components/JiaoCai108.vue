<template>
    <!-- 教材 P108 示例 -->
    <div class="page">
        <h1>你的输入: {{ msg }}</h1>
        <input type="text" v-model.trim='msg' />
        <div class="codePage">
            <code>"{{ msg }}"</code>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "hello"
        };
    }
};
</script>

<style scoped>
.page {
    border: 1px solid #333;
}
.codePage {
    border: 1px solid #333;
}
</style>