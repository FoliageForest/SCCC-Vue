<template>
    <!-- 教材 P120 示例 5 -->
    <div class="list">
        <h1>子组件</h1>
        <ul>
            <li @click="handleClick()">这是第一条数据</li>
        </ul>
        <!-- 在页面中把接收的数据显示出来 -->
        <p>{{ receive }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            receive: this.message
        };
    },
    props: ['message'],
};
</script>

<style scoped>
.list {
    color: #f00;
}

.list p {
    font-weight: 700;
}
</style>