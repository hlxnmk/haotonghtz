<template>
	<image class="haotongimg" src="/static/haotongindex.png"></image>

	<view class="haotong" :style="{'height':phoneHeight+'rpx' ,'width':phoneWidth+'rpx'}">
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
	const haotongqr = () => uni.scanCode({
		success: function(res) {
			console.log('条码类型：' + res.scanType);
			console.log('条码内容：' + res.result);
			
			uni.setStorage({
				key: 'address',
				data: res.result.match(/[\u4e00-\u9fa5]/g).join(''),
			});
			haotong.goto('../haotong/index')
		},
		fail: function(res) {
			console.log('条码类型：' + res.scanType);
			console.log('条码内容：' + res.result);
			uni.setStorage({
				key: 'address',
				data: '通富微电',
			});
			haotong.goto('../haotong/index')
		},

	});
</script>

<style lang="scss" scoped>
	$allheight:v-bind(phoneHeight);
	$allwidth:v-bind(phoneWidth);

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

		width: calc($allwidth*1rpx);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}


	navigator {
		margin: 0;
		padding: 0;
	}

	.goto {
		position: absolute;
		margin-top: 650rpx;
		// background-color: aqua;
		width: 100rpx;
		height: 100rpx;

	}
</style>
