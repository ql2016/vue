<template>
  <div class="trial-activity">
      <div class="tips">    
        <ul :class="{anim:animate==true}">
           <li v-for="tip in tips" v-html="tip.name" :key="tip.categoryId"></li>
        </ul>
      </div>
      <ul class="activity-list">
        <li v-for="todo in todos">
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


export default {
  name: '',
  data() {
    return {
        animate: false,
        loading: true,
        todos: [],
        tips: [],
        listObj: []
    };
  },
  created() {
     setInterval(this.moveUp,5000)
  },
  mounted() {
    this.getData();
    var that = this;
    window.addEventListener('scroll',function(){
       console.log(that.scrollTop(),that.documentHeight(),that.windowHeight())
       if(that.scrollTop()+that.windowHeight()>=that.documentHeight()-50 && that.loading){
          that.getData();
          that.loading = false;
       }
    })
    
  },
  methods: {
    getData() {
      axios.get('http://localhost:8080/static/list.json')
        .then((res) => {
          this.listObj = this.listObj.concat(res.data.goods_list);
        	this.todos = this.listObj;
          console.log(this.listObj)
          this.loading = true;
          this.tips = res.data.category_list;
        });
    },
    moveUp(){
        this.animate = true;
        setTimeout(() => {
            this.tips.push(this.tips[0]);
            this.tips.shift();
            this.animate = false
        },500)
    },
    scrollTop(){
      return Math.max(document.body.scrollTop,document.documentElement.scrollTop,window.pageYOffset);
    },
    documentHeight(){
      return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    },
    windowHeight(){
      return (document.compatMode == "CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight;
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
</style>