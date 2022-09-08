<template>
	<image src="/static/xckaps.png"></image>
	<view class="xcka" :style="{'height':phoneHeight+'rpx' ,'width':phoneWidth+'rpx'}">
	
        <view class="xcphone">
			<text> {{haotong.formatPhoneNumber}}</text>
		<text class="phonetext" >的动态行程卡</text>
		
		</view>
		<view class="xctime">
		<text class="xcs"> 更新于: </text>
		<text class="xct"> {{haotong.xctime}}</text>
		</view>
		<image class="xcicon " src="/static/xcicon.png"></image>
		
		
 

	</view>
</template>

<script>
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				phoneHeight: 0, //屏幕高度
				phoneWidth: 0, //屏幕高度
			};
		},
		onLoad() {
			// 获取屏幕高度
			let self = this;
			uni.getSystemInfo({
				success(res) {
					console.log(res.screenHeight); //屏幕高度  注意这里获得的高度宽度都是px 需要转换rpx
					console.log(res.windowWidth); //可使用窗口宽度
					console.log(res.windowHeight); //可使用窗口高度
					console.log(res.screenWidth); //屏幕宽度
					self.phoneHeight = (res.screenHeight * (750 / res.windowWidth)) //窗口高度，将px 转换rpx
					self.phoneWidth = (res.screenWidth * (750 / res.windowWidth)) //窗口宽度，将px 转换rpx
				}
			});

		},
	
	};
</script>

<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'
		
	const haotong = useHaoTongStore()
	  
</script>

<style lang="scss" scoped> 
	$allheight:v-bind(phoneHeight);
	$allwidth:v-bind(phoneWidth);
	
	image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	text {
		z-index: 1;
		font-family: my-fontm;
	}
	.xcka{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		justify-content: center;
		
	}
	.xcphone{
		position: absolute;
		margin-top: -267rpx;
		color: #46464C;
		letter-spacing: -0.1rpx;
		font-weight: 500;
		font-size: 34rpx;
	}
	.phonetext{
		font-size: 32rpx;
		font-weight: 650;
	}
	
	.xctime{
		font-size: 36rpx;
		color: #94949E;
		font-weight: 500;
		margin-top: -390rpx;
		letter-spacing: 1rpx;
		
	}
	.xcs{
		font-size: 34rpx;
		font-weight: 700;
		
	}
	.xcicon{	
		margin-top: 620rpx;
		margin-left: 225rpx;
			
		width: 304rpx;
		height: 304rpx;
		animation: scaleDrew 2.5s ease-in-out infinite;
	}
	
	@keyframes scaleDrew {
	    0% {
	      transform: scale(0.88);
	    }
	
	    25% {
	      transform: scale(1.1);
	    }
	
	    50% {
	      transform: scale(0.88);
	    }
	
	    75% {
	      transform: scale(1.1);
	    }
		100% {
		  transform: scale(1.0);
		}
	  }

	
</style>
