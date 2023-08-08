<template>
	<view>
		user
				<tabBar :current="0" :tabList="tabList" />
	</view>
</template>

<script>
		import tabBar from '@/components/tabbar/index.vue'
	export default {
		data() {
			return {
				
			}
		},
		components:{
			tabBar
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
