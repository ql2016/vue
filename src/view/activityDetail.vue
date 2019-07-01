<template>
    <section class="trial-goods">
		<div class="trial-details" v-if="Object.keys(trialDetails).length>0">
			<div class="goods-banner">
				<img :src="trialDetails.mainPic|imgRule">
				<span class="time">
					<em class="icon-time"></em>
					{{timeVal}}
				</span>
			</div>
			<div class="goods-info">
				<h3 v-text="trialDetails.name"></h3>
				<p class="info-price">
					<span class="price line"><i>¥</i>{{trialDetails.trailProduct.salePrice|fixedTwo}}</span>
					<span class="beans" v-if="payNum">{{payNum}}美豆</span>
					<em class="discounts">限量{{trialDetails.trailNum}}份</em>
					<span class="number"><i class="bold">{{trialDetails.applyNum}}</i>人申请</span>
				</p>
			</div>
			<!--活动流程-->
			<div class="center-box">
				<h4 class="process-title">活动流程<span><em class="icon-7" @click="click_open(trialPath+'/try/process')"></em></span></h4>
				<div class="activity-process">
				</div>
			</div>
			<!--资源位-->
			<resource type="try_xiangqing" name="trial_detail"></resource>
			<!--店铺-->
			<shop :shop="shop" v-if="shop" :isCollect="isFavouriteShop" @collectStatus="updateCollect"></shop>
			<!--活动详情-->
			<activityDetails :data="trialDetails"></activityDetails>
			<!--活动规则-->
			<div class="center-box">
				<h4>活动须知</h4>
				<div class="activity-rule">
					<p class="clearfix">
						<span class="l">中奖通知：</span>
						<span class="r">获奖名单将于试用中心首页滚动，请及时关注</span>
					</p>
					<p class="clearfix">
						<span class="l">奖品寄送：</span>
						<span class="r">奖品将以邮递形式发给中奖用户，邮递地址为默认地址</span>
					</p>
					<p class="clearfix">
						<span class="l">温馨提示：</span>
						<span class="r">中奖用户请在收到奖品的15个工作日内提交试用报告，逾期将会暂停3个月试用资格</span>
					</p>
				</div>
			</div>
			<!--试用申请拉赞排行-->
			<div class="center-box rank">
				<h4 class="process-title" @click="click_open(trialPath+'/try/praiserank?topicId='+topicId)">
					试用申请拉赞排行
					<span><em class="icon-7"></em></span>
				</h4>
			</div>
		</div>
		<!--底部-->
		<div class="footer-tab" v-if="Object.keys(trialDetails).length>0">
			<ul class="tab-btn">
				<li>
					<praise :likeInfo="likeInfo"></praise>
				</li>
				<apply :data="trialDetails" :isRequest="isRequest" :islogin="islogin" :applyState="applyState" :itemUrl="itemUrl"  @collectStatus="updateCollect"></apply>
			</ul>
		</div>
		<!--无内容时页面展示-->
		<nocontent :text="text" v-else></nocontent>	
	</section>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    created() {
        this.$store.dispatch("top/changeTitle",'我的试用');
    }
}
</script>

