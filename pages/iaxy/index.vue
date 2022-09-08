<template>
	<image class="iaxyimg"  src="/static/iaxyps.png"></image>
	<view class="iaxy">
	<text class="phone"> {{haotong.formatPhoneNumber}}</text>
	<image class="ok" @click="cxshow=false" v-show="cxshow" src="/static/ok.png"></image>
	<image class="cx" v-show="cxshow" @click =" haotong.goto('../xcka/index')"  src="/static/cx.png"></image>
	<text class="btn" @click="cxshow = true"></text>
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
		import {ref} from 'vue'
	const haotong = useHaoTongStore()
	const cxshow= ref(false)
	  
</script>

<style lang="scss" scoped> 
	$allheight:v-bind(phoneHeight);
	$allwidth:v-bind(phoneWidth);
	
	.iaxyimg{
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
	.iaxy{
		display: flex;
		justify-content: center;
		justify-items: center;
		flex-direction: column;
		
		
	}
	.phone{
		margin-top: 858rpx;
		font-size: 40rpx;
		color: #49494F;
		text-align: center;
		
	}
	.btn{
		position: absolute;
		width: 100rpx;
		height: 100rpx;
		margin-top: 500rpx;
		margin-left: 70rpx;
		background-color: rgba(0, 0, 0, 0);
		// background-color: aqua;	
	}
	.ok{
		
		position: absolute;
		margin-top: 375rpx;
		margin-left: 78rpx;
		width: 80rpx;
		height: 80rpx;
		
	}
	.cx{
		margin-top: 150rpx;
		margin-left: 62rpx;
		width: 630rpx;
		height: 140rpx;
			
	}
	
	
</style>
