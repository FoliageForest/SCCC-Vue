<template>
    <!-- 教材 P108 示例 -->
    <div class="page">
        <div class="div-par" @click="parent()">
            parent
            <div class="div-child" @click.stop="child">child</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        parent: function () {
            console.log("parent");
        },
        child: function () {
            console.log("child");
        }
    }
}
</script>

<style scoped>
.div-par {
    width: 100px;
    height: 100px;
    background: #160a0a;
    border: 1px solid #160a0a;
    margin: 20px auto;
    color: #160a0a;
}
.div-child {
    width: 50px;
    height: 50px;
    background: #39f8a5;
    border: 1px solid #39f8a5;
    margin: 10px 25px;
    color: #39f8a5;
}
</style>