<template>
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
</style>