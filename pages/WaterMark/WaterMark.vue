<template>
	<view @click="uploadImgWithWaterMark">

<!--		隐藏canvas position:'fixed',left:'100%'-->
<!--		<canvas :style="{position:'fixed',left:'100%',width:canvasWidth,height:canvasHeight}" canvas-id="firstCanvas" :hidden="hideCanvas"></canvas>-->
		<canvas :style="{width:canvasWidth,height:canvasHeight}" canvas-id="firstCanvas" :hidden="hideCanvas"></canvas>

	</view>
</template>

<script>


const asyncFunc = promise => {
	return promise.then(res => [null, res]).catch(error => [error]);
};
export default {
	onLoad(e) {
		uni.getSystemInfo({
			success: result => {
				console.log("success", result)
				this.ratio = result.pixelRatio;
			}
		})
	},
	data() {
		return {
			canvasWidth: '',
			canvasHeight: '',
			ratio: 1,
			screenWidth: 0,
			screenHeight: 0,
			imgPathList: [],
			imgWithMark: [],
			hideCanvas: true
		}
	},
	methods: {
		async uploadImgWithWaterMark() {
			this.hideCanvas = false;
			let sizeType;
			// #ifdef APP-PLUS
			sizeType = ['original'];
			// #endif

			// #ifndef APP-PLUS
			sizeType = ['compressed'];
			// #endif

			//必须指定压缩（小程序不显示原图选项），否则微信小程序选择原图后，产生的图片特别大
			let [err1, res1] = await uni.chooseImage({
				count: 9,
				sourceType: ['album', 'camera'],
				sizeType:  ['compressed']
			});
			if (err1) {
				this.hideCanvas = true;
				console.log("uploadImgWithWaterMark err1", err1)
				return;
			}
			uni.showLoading({
				title: '上传中',
				mask: true
			})
			for (let tempFilePath of res1.tempFilePaths) {
				console.log("uploadImgWithWaterMark tempFilePath", tempFilePath)
				let imagePath = tempFilePath;
				let imgWidth;
				let imgHeight;
				// #ifdef APP-PLUS
				let destPath = '_doc/' + imagePath.substr(imagePath.lastIndexOf('/') + 1, imagePath.length);
				let res2;
				try {
					res2 = await this.compressImg(imagePath, destPath);
				} catch (e) {
					console.error("uploadImgWithWaterMark e", e)
				}
				if (res2) {
					imagePath = res2.target;
				}
				let [err3, res3] = await uni.getImageInfo({
					src: imagePath,
				});
				if (err3) {
					continue;
				}
				console.log("uploadImgWithWaterMark getImageInfo res3", res3);
				if (res3.orientation && (res3.orientation.indexOf('right') !== -1 || res3.orientation.indexOf('left') !== -1)) {
					imgWidth = res3.height;
					imgHeight = res3.width;
				} else {
					imgWidth = res3.width;
					imgHeight = res3.height;
				}
				// #endif

				// #ifndef APP-PLUS
				let [err4, res4] = await uni.getImageInfo({
					src: imagePath,
				});
				if (err4) {
					continue;
				}
				console.log("uploadImgWithWaterMark getImageInfo res4", res4);
				imgWidth = res4.width;
				imgHeight = res4.height;
				// #endif

				this.canvasWidth = imgWidth + 'px';
				this.canvasHeight = imgHeight + 'px';
				console.log("uploadImgWithWaterMark canvas w", this.canvasWidth + " h " + this.canvasHeight + " " + this.ratio);
				await this.sleep(500);
				let ctx = uni.createCanvasContext('firstCanvas');
				ctx.clearRect(0, 0, imgWidth, imgHeight);
				ctx.beginPath();
				ctx.drawImage(imagePath, 0, 0, imgWidth, imgHeight); //先画出图片
				let diagonalLength = imgHeight > imgWidth ? imgHeight * 2 : imgWidth; //选取最长边
				let fontSize = 40; //水印字体大小
				let maskText = '水印哈哈哈 2022-08-18'; //水印文字
				let fontColor = "rgba(255,255,255,.5)"; //水印颜色
				let lineHeight = 200; //水印文字行高
				let textWidth = 450; //水印文字宽度
				ctx.translate(imgWidth / 2, -diagonalLength);
				ctx.rotate(45 * Math.PI / 180); //设置文字的旋转角度，角度为45°；
				// 横向循环次数
				let crossTime = Math.ceil(diagonalLength * 2 / textWidth);
				// 纵向循环次数
				let verticalTime = Math.ceil(diagonalLength * 2 / lineHeight);
				for (let j = 0; j < verticalTime; j++) { //纵向循环
					ctx.setFontSize(fontSize);
					ctx.setFillStyle(fontColor);
					let y = lineHeight * j;
					ctx.fillText(maskText, 0, y);
					for (let i = 1; i < crossTime; i++) { //横向循环
						ctx.setFontSize(fontSize);
						ctx.setFillStyle(fontColor);
						ctx.fillText(maskText, textWidth * i, y);
					}
				}
				let drawRes = await this.canvasDrawPromise(ctx);
				await this.sleep(500);
				let [err5, res5] = await uni.canvasToTempFilePath({
					canvasId: 'firstCanvas',
					destWidth: imgWidth,
					destHeight: imgHeight
				});

				ctx.clearRect(0, 0, imgWidth, imgHeight);
				if (err5) {
					continue;
				}
				console.log("takePhoto canvasToTempFilePath", res5);

				let [err6, res6] = await uni.saveImageToPhotosAlbum({
					filePath: res5.tempFilePath,
				});
				console.log("uploadImgWithWaterMark res6", res6);
			}
			uni.hideLoading();
			this.hideCanvas = true;
		},
		sleep(delay) {
			return new Promise((resolve, reject) => {
				//使用定时器进行延时发送通知
				setTimeout(() => {
					resolve();
				}, delay)
			})
		},
		previewPhoto() {
			uni.previewImage({
				current: this.imgPathList[0],
				urls: this.imgPathList
			})
		},
		compressImg(src, dest) {
			return new Promise((resolve, reject) => {
				plus.zip.compressImage({
					src: src,
					dst: dest,
					quality: 50,
					format: 'jpg',
					overwrite: true
				}, function (result) {
					resolve(result);
				}, function (err) {
					reject(err);
				})
			})
		},

		canvasDrawPromise(ctx) {
			return new Promise(resolve => {
				ctx.draw(false, (result) => {
					console.log("canvasDrawPromise result", result);
					resolve(result);
				});
			})
		},
	}
}
</script>

<style lang="scss" scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	background-color: antiquewhite;
	width: 100%;
	height: 100vh;
	padding-bottom: env(safe-area-inset-bottom);

}

.btnAddPhoto {
	width: 220rpx;
	height: 220rpx;
	border: dashed 1px #aaa;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 50rpx;
}
</style>
