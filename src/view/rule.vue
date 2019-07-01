<template>
    <div class="rule-lists">
        <h4>奖励、惩罚规则说明</h4>
        <ul>
            <li class="rule-list" v-for="(item,index) in items" :key="index" @click="Unfold(item)">
                <p v-text="item.title"></p>
                <div class="list-detail" v-if="item.fold">
                    <ol>
                        <li v-for="(list,index) in item.item" :key="index" v-text="list"></li>
                    </ol>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items: [
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]},
                {title: "阅读收益规则",item: ["阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则阅读收益规则","fsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsfffsfsff"]}
            ],
        }
    },
    created() {
        this.items.forEach((item) => {
            this.$set(item,'fold',false);
        })
    },
    methods: {
        Unfold(item){
            console.log(item.fold)
            item.fold = !item.fold;
            console.log(item.fold)
        }
    }
}
</script>

