<template>
	<view class="content">
		<image class="logo" src="/static/logo.png" @click="gotoHome"></image>
		<button @click="goto(1)">图片水印</button>
		<button @click="goto(2)">css</button>
		<button @click="goto(3)">h5 file upload</button>
		<button @click="goto(4)">file upload</button>
		<button @click="goto(5)">forms test</button>
		<button @click="goto(6)">charts test</button>
		<button @click="goto(7)">data bind</button>
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
				let url = '';
				switch (e) {
					case 1:
						url = '../WaterMark/WaterMark';
						break;
					case 2:
						url = '../cascadingStyleSheets/cascadingStyleSheets';
						break
					case 3:
						url='/pages/h5Upload/h5Upload'
						break
					case 4:
						url = '/pages/h5Upload/fileUpload';
						break;
					case 5:
						url = '/pages/forms_test/forms_test';
						break;
					case 6:
						url = '/pages/ucharts/ucharts';
						break;
					case 7:
						url = '/pages/databind/databind';
						break;
				}
				if (url) {
					uni.navigateTo({
						url: url,
					});
				}
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
