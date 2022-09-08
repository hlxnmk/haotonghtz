import {
	defineStore
} from 'pinia'
// 定义数据仓库
import axios from 'axios'
import dayjs from "dayjs"


export const useHaoTongStore = defineStore('haotong', {
	state: () => {
		return {
			text: 'Hitokoto',
			name: '小天猫',
			card: '320111111111111111',
			phone: '15211111111',
			smtime: dayjs().format("扫码时间： YYYY年MM月DD日 HH:mm:ss"),
			xctime: dayjs().format("YYYY.MM.DD HH:mm:ss"),
			today: dayjs().format("YYYY年MM月DD日"),
			address: '通富微电',
			current: 0,
			tztime: 0,
			items: [{
					value: dayjs().subtract(1, 'day').add(3, 'hour').add(18, 'minutes').format("最近采样： MM-DD HH:mm"),
					time: '48',
					name: '48小时',
					alg: dayjs().subtract(1, 'day').add(3, 'hour').add(18, 'minutes'),
					checked: 'true'
				},
				{
					value: dayjs().subtract(1, 'day').add(12, 'hour').add(27, 'minutes').format(
						"最近采样: MM-DD HH:mm"),
					name: '24小时',
					time: '24',
					alg:dayjs().subtract(1, 'day').add(12, 'hour').add(27, 'minutes')
				},
				{
					value: dayjs().subtract(2, 'day').subtract(6, 'hour').add(32, 'minutes').format(
						"最近采样: MM-DD HH:mm"),
					time: '72',
					name: '72小时',
					alg:dayjs().subtract(2, 'day').subtract(6, 'hour').add(32, 'minutes')
				},

			],

		}
	},
	getters: {
		formatIdCard: (state) => {
			let newStr = state.card.replace(/(?<=\d{3})\d{12}(?=\d{2})/, "************")
			return newStr
		},
		formatPhoneNumber: (state) => {
			let newStr = state.phone.replace(/(?<=\d{3})\d{4}(?=\d{3})/, "****")
			return newStr
		},
		cytime: (state) => {
			let cytime = state.items[state.current].alg
			if (state.tztime > 0) {
			cytime =cytime.add(state.tztime, 'hour')
			} else if(state.tztime < 0){
				let n = -state.tztime
			cytime = cytime.subtract(n, 'hour')
			}
			return cytime.format("最近采样: MM-DD HH:mm")
		},
	},
	actions: {
		async get_Hitokoto() {
			axios.get('https://v1.hitokoto.cn', {
					timeout: 20000
				})
				.then(({
					data
				}) => {
					this.text = data.hitokoto
				})
				.catch(console.error)
		},
		goto(url) {
			uni.navigateTo({
				url: url
			})
		},
		done() {




			uni.setStorage({
				key: 'name',
				data: this.name,
				// success: function () {
				// 	console.log('success');
				// }
			});
			uni.setStorage({
				key: 'card',
				data: this.formatIdCard,
				// success: function () {
				// 	console.log('success');
				// }
			});
			uni.setStorage({
				key: 'address',
				data: this.address,
				// success: function () {
				// 	console.log('success');
				// }
			});
			uni.setStorage({
				key: 'phone',
				data: this.formatPhoneNumber,
				// success: function () {
				// 	console.log('success');
				// }
			});

		},
		radioChange(event) {
			for (let i = 0; i < this.items.length; i++) {
				if (this.items[i].value === event.detail.value) {
					this.current = i;
					// console.log(this.current)
					// console.log(this.formatIdCard)
					break;
				}
			}
		},
		setname(event) {
			this.name = event.detail.value
			// console.log(this.name)	
		},

		setcard(event) {
			this.card = event.detail.value
			// console.log(this.card)
		},
		setphone(event) {
			this.phone = event.detail.value
			// console.log(this.card)
		},

		setaddress(event) {
			this.address = event.detail.value

		},
		
	},

})
