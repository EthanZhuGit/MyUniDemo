<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="gotoHome"></image>
		<button @click="goto">图片水印</button>
		<button @click="css">css</button>
		<button @click="h5FileUpload">h5 file upload</button>
		<button @click="fileUpload">file upload</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
			}
		},
		onLoad() {

		},
		methods: {
			gotoHome(){
				uni.navigateTo({
					url:'/pages/hospital_overview/hospital_overview'
				})
			},
			
			goto(e){
				console.log("goto",e);
				uni.navigateTo({
					url:'../WaterMark/WaterMark'
				})
			},
			css() {
				uni.navigateTo({
					url:'../cascadingStyleSheets/cascadingStyleSheets'
				})
			},
			h5FileUpload() {
				uni.navigateTo({
					url:'/pages/h5Upload/h5Upload'
				})
			},
			fileUpload() {
				uni.navigateTo({
					url:'/pages/h5Upload/fileUpload'
				})
			},
		}
	}
</script>

<style>
	.pop_view {
		width: 550rpx;
		max-height: 50vh;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: antiquewhite;
		width: 100%;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
