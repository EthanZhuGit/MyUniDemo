<template>
	<view class="root_view">
		<image src="@/static/logo.png" @click="gotoFlex"/>
		<text>Text组件</text>
		<view class="box_test" elevation="5px">{{longText}}</view>

		<view class="block_box_test">
			<view class="block_box_test_child_first">元素A</view>
			<view class="block_box_test_child_second">元素B</view>
		</view>

		<view class="block_box_test">
			<view class="margin_collapsing_test">垂直方向</view>
			<view class="margin_collapsing_test">水平方向</view>
		</view>

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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longText: '盒模型组成：Margin box(外边距)、Border box(边框)、Padding box(内边距)、Content box(内容)'
			}
		},
		methods: {
			gotoFlex() {
				uni.navigateTo({
					url:'flexTest'
				})
			},
		}
	}
</script>

<style>
	.root_view{
		display: flex;
		flex-direction: column;
	}
	image,text{
		background: red;
		width: 100rpx;
		height: 100rpx;
	}

	.box_test {
		border-radius: 20rpx;
		box-shadow:5rpx 5rpx 10rpx  rgb(255, 69, 0);
		border: 10rpx solid red;
		margin: 20rpx;
		padding: 50rpx;
		overflow: scroll;
		background: #3c9cff;
	}

	.block_box_test {
		display: block;
		border: 2rpx solid red;
		margin-top: 10rpx;
		background-clip: content-box;
	}

	.block_box_test_child_first {
		display: inline-block;
		border: 5rpx solid #f6b71a;
		margin: 50rpx 100rpx;
	}

	.block_box_test_child_second {
		display: inline-block;
		border: 5rpx solid #77fc0b;
		padding: 50rpx 100rpx 50rpx 20rpx;
	}

	.margin_collapsing_test{
		border:1rpx solid #007aff;
		margin-top: 50rpx;
		margin-bottom: 50rpx;
	}

	.flex_test {
		border: 2px solid orangered;
		display: flex;
		height: 300rpx;
		flex-direction: row;
		flex-wrap: wrap-reverse;
		overflow: scroll;
		justify-content: flex-start;
	}
	.flex_child {
		border: 2px solid orange;
		width: min-content;
	}

	.flex_child:first-child {
		margin: auto;
	}




</style>
