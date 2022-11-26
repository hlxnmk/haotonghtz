<template>
	<view v-show="isshow" class="xyze">
		<view>
			<image class="xyzeimg" src="/static/xyze.png"></image>
			<text class="cancle" @click="isshow=false"> 取消</text>
			<text class="ok" @click=" haotong.goto('../iaxy/index')"> 允许</text>
		</view>
	</view>

	<scroll-view scroll-y="true" class="scroll-Y">
		<view class="haotong">
			<image class="haotongimg" src="/static/haotonghtzps.png"></image>
			<view class="gotowx" @click=" haotong.goto('../index/index')">
				<image class="wximg" src="/static/wx.png"></image>
			</view>
			<view class="gotohe" @click=" haotong.goto('../heinfo/index')">
				<image class="heimg" src="/static/he.png"></image>
			</view>
			<view class="gotohome" @click=" haotong.goto('../component/index')">
				<image class="homeimg" src="/static/home.png"></image>
			</view>

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
			<view class="smtime"><text class="smtime1">扫码时间：</text><text class="smtime2"> {{haotong.today}}</text><text
					class="smtime3"> {{haotong.smtime}}</text></view>
              
			<view class="show2">
				<view v-if="cylv==haotong.cyday" >
				<view class="cyleft"><text class="cydaylv"> {{haotong.cyday}}</text><text
						class="cytimelv">{{haotong.cytime}}</text></view>
						</view>
				<view v-else >
				<view class="cyleft"><text class="cyday"> {{haotong.cyday}}</text><text
						class="cytime">{{haotong.cytime}}</text></view>
						</view>
				<view class="cyright"><text class="hetime"> {{haotong.items[haotong.current].time}}</text></view>
			</view>
			<view class="htz" @click=" haotong.goto('../htz/index')"> </view>
			<view class="xcka" @click="isshow=true"> </view>

		</view>
		<view class="sw2" @click=" haotong.goto('../xpyi/index')">
			<image class="sw2img" src="/static/sw2.png"></image>
		</view>

	</scroll-view>

</template>

<script>
	import dayjs from "dayjs";
	export default {
		data() {
			return {
				realtime: null,
				timer: null,
			};
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
	const cylv= dayjs().format("MM-DD")

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
	.haotongimg {
		position: absolute;
		top: 0;
		left: 0;
		width: 750rpx;
		height: 1500rpx;
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
		z-index: 4;
		background-color: rgba(128, 128, 128, 0.4);

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


	.gotowx {
		background-color: rgba(255, 255, 255, 0.6);
		box-shadow: 0 0 2rpx 2rpx rgba(234, 234, 234, 0.95);
		z-index: 3;
		position: fixed;
		display: flex;
		justify-content: center;
		justify-items: center;
		right: 20rpx;
		top: 76rpx;
		width: 174rpx;
		height: 56rpx;
		border-radius: 28rpx;

	}

	.wximg {
		width: 129rpx;
		height: 41rpx;
		margin-top: 6rpx;
		margin-left: -4rpx;
	}

	.gotohe {
		background-color: white;
		border: 1rpx solid #85D1FA;
		border-radius: 50%;
		z-index: 3;
		position: fixed;
		display: flex;
		justify-content: center;
		justify-items: center;
		right: 32rpx;
		top: 635rpx;
		width: 102rpx;
		height: 102rpx;
	}

	.heimg {
		border-radius: 50%;
		box-shadow: 0 0 3rpx 3rpx rgba(181, 209, 250, 0.7);
		width: 102rpx;
		height: 102rpx;
	}

	.gotohome {

		border-radius: 50%;
		z-index: 3;
		position: fixed;
		display: flex;
		justify-content: center;
		justify-items: center;
		right: 31rpx;
		top: 769rpx;
		width: 104rpx;
		height: 104rpx;


	}

	.homeimg {
		background-color: #2D70E5;
		border-radius: 50%;
		box-shadow: 0 0 3rpx 3rpx rgba(45, 112, 229, 0.5);
		width: 102rpx;
		height: 102rpx;

	}

	.haotong {

		width: 750rpx;
		height: 1500rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.show1 {
		width: 750rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: flex-start;
		margin-top: 204rpx;
	}

	.left {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	.name {
		font-family: my-fontn;
		font-weight: 700;
		color: rgba(0, 0, 0, 0.72);
	}

	.card {
		font-family: my-fontm;
		padding-top: 23rpx;
		margin-top: -2rpx;
		font-size: 32rpx;
		letter-spacing: 1.8rpx;
		color: #666666;
	}

	.right {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-left: -66rpx;
	}


	.realtime {
		font-family: my-fontm;
		margin-top: -14rpx;
		margin-left: 3rpx;
		letter-spacing: 1.5rpx;
		font-weight: 500;
		font-size: 58rpx;
		color: #303133;
	}

	.today {
		font-family: my-fontm;
		font-size: 32rpx;
		letter-spacing: 1.5rpx;
		color: #666666;

	}

	.address {
		margin-top: 274rpx;
		color: #303133;
		letter-spacing: 1.5rpx;
	}

	.smtime {
		font-family: my-fontn;
		font-size: 28.5rpx;
		color: black;
		font-weight: 500;
		letter-spacing: 1rpx;
		margin-top: 50rpx;
	}

	.smtime1 {
		margin-left: -2rpx;
		font-size: 28.5rpx;
	}

	.smtime2 {
		font-size: 28.5rpx;
		letter-spacing: 1.1rpx;
	}

	.smtime3 {
		font-size: 28.5rpx;
		margin-left: 3rpx;
		letter-spacing: 1.3rpx;
	}

	.show2 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		width: 750rpx;
		height: 78rpx;
		margin-top: -17rpx;
	}
    .cyleft{
		margin-left: 0rpx;
		
	}
	.cyday {
		font-size: 48rpx;
		font-family: my-fontm;
		font-weight: 600;
		color: #000;

	}

	.cytime {
		font-family: my-fontm;
		font-size: 48rpx;
		font-weight: 600;
		color: #888888;
		margin-left: 10rpx;
	}
	.cydaylv {
		font-size: 48rpx;
		font-family: my-fontm;
		font-weight: 600;
		color: #339D66;
	
	}
	
	.cytimelv {
		font-family: my-fontm;
		font-size: 48rpx;
		font-weight: 600;
		color: #339D66;
		margin-left: 10rpx;
	}
     .cyright{
		 height: 100rpx;
		 width: 200rpx;
		 // background-color: #666666;
		 margin-top: 16rpx;
			
	}
	.hetime {
		font-family: my-fontm;
		font-size: 50rpx;
		color: #339D66;
		font-weight: 600;	
		padding-left:10rpx ;
		
	}
	

	.htz {
		width: 300rpx;
		height: 120rpx;
		// background-color: #586C96;
		margin-left: 330rpx;
	}

	.xcka {
		width: 300rpx;
		height: 150rpx;
		margin-left: -330rpx;
		// background-color: skyblue;
	}

	.sw2 {
		height: 452rpx;
		width: 750rpx;
		background-color: #339D66;
	}

	.sw2img {

		height: 438rpx;
		width: 750rpx;

	}
</style>
