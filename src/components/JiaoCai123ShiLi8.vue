<template>
    <!-- 成功运行 -->
    <div class="page">
        <h1>父组件</h1>
        <p>{{ message }}</p>
        <JiaoCai124SL9 @change="getVa"></JiaoCai124SL9>
        <JiaoCai125SL10 :count="message"></JiaoCai125SL10>
    </div>
</template>

<script>
import JiaoCai124SL9 from "./JiaoCai124SL9.vue";
import JiaoCai125SL10 from "./JiaoCai125SL10.vue";

export default {
    data() {
        return {
            message: 0
        };
    },
    components: {
        // 注册组件
        JiaoCai124SL9,
        JiaoCai125SL10
    },
    methods: {
        getVa: function (val) {
            this.message = val;
        }
    }
};
</script>

<style scoped></style>