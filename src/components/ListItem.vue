<template>
    <div class="list">
        <p>{{ message }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ['message']
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