<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-column title h">个人核酸信息输入</view>
		<view class="uni-form-item uni-column">
			<view class="title">姓名:{{haotong.name}}</view>
			<input class="uni-input" @input="haotong.setname" placeholder="请输入你的名字" />
		</view>
		<view class="uni-form-item uni-column">
			<view class="title">地址:{{haotong.address}}</view>
			<input class="uni-input" @input="haotong.setaddress" placeholder="请输入你的扫码地址" />
		</view>
		<view class=" uni-form-item uni-column">
			<view class="title">身份证:{{haotong.formatIdCard}}</view>
			<input class="uni-input" type="number" @input="haotong.setcard" placeholder="请输入你的身份证号码" />
		</view>
		<view class=" uni-form-item uni-column">
			<view class="title">手机号:{{haotong.formatPhoneNumber}}</view>
			<input class="uni-input" type="number" @input="haotong.setphone" placeholder="请输入你的手机号码" />
		</view>
		<view class="uni-title uni-common-mt uni-common-pl title ">请选择核酸时间</view>
		<view class="uni-list title ">
			<radio-group @change="haotong.radioChange">
				<label class="uni-list-cell uni-list-cell-pd title" v-for="(item, index) in haotong.items"
					:key="haotong.items[index].value">
					<view>{{haotong.items[index].name}}</view>
					<view>
						<radio :value="haotong.items[index].value" :checked="index === current" />
					</view>

				</label>
			</radio-group>
		</view>
		<view class=" uni-form-item uni-column">
			<view class="title cy">采样时间：{{haotong.cyday}} {{haotong.cytime}}</view>
			<view class="cytime">采样时间微调:<button @click="n++">+</button><button @click="n--">-</button><text class="n">
					{{n}}</text> 小时</view>
		</view>

		<view class="uni-form-item ">
			<button type="default" @click="haotong.goto('../haotong/index')">取消</button>
			<navigator class="goto" url="../haotong/index" hover-class="navigator-hover" open-type="redirect">
				<button @click="haotong.done()"> 完成</button>
			</navigator>
		</view>
	</view>
</template>


<script setup>
	import {
		useHaoTongStore
	} from '@/store/haotong.js'
	import {
		storeToRefs
	} from 'pinia'
	import {
		ref
	} from 'vue'
	const haotong = useHaoTongStore()
	const {
		current,
		tztime,
		cytime
	} = storeToRefs(haotong) //设置响应式
	const n = ref(0)
	haotong.tztime = n
</script>

<style lang="scss" scoped>
	.title {
		text-align: center;
		color: #339D66;
	}

	.cytime {
		display: flex;
		color: #339D66;
	}
	.uni-input{
		background-color: #F8F8F8;
	}

	.cy {
		font-size: 34rpx;
	}
    .h{
		margin-top: 40rpx;
	}
	.n {
		font-size: 42rpx;
	}
</style>
