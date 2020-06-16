<template>
	<view class="home">
		<swiper circular indicator-dots autoplay interval=3000>
			<swiper-item v-for="item in swiper" :key="item.id">
				<image :src="item.url"></image>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<remander :remanders="remanders"></remander>
		<!-- 商品推荐 -->
		<goods @goodsItemClick="goGoodDetail" ref="id"></goods>
	</view>
</template>

<script>
	import remander from '../../components/remander.vue'
	import goods from '../../components/goods.vue'
	export default {
		components:{
			remander,
			goods
		},
		data() {
			return {
				swiper:[],
				remanders:[],
				iid:1
			}
		},
		onLoad() {
      this.getSwipers()
			this.getRemander()
		},
		methods: {
      async getSwipers(){
			  const res = await this.$getRequest({
					url:'/api/getlunbo',
				})
				console.log(res.data.message)
				this.swiper = res.data.message
			},
			
			async getRemander(){
				const res = await this.$getRequest({
					url: '/api/getheder',
				})
				this.remanders = res.data.message
				
			},
			onPullDownRefresh(){
				this.swiper=[]
				this.remanders=[],
				this.iid=1
				setTimeout(()=>{
					this.getRemander()&&this.getSwipers()&&this.$refs.id.getItem(this.iid,()=>{
						uni.stopPullDownRefresh()
					})
				},2000)
			},
			onReachBottom(){
				this.iid++
				this.$refs.id.getItem(this.iid)
			},
			goGoodDetail(id){
				uni.navigateTo({
					url:`/pages/good-detail/good-detail?id=${id}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.home{
		width: 750rpx;
		height: 380rpx;
		image{
			width: 100%;
			height: 100%;
		}
	}

</style>
