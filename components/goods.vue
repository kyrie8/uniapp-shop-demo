<template>
<view class="goods">
	<view class="goods-nav">商品推荐</view>
	<view class="goods-list">
		<view @click="goGoods(item.id)" class="goods-item" v-for="item in items" :key="item.id">
			<image :src="item.img_url"></image>
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">
				{{item.title}}
			</view>
		</view>
	</view>
	<view v-if="flag" style="text-align: center;">我是有底线的</view>
</view>

</template>

<script>
	export default {
		data(){
			return {
				items:[],
				flag:false
			}
		},
		mounted() {
			this.flag===false?this.getItem():''
		},
		methods:{
			async getItem(iid=1,callback){
				const res = await this.$getRequest({
					url:'/api/getgoods/?id='+ iid,
				})
				//console.log(res.data.message)
				this.items=[...this.items,...res.data.message]
				if(res.data.message.length<10*iid){
					return this.flag = true
				}
				callback&&callback()
			},
			goGoods(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods{
		background-color: #eee ;
		overflow: hidden;
		margin-top: 10rpx;
		.goods-nav{
			height: 50rpx;
			line-height: 50rpx;
			text-align: center;
			background-color: #fff;
			letter-spacing: 40rpx;
			color: red;
			margin: 14rpx 0;
		}
		.goods-list{
			padding: 0 15rpx;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.goods-item{
				margin: 10rpx 0;
				background:#fff;
				width: 355rpx;
				padding: 15rpx;
				box-sizing: border-box;
				image{
					height: 150px;
					width: 80%;
					display: block;
					margin: 0 auto;
				}
				.price{
					color: red;
					font-size: 30rpx;
					text:nth-child(2){
						color: #ccc;
						font-size: 24rpx;
						margin-left: 16rpx;
						text-decoration: line-through;
					}
				}
				.name{
					font-size: 30rpx;
					line-height: 50rpx;
					padding-top: 10rpx;
					padding-bottom: 15rpx;
				}
			}
		}
	}
</style>
