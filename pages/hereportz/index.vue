<template>
	<image src="/static/hereportz.png"></image>
	<view class="report">
		<text class="name">{{haotong.name}}</text>
		<view class="cytime"> <text>{{day1}}</text><text> 09:12:27</text> </view>
		<view class="jctime"> <text>{{day1}}</text><text> 19:30:48</text> </view>
		
	</view>
</template>

<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'
	import dayjs from "dayjs"
	const day1= dayjs().subtract(1, 'day').format("YYYY-MM-DD")
	const haotong = useHaoTongStore()
	
	uni.getStorage({
		key: 'name',
		success: function(res) {
			// console.log(res.data)
			haotong.name = res.data
		}
	});
	  
</script>

<style lang="scss" scoped> 
	
	image {
		position: absolute;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 1500rpx;
		z-index: -1;
		
	}
	.report{
		width: 750rpx;
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;	
	}
	.name{
		margin-top: 150rpx;
		font-size: 28rpx;
		margin-left: -54rpx;
		letter-spacing: -0.3rpx;
		
	}
	.cytime{
		font-family: my-fontn;
		font-size: 27rpx;
		margin-top: -595rpx;
		margin-left: 98rpx;
		
		
		
	}
    .jctime{
		font-family: my-fontn;
		font-size: 27rpx;
		margin-top: -490rpx;
		margin-left: 98rpx;
		
		
	}
	
	
</style>
