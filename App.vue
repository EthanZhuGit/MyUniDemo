<script>
export default {
	onLaunch: function () {
		console.log('App Launch')
		//#ifdef APP-PLUS
		//拦截器,只能作用于异步api
		this.addNetLogInterceptor();
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
