<template>
	<view>
		<view class="news_item" @click="navi(item.id)" v-for="(item,index) in news" :key="item.id">
			<image :src="item.url"></image>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<view class="info">
					<span>发表时间:{{item.add_time}}</span>
					<span>浏览:{{item.click}}</span>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			news:{
				type:Array,
				default:()=>{
					return []
			}
		}
		},
		data(){
			return {
				
			}
		},
			methods:{
				navi(id){
					this.$emit('itemClick',id)
				}
			}
	}
</script>

<style lang="scss">
	.news_item{
			 display: flex;
			 padding: 10rpx 10rpx;
			 border-bottom: 1px solid red;
			 image{
				 max-width: 200rpx;
				 min-width: 200rpx;
				 height: 150rpx;
			 }
			 .right{
				 margin-left: 10rpx;
				 display: flex;
				 flex-direction: column;
	    justify-content: space-between;
				 .title{
					 font-size: 28rpx;
				 }
				 .info{
					 font-size: 24rpx;
					 text:nth-child(2){
						 margin-left: 25rpx;
					 }
				 }
			 }
			 }
</style>
