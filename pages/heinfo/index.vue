<template>
	    <image src="/static/heinfo.png"></image>
	   <view class="all">   
		<view class="heresult" @click=" haotong.goto('../heresult/index')"></view>
		<view class="hecym" @click=" haotong.goto('../cym/index')"></view>
	</view>


</template>

<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'

	const haotong = useHaoTongStore()
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
	
	.all{
		width: 750rpx;
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	    z-index: 3;
	}
	.heresult{
		// background-color: #384698;
		width: 300rpx;
		height: 300rpx;
		margin-top: 330rpx;
		margin-left: -320rpx;
		
	}
	.hecym{
		// background-color: #387798;
		width: 300rpx;
		height: 300rpx;
		margin-top: -530rpx;
		margin-left: -320rpx;
	}
</style>
