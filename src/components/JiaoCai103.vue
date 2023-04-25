<template>
    <!-- 教材 P103 P104 示例 -->
    <div class="page">
        <!-- <button v-on:click='fn()'>toggle</button> -->
        <button v-on:click='fn'>toggle</button>
        <div class="box" v-show='bol'></div>
        <p>分割线</p>
        <!-- <button v-on:click="say('Hello')">alert: Hello</button> -->
        <button @click="say('Hello')">alert: Hello</button>
        <button @click="say('Hello')">alert: Hello</button>
        <p>分割线</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            bol: false
        };
    },
    methods: {
        fn: function () {
            this.bol = !this.bol;
        },
        say: function (msg) {
            alert(msg);
        }
    }
};
</script>

<style scoped>
.page {
    width: 400px;
    height: 400px;
    margin: 0 auto;
}
.box {
    width: 100px;
    height: 100px;
    background: red;
    margin: 10px auto;
}
</style>