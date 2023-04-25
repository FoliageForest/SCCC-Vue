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
};
</script>

<style scoped>
.div-par {
    width: 100px;
    height: 100px;
    border: 1px solid #333;
    margin: 20px auto;
    color: #333;
}
.div-child {
    width: 50px;
    height: 50px;
    border: 1px solid #333;
    margin: 10px 25px;
}
</style>