<template>
	<view class="detail">
		<text class="title">{{detail.title}}</text>
		<view class="info">
			<text>发布时间:{{detail.add_time}}</text>
			<text>点击:{{detail.click}}</text>
		</view>
		<view class="content">
			<rich-text :nodes="detail.content"></rich-text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				detail:{}
			}
		},
		methods: {
			async getDetail(){
			  const res = await	this.$getRequest({
					url:`/api/getnew/${this.id}`
				})
				this.detail = res.data.message[0]
			}
		},
		onLoad(options){
			this.id = options.id
			this.getDetail()
		}
	}
</script>

<style lang="scss">
 .detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	  .title{
		  text-align: center;
			width: 710rpx;
			display: block;
			margin: 20rpx 0;
		}
		.info{
			display: flex;
			justify-content: space-between;
		}
 }
</style>
