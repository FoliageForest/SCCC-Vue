<template>
    <div class="page">
        <ul>
            <li v-for="book in books">{{ book.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                {name: "《JavaScript 高级程序设计》"},
                {name: "《JavaScript 语言精粹》"},
                {name: "《JavaScript 经典实例》"}
            ]
        };
    }
};
</script>

<style scoped>
</style>