<template>
	<view class="flex-test-root">
		<view class="flex_test">
			<view class="flex_child">AAAAAAAAAAA</view>
			<view class="flex_child">BBBBBBBBBB</view>
			<view class="flex_child">CCCCCCCCCCC</view>
			<view class="flex_child">DDDDDDDDDDD</view>
			<view class="flex_child">EEEEEEEEEEEE</view>
			<view class="flex_child">FFFFFFFFFFFF</view>
			<view class="flex_child">GGGGGGGGGGG</view>
			<view class="flex_child">HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</view>
			<view class="flex_child">JJJJJJJJJJJJ</view>
			<view class="flex_child">KKKKKKKKKKkKK</view>
			<view class="flex_child">LLLLLLLLLLLLLLL</view>
			<view class="flex_child">MMMMMMMMMMMMM</view>
		</view>

		<view class="grid_container">
			<view class="grid_item"/>
			<view class="grid_item"/>
			<view class="grid_item"/>
			<view class="grid_item"/>

		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				listData: [{name:'111'},{name:'222'}],
			}
		},
		onLoad(e) {
			this.listData.forEach(i => i.flag = false);
			console.log("onLoad this.listData", this.listData);
		},
		methods: {
			onItemClick(item,index) {
				// item.flag = !item.flag;
				// this.$set(this.listData, index, item);
				this.$set(item,'flag',!item.flag)
			},
		}
	}
</script>

<style lang="scss" scoped>

//uni-page-body{
//	//min-height: 100% !important;
//	height: 100% !important;
//}

.flex-test-root{
	width: 100%;
	height: calc(100vh - var(--window-top));
	background: lightcyan;
}

.flex_test {
	border: 2px solid orangered;
	display: flex;
	flex-direction: column;
	//flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: stretch;
}
.flex_child {
	border: 2px solid orange;
	flex-grow: 0;
}

.grid_container {
	display: grid;
}

.grid_item {
	width: 50rpx;
	height: 50rpx;
	background: #9acafc;

}


</style>
