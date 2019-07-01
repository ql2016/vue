<template>
    <div class="notice-lists">
        <ul>
            <li class="notice-list" data-type="0" v-for="(item,index) in items" :key="index">
                <div class="list-box" @touchstart.capture="touchStart" @touchend.capture="touchEnd">
                    <div class="list-time">
                        系统消息<p v-text="item.time"></p>
                    </div>
                    <div class="list-content" v-text="item.content"></div>
                    <div class="list-detail" v-if="item.type!=0">查看详情</div>
                </div>
                <div class="delete" @click="del(item)">删除</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items: [
                {title: "系统消息",time: "2019-04-24 01:00:00",type: 0,content: "您昨天一共赚取了1000金币，具体收益明细可在“我的收益”中查询，继续加油吧~"},
                {title: "系统消息",time: "2019-04-24 01:00:00",type: 1,content: "系统消息XXXX"},
                {title: "系统消息",time: "2019-04-24 01:00:00",type: 2,content: "金币已自动兑换国美币，扣除1000金币"},
                {title: "系统消息",time: "2019-04-24 01:00:00",type: 0,content: "您昨天一共赚取了1000金币，具体收益明细可在“我的收益”中查询，继续加油吧~"},
                {title: "系统消息",time: "2019-04-24 01:00:00",type: 1,content: "系统消息XXXX"},
                {title: "系统消息",time: "2019-04-24 01:00:00",type: 2,content: "金币已自动兑换国美币，扣除1000金币"}
            ],
            startX: 0,
            endX: 0
        }
    },
    created() {
        console.log(this.startX,this.endX)
    },
    mounted() {
        const self = this;
        window.addEventListener('scroll',function(){
            console.log(self.scrollTop()+self.windowHeight(),self.documentHeight())
            if(self.scrollTop() + self.windowHeight() >= self.documentHeight() - 50){
                self.items = self.items.concat(self.items)
            }
        })
    },
    methods: {
        touchStart(e){
            console.log(e)
            this.startX = e.touches[0].clientX;
        },
        touchEnd(e){
            let parentElement = e.currentTarget.parentElement;
            this.endX = e.changedTouches[0].clientX;
            console.log(parentElement.dataset.type,this.startX - this.endX)
            if(parentElement.dataset.type == 0 && this.startX - this.endX > 30) {
                this.restSlide();
                parentElement.dataset.type = 1;
                console.log(parentElement.dataset.type)
            }
            if(parentElement.dataset.type == 1 && this.startX - this.endX < 30) {
                this.restSlide();
                parentElement.dataset.type = 0;
                console.log(parentElement.dataset.type)
            }
            this.startX = 0;
            this.endX = 0;
        },
        restSlide(){
            let listItems = document.querySelectorAll('.notice-list');
            for( let i = 0 ; i < listItems.length ; i++){
                listItems[i].dataset.type = 0;
            }
        },
        checkSlide() {
            let listItems = document.querySelectorAll('.notice-list');
            for(let i = 0; i < listItems.length; i++) {
                if(listItems[i].dataset.type == 1) {
                    return true;
                }
            }
            return false;
        },
        skip() {
            if(this.checkSlide()) {
                this.restSlide();
            }
        },
        del(item){
            this.items = this.items.filter((list) => {
                return item != list;                
            })
            this.restSlide();
        },
        scrollTop() {
            return Math.max(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset);
        },
        documentHeight() {
            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        },
        windowHeight() {
            return (document.compatMode == "CSS1Compat") ? document.documentElement.clientHeight : document.body.clientHeight;
        },
    }
}
</script>

