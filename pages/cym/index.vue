<template>
	<image src="/static/hecym.png"></image>
	<view class="cym" >
		<text class="cymtime">更新于：{{haotong.cymtime}}</text>
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
	.cym{
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.cymtime{
		font-family: my-fontn;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.72);
		font-size: 26rpx;
		margin-top: 850rpx;
		
		
	}
</style>
