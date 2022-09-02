<template>
	<view class="container">
		<!--自定义状态栏及标题栏 -->
		<!-- <view class="title1"> -->
			<view class="title">
				<image src="/static/test/login_account.png" class="img-box"></image>
				<view class="group">集团</view>
			</view>
			
		<!-- </view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.container {
		width: 100%;
		height: 100vh;
		background: #ffff7f;
	}

	.title1 {
		width: 100%;
		height: 60rpx;
		background: #ff0000;
		/*margin-top: 180rpx;*/
		/* padding-top: var(--status-bar-height); */
		padding-top: 60rpx;
		
	}
	.title{
		border: 1rpx solid black;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 160rpx;
		padding-top: 150rpx;
		background: #ff0000;
		box-sizing: border-box;
	}

	.img-box {
		width: 40rpx;
		height: 40rpx;
		
	}

	.group {
		
	}
</style>
