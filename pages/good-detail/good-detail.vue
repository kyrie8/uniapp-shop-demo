<template>
	<view class="goods_detail">
		<swiper indicator-dots="">
			<swiper-item v-for="(item,index) in items" :key="index">
				<image :src="item.src"></image>
			</swiper-item>
		</swiper>
		
		<view class="box1">
			<view class="price">
				<span>￥{{info.sell_price}}</span>
				<span>￥{{info.market_price}}</span>
			</view>
			<view class="goods_name">
				{{info.title}}
			</view>
			<view class="line"></view>
			<view class="box2">
				<view>货号:{{info.goods_num}}</view>
				<view>库存:{{info.stock_quantity}}</view>
			</view>
			<view class="line"></view>
		</view>
		<view class="box3">
			<view class="title">详情介绍</view>
			<view class="content">
				<rich-text :nodes="info.content"></rich-text>
			</view>
		</view>
		<view class="nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick"/>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		components: {uniGoodsNav},
		data() {
			return {
				id:0,
				items:[],
				info:{},
				options: [{
				            icon: 'headphones',
				            text: '客服'
				        }, {
				            icon: 'shop',
				            text: '店铺',
				            info: 2,
				            infoBackgroundColor:'#007aff',
				            infoColor:"red"
				        }, {
				            icon: 'cart',
				            text: '购物车',
				            info: 2
				        }],
				        buttonGroup: [{
				          text: '加入购物车',
				          backgroundColor: '#ff0000',
				          color: '#fff'
				        },
				        {
				          text: '立即购买',
				          backgroundColor: '#ffa200',
				          color: '#fff'
				        }
				        ]
			}
		},
		methods: {
			onClick (e) {
			  uni.showToast({
			    title: `点击${e.content.text}`,
			    icon: 'none'
			      })
			    },
			buttonClick (e) {
			  console.log(e)
			  this.options[2].info++
			    },

				
			async getSwiper(){
				const res = await this.$getRequest({
					url:'/api/getthumimages/'+this.id
				})
				this.items = res.data.message
			},
			async getInfo(){
				const res = await this.$getRequest({
					url:'/api/goods/getinfo'+this.id
				})
				this.info = res.data.message[0]
			}
		},
		onLoad(options) {
			this.id = options.id
			this.getSwiper()
			this.getInfo()
		}
	}
</script>

<style lang="scss">
  .goods_detail{
		swiper{
			height: 700rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.box1{
			padding: 18rpx;
			.price{
				font-size: 32rpx;
				color: red;
				line-height: 80rpx;
				span:nth-child(2){
					font-size: 26rpx;
					color: #ccc;
					text-decoration: line-through;
					margin-left: 16rpx;
				}
			}
			.goods_name{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
		.line{
			height: 10rpx;
			width: 750rpx;
			background: #eee;
		}
		.box2{
			padding: 0 10rpx;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3{
			padding-bottom: 120rpx;
			.title{
				font-size: 32rpx;
				padding-left: 10rpx;
				border-bottom: 1px solid #eee;
				line-height: 70rpx;
			}
			.content{
				padding: 18rpx;
				font-size: 28rpx;
				color:#333 ;
				line-height: 48rpx;
			}
		}
		.nav{
			position: fixed;
      bottom: 0;
			width: 100%;
		}
	}
</style>
