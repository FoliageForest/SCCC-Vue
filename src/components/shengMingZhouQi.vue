<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "HelloWorld",
        data() {
            return {
                msg: "Welcome to Your Vue.js App",
                name: "张三"
            };
        },
        beforeMount: function() {
            console.group("--- beforeMount 挂载前状态 ---");
            console.log("el: " + this.$el);
            console.log("data:" + this.$data);
            console.log("msg:" + this.msg);
        },
        mounted: function() {
            console.group("--- mounted 挂载后状态 ---");
            console.log("el: " + this.$el);
            console.log("data:" + this.$data);
            console.log("msg:" + this.msg);
        },
    }
</script>