<template>
    <div class="page">
        <h3>FuZuJian</h3>
        <button @click="changeData">改变数据</button>
        <ListItem :msgName="listdata"></ListItem>
    </div>
</template>

<script>
import ListItem from "@/components/ListItem"

export default {
    data() {
        return {
            listdata: "单击按钮之前的数据"
        };
    },
    components: {
        // 注册组件
        ListItem
    },
    methods: {
        changeData() {
            this.listdata = "单击按钮之后的数据"
        }
    }
};
</script>