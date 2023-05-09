<template>
    <div class="list">
        <p>{{ msgName }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },
    props: ['msgName'],
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