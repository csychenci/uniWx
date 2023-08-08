<template>
	<view class="content">
		<tabBar :current="0" />
	</view>
</template>

<script>
	import tabBar from '@/components/tabbar/index.vue'
	export default {
		data() {
			return {
				title: 'Hello World'
			}
		},
		components:{
			tabBar
		},
		onLoad() {
			uni.hideTabBar();
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	
</style>
