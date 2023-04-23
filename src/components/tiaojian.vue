<template>
    <div class="hello">
        <!-- 2023-04-23 上课 -->
        <!-- <p v-if="ac">条件渲染 v-if</p> -->
        <!-- <p v-else>v-else 和 v-if 搭配</p> -->
        <!-- <p v-show="sta == 2">测试 v-show</p> -->
        <ul v-for="(value, key, index) in per">
            {{ index }} - {{ key }} - {{ value }}
        </ul>
        <p>v-for</p>
        <ul v-for="(a, b, c) in user">
            {{ c }} -- {{ b }} -- {{ a }}
        </ul>
        <p> ---- </p>
        <ul v-for="(itemName, index) in ert">
            index: {{ index }}, name: {{ itemName.name }}, price: {{ itemName.price }}, num: {{ itemName.num }}
        </ul>
        <p> ====++ </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // ac: false
            // sta: 1
            per: {
                num1: "xiaosi",
                num2: "xiaowu"
            },
            user: {
                idcard: 21050112,
                username: "xiaoli",
                hobby: "spot",
                age: 18
            },
            ert: [
                { name: 'plane', price: 5000, num: 118 },
                { name: 'tv', price: 3999, num: 100 },
                { name: 'computer', price: 2000, num: 80 },
            ]
        }
    }
}
</script>

<style scoped>
p {
    border: 2px solid red;
}
</style>
