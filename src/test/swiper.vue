<template>
    <div class="swiper-container" id="swiperContainer">
        <ul class="swiper-wrapper">
            <li @click="click_href(itemInfo.scheme,index,itemInfo.topVideo)" class="swiper-slide" v-for="(itemSrc,index) in itemInfo" :id="index===0&&itemInfo.topVideo&&itemInfo.topVideo.newVideoVU?'video_'+itemInfo.topVideo.newVideoVU:''">
               <!--  <div v-if="itemInfo.topVideo&&itemInfo.topVideo.newVideoVU&&showVideoImg" class="play-btn" @click.stop="playVideo(itemInfo.topVideo.newVideoVU)">
                </div> -->
                <img :src="itemSrc.url" alt="">
                <div class="slide-mask"></div>
            </li>
        </ul>
        <ul id="swiperPage" class="swiper-pagination" v-if="itemInfo.length>1">
            <li class="" v-for="itemSrc in itemInfo"></li>
        </ul>
    </div>
</template>

<script>
import Slider from './slider.js';
/* import replace from '../mods/replace.js';
import check from '../mods/checkUa.js'; */
export default {
  props: ['itemInfo'],
  data() {
    return {
        showVideoImg: true,
        videoObj: null,
    }
  },
  /* filters: {
    imgbed(img, size){
        return replace.replaceImg(img,size)
    },
  }, */
  mounted() {
    const self = this;
    setTimeout(() => {
      console.log(this.itemInfo.length);
      if (this.itemInfo.length > 1){
        let time = 0;
        new Slider({
          wrap:document.getElementById('swiperContainer'),
          fullScreen: true,
          page: '#swiperPage'
        }); 
      }
    },1000)    
    this.$nextTick(function(){
      let id = "",
        dev = {
            "DEVELOPMENT": "pre",
            "STAGING": "pre",
            "PRODUCTION": "dist"
      };
      if(self.itemInfo.topVideo&&self.itemInfo.topVideo.newVideoVU){
        self.videoObj = new MeixinPlayer();
        id =  self.itemInfo.topVideo.newVideoVU;
        self.videoObj.init(id, "video_" + id, {
           env: dev[window.environment],
           height:'auto'
        });
      }   
    })
  },
  methods:{
    click_href(url,index,video){
        if(index===0&&video){return}
        location.href = url;
    },
    pauseVideo(){
       this.videoObj&&this.videoObj.pause();
    }
  }
}
</script>
<style lang="scss" scoped>
</style>