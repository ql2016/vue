<template>
    <div class="rank">
        <div class="rank-user">
            <div class="user-face">
                <img src="../image/borderImage.png" alt="">
                <p>用户名</p>
            </div>
            <div class="user-profit clearfix">
                <div class="l">
                    上周排名：<span>999+</span>
                </div>
                <div class="r">
                    <p>上周收益：<span>200金币</span></p>
                    <p>本周收益：<span>10000金币</span></p>
                </div>
            </div>
        </div>
        <div class="rank-lists">
            <ol>
                <li class="clearfix" v-for="(item,index) in items" :key="index"><img :src="item.face" alt=""><span class="l" v-text="item.name"></span><span class="r" v-text="item.num"></span></li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                {face: '/image/borderImage.png',name: '昵称', num: '3000金币'},
                {face: '../image/borderImage.png',name: '昵称', num: '3000金币'},
                {face: '../image/borderImage.png',name: '昵称', num: '3000金币'},
                {face: '../image/borderImage.png',name: '昵称', num: '3000金币'},
                {face: '../image/borderImage.png',name: '昵称', num: '3000金币'},
                {face: '../image/borderImage.png',name: '昵称', num: '3000金币'},
            ]
        }
    }
}
</script>

