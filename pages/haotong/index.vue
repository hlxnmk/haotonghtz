<template>
	<image class="haotongimg" src="/static/haotongnewps.png"></image>
	<view v-show="isshow" class="xyze">
		<view>
			<image class="xyzeimg" src="/static/xyze.png"></image>
			<text class="cancle" @click="isshow=false"> 取消</text>
			<text class="ok"   @click =" haotong.goto('../iaxy/index')"> 允许</text>
		</view>

	</view>

	<view class="haotong" :style="{'height':phoneHeight+'rpx' ,'width':phoneWidth+'rpx'}">
		<view class="show1">
			<view class="left">
				<text class="name"> {{haotong.name}}</text>
				<text class="card"> {{haotong.card}}</text>
			</view>
			<view class="right">
				<text class="realtime"> {{realtime}}</text>
				<text class="today"> {{haotong.today}}</text>
			</view>
		</view>
		<text class="address"> {{haotong.address}}</text>
		<navigator class="goto" url="../component/index" hover-class="navigator-hover" open-type="redirect">
		</navigator>

		<text class="smtime"> {{haotong.smtime}}</text>
		<view class="show2">
			<text class="hetime"> {{haotong.items[haotong.current].time}}</text>
			<text class="cytime"> {{haotong.cytime}}</text>
		</view>
		
		<text class="xcka" @click="isshow=true">点击查看</text>


	</view>
</template>

<script>
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				realtime: null,
				timer: null,
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
		mounted() {
			this.timer = setInterval(() => {
				const date = dayjs(new Date());
				this.realtime = date.format("HH:mm:ss");
			}, 1000);


		},
		beforeDestroy() {
			if (this.timer) {
				clearInterval(this.timer);
			}
		},
	};
</script>



<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'
	import {
		ref
	} from 'vue'
	const haotong = useHaoTongStore()
	const isshow = ref(false)

	uni.getStorage({
		key: 'name',
		success: function(res) {
			// console.log(res.data)
			haotong.name = res.data
		}
	});
	uni.getStorage({
		key: 'card',
		success: function(res) {
			// console.log(res.data)
			haotong.card = res.data
		}
	});
	uni.getStorage({
		key: 'phone',
		success: function(res) {
			// console.log(res.data)
			haotong.phone = res.data
		}
	});
	uni.getStorage({
		key: 'address',
		success: function(res) {
			// console.log(res.data)
			haotong.address = res.data
		}
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

	.xyze {
		position: absolute;
		display: flex;
		justify-content: center;
		justify-items: center;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 2;
		background-color: rgba(128, 128, 128, 0.6);

	}

	.xyzeimg {
		width: 670rpx;
		height: 300rpx;
		margin-top: 600rpx;
		margin-left: 42rpx;

	}

	.cancle {
		position: relative;
		font-size: 36rpx;
		font-weight: 800;
		color: rgba(0, 0, 0, 0);
		top: -98rpx;
		left: 170rpx;


	}

	.ok {
		position: relative;
		font-size: 36rpx;
		font-weight: 800;
		color: #586C96;
		font-weight: 600;
		top: -98rpx;
		left: 430rpx;
		color: rgba(0, 0, 0, 0);


	}

	.haotong {

		width: calc($allwidth*1rpx);
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.show1 {
		width: calc($allwidth*1rpx);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
		margin-top: -228rpx;

	}

	.show1 .left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;

	}

	.left .name {
		 font-weight: 700;
		 color: rgba(0,0,0,0.72);
		
	
	}

	.left .card {
		font-family: my-fontm;
		padding-top: 24rpx;
		font-size: 32rpx;
		letter-spacing: 1.8rpx;
		color: #666666;
	}

	.show1 .right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: -64rpx;

	}

	.right .realtime {
        font-family: my-fontm;
		margin-top: -18rpx;
		letter-spacing: 1.5rpx;
		font-weight: 500;
		font-size: 60rpx;
		color: #303133;
	}

	.right .today {
		font-family: my-fontm;
		font-size: 32rpx;
		letter-spacing: 1.5rpx;
		color: #666666;
	}

	.haotong .address {
		margin-top: -705rpx;
		color: #303133;
		letter-spacing: 1.5rpx;



	}

	navigator {
		margin: 0;
		padding: 0;

	}

	.goto {
		position: absolute;
		right: 40rpx;
		margin-top: -1080rpx;
		height: 80rpx;
		width: 80rpx;
		align-self: end;
		// background-color: aqua;

	}

	.haotong .smtime {
		font-family: my-fontn;
		margin-top: -1980rpx;
		font-size: 28.5rpx;
		color: black;
		font-weight: 500;
		letter-spacing: 1rpx;

	}

	.haotong .show2 {
		position: absolute;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-top: 336rpx;
		margin-left: 140rpx;


	}

	.show2 .hetime {
		font-family: my-fontm;
		font-size: 50rpx;
		margin-top: -10rpx;
		color: #339D66;
		font-weight: 450;


	}

	.show2 .cytime {
		font-family: my-fontn;
		font-size: 27rpx;
		margin-left: 56rpx;
		margin-top: -12rpx;
		color: rgba(0,0,0,0.68);
		font-weight: 600;
	}

	.xcka {
		font-family: my-fontm;
		position: absolute;
		font-size: 48rpx;
		color: #808080;
		margin-top: 516rpx;
		margin-left: -170rpx;
		font-weight: 400;
		letter-spacing: 0.8rpx;



	}
</style>
