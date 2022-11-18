<template>
	<image class="iaxyimg"  src="/static/iaxyps.png"></image>
	<view class="iaxy">
	<text class="phone"> {{haotong.formatPhoneNumber}}</text>
	<image class="ok" @click="cxshow=false" v-show="cxshow" src="/static/ok.png"></image>
	<image class="cx" v-show="cxshow" @click =" haotong.goto('../xcka/index')"  src="/static/cx.png"></image>
	<text class="btn" @click="cxshow = true"></text>
	</view>

</template>
<script setup>
	import dayjs from "dayjs"
	import {
		useHaoTongStore
	} from '@/store/haotong.js'
		import {ref} from 'vue'
	const haotong = useHaoTongStore()
	const cxshow= ref(false)
	  
</script>

<style lang="scss" scoped> 
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
		margin-top: 378rpx;
		margin-left: 78rpx;
		width: 80rpx;
		height: 80rpx;
		
	}
	.cx{
		margin-top: 130rpx;
		margin-left: 62rpx;
		width: 630rpx;
		height: 140rpx;
			
	}
	
	
</style>
