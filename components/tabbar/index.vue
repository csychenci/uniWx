<!-- <template>
	<view class="uniWx-tabbar">
		<view class="tabbar-border"></view>
		<view v-for="(item,index) in tabList" :key="index" @click="jump(item)" class="tabbar-item" :data-id="index">
			<image :src="current == item.index ? item.selectedIconPath : item.iconPath"></image>
			<view :style="{'color':current == item.index ? '#409eff' : '#909399'}" style="margin-top: 10rpx;">
				{{item.text}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 0,
				inactiveColor: '#909399' // 高亮颜色
			}
		},
		props: {
			tabList: {
				type: Array,
				default: uni.getStorageSync("tabList")
			},
			current: {
				type:Number,
				default:uni.getStorageSync("current")
			}
		},
		onShow() {
			console.log("tabList",this.tabList)
		},
		methods: {
			jump(e) {
				uni.switchTab({
					url: e.pagePath
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.uniWx-tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 48px;
		border-top: 1px solid #ccc;
		background: white;
		display: flex;

		.tabbar-border {
			background-color: white;
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
			height: 1px;
			border-top: 2rpx solid rgba(187, 187, 187, 0.3);
			transform: scaleY(0.5);
		}

		.tabbar-item {
			flex: 1;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			>image {
				width: 24px;
				height: 24px;
			}
			>view {
				font-size: 10px;
			}
		}
	}
</style> -->

<template>
	<view>
		<index v-if="PageCur=='index'"></index>
		<search v-if="PageCur=='search'"></search>
		<user v-if="PageCur=='user'"></user>

		<view class="box">
			<view class="cu-bar tabbar bg-white shadow foot">
				<view class="action" @click="NavChange" data-cur="index">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='index'" src="../../static/tabBar/index_cur.png"></image>
						<image v-if="PageCur != 'index'" src="../../static/tabBar/index.png"></image>
					</view>
					<view :class="PageCur=='index'?'color_main':'text-gray'">首页</view>
				</view>

				<view class="action" @click="NavChange" data-cur="search">
					<view class='cuIcon-cu-image'>
						<image v-if="PageCur=='search'" src="../../static/tabBar/shop_cur.png"></image>
						<image v-if="PageCur != 'search'" src="../../static/tabBar/shop.png"></image>
					</view>
					<view :class="PageCur=='search'?'color_main':'text-gray'">技术栈</view>
				</view>

				<view @click="NavChange" class="action text-gray add-action" data-cur="cases">
					<image class="logo_btn" mode="widthFix" src="../../static/logo.png"></image>
					<view :class="PageCur=='cases'?'color_main':'text-gray'">组件模板</view>
				</view>

				<view class="action" @click="NavChange" data-cur="news">
					<view class='cuIcon-cu-image'>
						<view class="cu-tag badge">{{message}}</view>
						<image v-if="PageCur=='news'" src="../../static/tabBar/order_cur.png"></image>
						<image v-if="PageCur != 'news'" src="../../static/tabBar/order.png"></image>
					</view>
					<view :class="PageCur=='news'?'color_main':'text-gray'">文章资讯</view>
				</view>

				<view class="action" @click="NavChange" data-cur="me">
					<view class='cuIcon-cu-image'>
						<view class="cu-tag badge"><!-- 红点 --></view>
						<image v-if="PageCur=='me'" src="../../static/tabBar/me_cur.png"></image>
						<image v-if="PageCur != 'me'" src="../../static/tabBar/me.png"></image>
					</view>
					<view :class="PageCur=='me'?'color_main':'text-gray'">个人中心</view>
				</view>

			</view>
		</view>

	</view>
</template>

<script>
	import index from "../../pages/index/index.vue";	//首页
	import search from "../../pages/search/index.vue";	//技术视频
	import user from "../../pages/user/index.vue";	//个人中心
	export default {
		components: {
			index,
			search,
			user
		},
		data() {
			return {
				PageCur: 'index',

				message: '2',
				openId:'',
				access_token:'',
				
				tip:"我是提示",
				duration:1

			};
		},
		created() {
			
		},
		// 分享小程序
		onShareAppMessage(res) {
			return {
				title: '学技术·做软件·找案例·寻合作，快来「7he丶Kevin」吧！',
			};
		},
		onLoad() {
			//获取退出时的tabbar记录
			// uni.getStorage({
			// 	key: 'PageCur',
			// 	success: function(res) {
			// 		that.PageCur = res.data;
			// 	},
			// 	fail: function(res) {}
			// });
		},
		methods: {
			NavChange: function(e) {
				console.log(e.currentTarget.dataset.cur)

				this.PageCur = e.currentTarget.dataset.cur;

				if (this.PageCur == 'index') {
					// document.title = '首页'
				} else if (this.PageCur == 'component') {
					// document.title = '积分商城'
				} else if (this.PageCur == 'cases') {
					// document.title = '宅家学'
				} else if (this.PageCur == 'news') {
					// document.title = '文章资讯'
				} else if (this.PageCur == 'me') {
					// document.title = '个人中心'
				}

				// uni.setStorage({
				// 	key: 'PageCur',
				// 	data: this.PageCur,
				// 	success: function() {
				// 		console.log('保存成功！');
				// 	}
				// });
			},
			NavChange_xd: function() {
				uni.navigateTo({
					url: 'publish',
					animationType: 'slide-in-bottom',
					animationDuration: 200
				});
			}
		}
	}
</script>

<style lang="scss">
	.box {
		margin: 20upx 0;
	}
	.box view.cu-bar {
		margin-top: 20upx;
	}
	
	.logo_btn{
		width: 38*2rpx;
		height: 38*2rpx;
		position: absolute;
		z-index: 2;
		border-radius: 50%;
		top: -40rpx;
		left: 0rpx;
		right: 0;
		margin: auto;
		padding: 0;
	}
	.cu-bar.tabbar .action.add-action {
	    padding-top: 56rpx !important;
	}
</style>
