<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
		//#ifdef APP-PLUS
		// let testModule = uni.requireNativePlugin("UniAppBridge").getAppData()
		// for (var k in testModule) {
		//     uni.setStorageSync(k, testModule[k])
		// }
		// uni.setStorageSync('token','2PvmOrTR886e50441628215417652')

		if (uni.getSystemInfoSync().platform === "android") {
			this.addNetLogInterceptor()//开发环境下输出日志
		}
		//#endif
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	methods: {
		addNetLogInterceptor() {
			uni.addInterceptor('request', {
				invoke(args) {
					console.log("request params", args)
				},
				success(args) {
					console.log("request success", args)
				},
				fail(err) {
					console.log('request fail', err)
				}
			})
		}
	}
}
</script>

<style lang="scss">
/* 引入uView基础样式 */
@import "@/uni_modules/uview-ui/index.scss";
</style>
