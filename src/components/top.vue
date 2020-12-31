<template>
    <div class="header">
        <div class="header-cont">
            <div class="header-back">返回</div>
            <div class="header-title" v-text="title"></div>
            <div class="header-share" v-if="share">分享</div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['title','share'],
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
}
</script>

