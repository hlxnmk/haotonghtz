<template>
	<image class="haotongimg" src="/static/haotongindex.png"></image>

	<view class="haotong" >
		<text class="goto" @click="haotongqr()"> </text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneHeight: 0, //屏幕高度
				phoneWidth: 0, //屏幕高度
			};
		},


	};
</script>



<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'

	const haotong = useHaoTongStore()
	const haotongqr = () => uni.scanCode({
		success: function(res) {
			// console.log('条码类型：' + res.scanType);
			// console.log('条码内容：' + res.result);
			
			uni.setStorage({
				key: 'address',
				data: res.result.match(/[\u4e00-\u9fa5]/g).join(''),
			});
			haotong.goto('../haotong/index')
		},
		fail: function(res) {
			// console.log('条码类型：' + res.scanType);
			// console.log('条码内容：' + res.result);
			uni.setStorage({
				key: 'address',
				data: '通富微电',
			});
			haotong.goto('../haotong/index')
		},

	});
</script>

<style lang="scss" scoped>
	

	.haotongimg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	text {
		z-index: 1;
	}

	.haotong {
        height: 1500rpx;
		width: 750rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}


	.goto {
		position: absolute;
		margin-top: 650rpx;
		// background-color: aqua;
		width: 100rpx;
		height: 100rpx;

	}
</style>
