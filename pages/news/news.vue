<template>
	<view class="news">
		<news-item @itemClick="goDetail" :news="news"></news-item>
		<view v-if="(news.lenght===0||news.lenght===undefined)">暂无数据</view>
	</view>
</template>

<script>
	import newsItem from '../../components/new_item.vue'
	export default {
		components:{
			newsItem
		},
		data() {
			return {
				news:[]
			}
		},
		onLoad(){
			this.getNews()
		},
		methods: {
			async getNews(){
				const res = await this.$getRequest({
					url:'/api/getnewlist'
				})
				this.news = res.data.message
				console.log(this.news)
			},
			goDetail(id){
				uni.navigateTo({
					url:'/pages/news-detail/news-detail?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
 .news{
	 
 }
</style>
