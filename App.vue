
<script>
	export default {
		data(){
			return {
				tabList:[]
			}
		},
		onLaunch: function() {
			// 从 storage 获取登陆信息，没有则需要登录
			let tokenInfo = uni.getStorageSync("tokenInfo");
			let hasValidToken = false;
			if (tokenInfo) {
				let time = new Date().valueOf();
				// 存储时间小于token失效时间，才是有效token, 否则重新授权
				hasValidToken = time - tokenInfo.timestamp < 3600 * 24 * 1000;
			}
			if (!hasValidToken) {
				uni.login({
					provider: "weixin",
					success: (wxInfo) => {
						uni.setStorage({
							key: 'tokenInfo',
							data: {
								token: "dasdajdahs",
								timestamp: new Date().valueOf()
							}
						})
						// this.$api.post('/wxa/login', {
						// 	code: wxInfo.code,
						// }).then((res) => {
						// 	// 存储获取到的token
						// 	uni.setStorage({
						// 		key: 'tokenInfo',
						// 		data: {
						// 			token: res.token,
						// 			timestamp: new Date().valueOf()
						// 		}
						// 	})
						// })
					}
				})
			}
		},
		onShow: function() {
			// uni.hideTabBar();
		},
		onHide: function() {
			console.log('App Hide')
		},
		onLoad() {
			uni.hideTabBar();
		}
	}
</script>

<style lang="scss">
	@import "colorui/main.css";
	@import "colorui/icon.css";
	@import "uview-ui/index.scss";
</style>
