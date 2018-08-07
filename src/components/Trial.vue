<template>
  <div class="trial-activity">
      <div class="tips">
        <ul :class="{anim:animate==true}">
           <li v-for="tip in tips" v-html="tip.name" :key="tip.categoryId"></li>
        </ul>
      </div>
      <div class="trial-goods" ref="goods">
        <div class="goods-list">
          <ul>
            <li v-for="good in goods"><img :src="good.url" alt=""></li>
          </ul>
        </div>
      </div>
      <!-- <swiper ref="swiper" :itemInfo="itemInfo"></swiper> -->
      <div id="banner" class="banner">
         <div class="bd">
          <ul>
             <li v-for="good in goods"><img :src="good.url" alt=""></li>
          </ul>
          </div>
      </div>
      <ul class="activity-list">
        <li v-for="todo in todos">
            <div class="list-head">
                <div class="list-face">
                    <img :src="todo.pic" alt="">
                </div>
                <p v-html="todo.name"></p>
            </div>
        		<h4 v-html="todo.name"></h4>
        		<p v-html="todo.content"></p>
        		<div class="list-img">
        			<img v-for="img in todo.image_list" :src="img.url" alt="">
        		</div>   	
        </li>
      </ul>
  </div>
</template>

<script>
import axios from 'axios';
/*import Slider from './slider';*/
//import swiper from './swiper.vue';
import touchSlide from './TouchSlide.js';

export default {
  data() {
    return {
      animate: false,
      loading: true,
      todos: [],
      tips: [],
      listObj: [],
      goods: [],
      itemInfo: []
    };
  },
  created() {
    setInterval(this.moveUp, 5000);
  },
  components: {
      //swiper: swiper
  },
  mounted() {
    this.getData();
    const that = this;
    window.addEventListener('scroll', () => {
      console.log(that.scrollTop(), that.documentHeight(), that.windowHeight());
      if (that.scrollTop() + that.windowHeight() >= that.documentHeight() - 50 && that.loading) {
        that.getData();
        that.loading = false;
      }
    });
    // document.addEventListener('touchmove', function(event) {
    //   event.preventDefault();
    //   }, false);
    setTimeout(function(){
    new touchSlide({
      slideCell:"#banner",
      //titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
      mainCell:".bd ul", 
      effect:"leftLoop", 
      autoPlay:true,//自动播放
      //autoPage:true //自动分页
    })
    },100)
    /*setTimeout(function(){
      new Slider ({
         wrap: document.getElementById('banner'),
         fullScreen: 'fullScreen',
         page: '.page'
      })
    },100)*/
      
  },
  methods: {
    getData() {
      axios.get('http://192.168.0.105:8080/static/list.json')
        .then((res) => {
          this.listObj = this.listObj.concat(res.data.goods_list);
          console.log(res.data);
        	this.todos = this.listObj;
          
          this.loading = true;
          this.tips = res.data.category_list;
          this.goods = res.data.image_list;
          this.itemInfo = res.data.image_list;
        });
    },
    moveUp(){
      this.animate = true;
      setTimeout(() => {
        this.tips.push(this.tips[0]);
        this.tips.shift();
        this.animate = false;
      }, 500);
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
    /*setListObj(id,list,isMore){
      if(this.listObj['list-'+id]){
        this.listObj['list-'+id].list = this.listObj['list-'+id].list.concat(list);
        this.listObj['list-'+id].isMore = isMore;
        this.listData = this.listObj['list-'+id].list;
      }else{
        this.listData = list;
        this.noMore = false;
        this.listObj['list-'+id] = {
          list:list,
          isMore:false
        }
      }
    }*/
  },
};

</script>
<style>
	* {
		padding: 0;
		margin: 0
	}
  html,body {
    overflow: hidden;
    height: 100%;
  }
  ul,li {
    list-style: none;
  }
	body {
		font-size: 0.36rem;
	}
	.trial-activity {
		text-align: left;
	}
  .tips {
     height: 0.6rem;
     line-height: 0.6rem;
     overflow: hidden;
     padding: 0 .4rem;
  }
  .anim {
     -webkit-transition: all 0.5s;
     margin-top: -30px;
  }
  .tips li {
     /*position: relative;
     animation: myfirst 5s infinite;*/
  }
  /*@keyframes myfirst {
      0% {
          top: 0rem;
      }
      25% {
          top: -0.6rem;
      }
      50% {
          top: -1.2rem;
      }
      75% {
          top: -1.8rem;
      }
      100% {
          top: -2.4rem;
      }
  }*/
	.trial-activity .activity-list li{
		padding: 0 .4rem;
		margin: 0 0 .4rem 0;
	}
	.trial-activity .activity-list li img {
		width: 2.14rem;
		height: 2.14rem;
    margin: 0 0.14rem 0 0;
	}
  .trial-activity .activity-list li img:last-child {
    margin: 0;
  }
  .trial-goods {
     padding: 0 .4rem;
     height: 1.44rem;
     white-space: nowrap;
     overflow: hidden;
     margin: 0.4rem 0;     
  }
  .goods-list {
     height: 100%;
     overflow-x: scroll;
     overflow-y: hidden;
     -webkit-overflow-scrolling: touch;
     padding-bottom: 20px;
  }
  .trial-goods::-webkit-scrollbar {
    display: none;
  }
  .trial-goods li {
     width: 1.44rem;
     height: 1.44rem;
     display: inline-block;
     margin: 0 0.55rem 0 0;
  }
  .trial-goods img{
     width: 1.44rem;
     height: 1.44rem;
  }
  .trial-activity .activity-list .list-head {
      height: 0.7rem;
      overflow: hidden;
      line-height: 0.7rem;
      font-size: 0.28rem;
      margin: 0 0 0.2rem 0;
  }
  .trial-activity .activity-list .list-head img {
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
  }
  .list-face {
      float: left;
      margin: 0 0.2rem 0 0;
  }
  .banner {
      width: 375px;
      height: 150px;
      overflow: hidden;
      position: relative;
  }
  .banner li {
     width: 375px;
  }
  .banner li img {
     width: 100%;
  }
  .swiper-container {
     position: relative;
     height: 2.5rem;
     overflow: hidden;
  }
  .swiper-wrapper {
     display: flex;
  }
  .swiper-wrapper li {
     width: 100%;
     height: 2.5rem;
     flex-shrink: 0;
     -webkit-flex-shrink: 0;
  }
  .swiper-wrapper li img {
     width: 100%;
     height: 2.5rem;
  }
  .swiper-pagination {
     position: absolute;
     bottom: 0.1rem;
     left: 50%;
     transform: translateX(-50%);
  }
  .swiper-pagination li {
     display: inline-block;
     width: 0.1rem;
     height: 0.1rem;
     border-radius: 50%;
     border: 1px solid #666;
     margin: 0 0.1rem 0 0;
  }
  .swiper-pagination li.active {
     background: #666;
  }


  /*.banner .img img {
     width: 100%;
     height: 2.5rem;
  }*/
  .banner .page {
     position: absolute;
     bottom: 0.1rem;
     left: 50%;
     transform: translateX(-50%);
  }
  .banner .page li {
     display: inline-block;
     width: 0.1rem;
     height: 0.1rem;
     border-radius: 50%;
     border: 1px solid #666;
     margin: 0 0.1rem 0 0;
  }
  .banner .page li.active {
     background: #666;
  }
</style>