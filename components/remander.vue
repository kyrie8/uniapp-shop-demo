<template>
	<view class="remander">
		<block v-for="item in remanders" :key="item.id">
						<view class="item" :href="item.link" @click="goToBuy(item.link)">
							<image :src="item.url"></image>
							<span>{{item.des}}</span>
						</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			remanders:{
				type: Array,
				default: () => {
					return []
				}
			}
		},
    methods:{
			goToBuy(link) {
				uni.navigateTo({
					url:link
			})
			}
		}
	}
</script>

<style lang="scss" >
	.remander{
		width: 750rpx;
		height: 280rpx;
		display: flex;
		flex-flow: row wrap;
		margin: 10rpx 0;
	}
	.item{
		/* display: block;
		text-decoration: none;
		color: #000000; */
		flex: 20%;
		margin:10rpx 0;
		image {
			display:block;
			width: 100rpx;
			height: 100rpx;
			margin: 0 auto;
		}
		span{
			display:block;
			font-size: 20rpx;
			text-align: center;
		}
	}
	
</style>
