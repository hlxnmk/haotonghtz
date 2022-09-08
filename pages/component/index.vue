<template>
	<view class="uni-common-mt">
		<view class="uni-form-item uni-column title">{{text}}</view>
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
			<view class="title">{{haotong.cytime}}</view>
			<view class="cytime"><text>采样时间微调:</text><button @click="n++">+</button><button @click="n--">-</button><text
					class="n"> {{n}}</text> 小时</view>
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
	const haotong = useHaoTongStore()
	const {
		text,
		current,
		tztime,
		cytime
	} = storeToRefs(haotong) //设置响应式
	setInterval(() => haotong.get_Hitokoto(), 20000) //比settimeout好用
	import {
		ref
	} from 'vue'
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

	.n {
		font-size: 42rpx;
	}
</style>
