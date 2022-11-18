<template>
	<view class="all">

		<image class="heheader" src="/static/heheader.png"></image>
		<scroll-view scroll-y="true" class="sw">
			<view class="list">
				<text class="name1">{{haotong.name}}</text>
				<view class="cytime1"> <text>{{day1}}</text><text> 08:53:59</text> </view>
				<view class="jctime1"> <text>{{day1}}</text><text> 17:35:48</text> </view>
				<view class="gotoz go1" @click=" haotong.goto('../hereportz/index')"></view>

				<image class="imglist1" src="/static/helistz.png"></image>
			</view>
			<view class="list">
				<text class="name2">{{haotong.name}}</text>
                <view class="cytime2"> <text>{{day2}}</text><text> 08:34:05</text> </view>
                <view class="jctime2"> <text>{{day2}}</text><text> 19:21:35</text> </view>
				<view class="gotor go2" @click=" haotong.goto('../hereportr/index')"></view>
				<image class="imglist" src="/static/helistr.png"></image>
				
			</view>
			<view class="list">
				<text class="name2">{{haotong.name}}</text>
				<view class="cytime2"> <text>{{day3}}</text><text> 08:20:17</text> </view>
				<view class="jctime2"> <text>{{day3}}</text><text> 20:32:33</text> </view>
			    <view class="gotor go2" @click=" haotong.goto('../hereportr/index')"></view>
				<image class="imglist" src="/static/helistr.png"></image>
			</view>
			<view class="list">
				<text class="name2">{{haotong.name}}</text>
				<view class="cytime2"> <text>{{day4}}</text><text> 09:18:56</text> </view>
				<view class="jctime2"> <text>{{day4}}</text><text> 08:22:30</text> </view>
			    <view class="gotor go2" @click=" haotong.goto('../hereportr/index')"></view>
				<image class="imglist" src="/static/helistr.png"></image>
			</view>
			<view class="list">
				<text class="name2">{{haotong.name}}</text>
				<view class="cytime2"> <text>{{day5}}</text><text> 08:34:05</text> </view>
				<view class="jctime2"> <text>{{day5}}</text><text> 16:34:59</text> </view>
			    <view class="gotoz go2" @click=" haotong.goto('../hereportz/index')"></view>
				<image class="imglist" src="/static/helistz.png"></image>
			</view>
			<view class="list">
				<text class="name2">{{haotong.name}}</text>
				<view class="cytime2"> <text>{{day6}}</text><text> 09:02:07</text> </view>
				<view class="jctime2"> <text>{{day6}}</text><text> 19:44:23</text> </view>	
				<view class="gotor go2" @click=" haotong.goto('../hereportr/index')"></view>
				<image class="imglist" src="/static/helistr.png"></image>
			</view>
		</scroll-view>
		<image class="hefoot" src="/static/hefoot.png"></image>

	</view>

</template>

<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'
	import dayjs from "dayjs"
	const haotong = useHaoTongStore()
	const day1= dayjs().subtract(1, 'day').format("YYYY-MM-DD")
	const day2= dayjs().subtract(2, 'day').format("YYYY-MM-DD")
	const day3= dayjs().subtract(3, 'day').format("YYYY-MM-DD")
	const day4= dayjs().subtract(4, 'day').format("YYYY-MM-DD")
	const day5= dayjs().subtract(5, 'day').format("YYYY-MM-DD")
	const day6= dayjs().subtract(6, 'day').format("YYYY-MM-DD")
	uni.getStorage({
		key: 'name',
		success: function(res) {
			// console.log(res.data)
			haotong.name = res.data
		}
	});
</script>

<style lang="scss" scoped>
	.all {
		width: 750rpx;
		height: 1500rpx;
	}

	.heheader {
		position: absolute;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 344rpx;
		z-index: 4;
	}

	.hefoot {
		position: absolute;
		width: 750rpx;
		height: 182rpx;
		z-index: 4;
		left: 0;
		bottom: 0;
		
	}

	.sw {
		width: 750rpx;
		height: 1338rpx;	
	}

	.list {
		position: relative;
	}

	.imglist1 {  
		margin-top: 146rpx;
		z-index: -1;
		width: 750rpx;
		height: 286rpx;
	}

	.imglist {

		z-index: -1;
		width: 750rpx;
		height: 286rpx;
		margin-top: -212rpx;
	}

	.name1 {
		font-family: my-fontn;
		font-weight: 700;
		position: relative;
		z-index: 3;
		top: 358rpx;
		left:30rpx;
		letter-spacing: 0.9rpx;
	}
	.name2{
		font-family: my-fontn;
		font-weight: 700;
		position: relative;
		z-index: 3;
		left:30rpx;
		letter-spacing: 0.9rpx;
	}
	.cytime1{
		font-family: my-fontn;
		position: relative;
		z-index: 3;
		font-size: 28rpx;
		left: 170rpx;
		top: 366rpx;
		letter-spacing: -0.3rpx;
		
			
	}
	.jctime1{
		font-family: my-fontn;
		position: relative;
		z-index: 3;
		font-size: 28rpx;
		left: 170rpx;
		top:420rpx;
		letter-spacing: -0.3rpx;
			
	}
	.cytime2{
		font-family: my-fontn;
		position: relative;
		z-index: 3;
		font-size: 28rpx;
		left: 170rpx;
		top:10rpx;
		letter-spacing: -0.3rpx;
			
	}
	.jctime2{
		font-family: my-fontn;
		position: relative;
		z-index: 3;
		font-size: 28rpx;
		left: 170rpx;
		top:64rpx;
		letter-spacing: -0.3rpx;
			
	}
	.go1{
		width: 180rpx;
		height: 60rpx;
		border-radius: 30rpx;
		// background-color: #554757;
		position: relative;
		z-index: 3;
		top:420rpx;
		left: 550rpx;
		
	}
	.go2{
		width: 180rpx;
		height: 60rpx;
		border-radius: 30rpx;
		// background-color: #554757;
		position: relative;
		z-index: 3;
		left: 550rpx;
		top:55rpx;
		
	}
</style>
