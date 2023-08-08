import {
	createStore
} from 'vuex';

import {tabbar} from "@/utils/index.js";

const Store = createStore({
	state:{
		tabList:tabbar,
		current:"0"
	},
	mutations:{
		setCurrent(state,data) {
			uni.setStorageSync('current', data)
		}
	}
})

export default Store