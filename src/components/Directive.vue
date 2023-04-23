<template>
    <!-- 教材 P71 P72 -->
    <!-- 报错参考 <https://blog.csdn.net/tangxiujiang/article/details/80209455> -->
    <food>
    <div class="page">
        <a v-bind:href="url">链接</a>
        <br />
        <a :href="url">链接</a>
    </div>
    <div :class="{ active: isActive}">对象语法</div>
    </food>
</template>

<script>
    export default {
        data() {
            return {
                url: "https://baidu.com",
                isActive: true,
            };
        }
    };
</script>

<style scoped>
.active {
    border: 1px solid #000;
}
</style>