<template>
    <dev class="hello">
        <p>{{ msg }}</p>
    </dev>
</template>

<script>
    export default {
        name: "lianxi2",
        data() {
            return {
                msg: "Welcome to Your Vue.js App"
            };
        },
        mounted() {
            this.$axios
                .get (
                    "../../static/health.json"
                )
                .then (res => {
                    this.msg = res.data;
                })
                .catch (err => {
                    console.log(err);
                })
        }
    };
</script>

<style scoped>
h1,
h2 {
    font-weight: normal;
}
ul {
    list-style: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>