<template>
	<view>
		<!-- <web-view :src="'/hybrid/html/index.html?info=' + info" @message="handleMessage"></web-view> -->
		<!-- <web-view :src="'https://ethanzhugit.github.io/'" @message="handleMessage"></web-view> -->
		<web-view :src='srcUrl' @message="handleMessage"></web-view>
	</view>
</template>

<script>
	import api from '@/api/test.js'
	export default {
		data() {
			return {
				info: encodeURIComponent(JSON.stringify({
					appId: "1232323",
					appKey: "appkey"
				})),
				srcUrl: ''
			}
		},
		onLoad: function(res) {
			console.log("onLoad res", res);
			this.srcUrl="https://ethanzhugit.github.io?info="+encodeURIComponent(1111)

			// api.getQiniuToken().then((res) => {
			// 	console.log("onLoad ", encodeURIComponent(res.data.data));
			// 	console.log("onLoad2",this);
			// 	this.srcUrl="https://ethanzhugit.github.io?info="+encodeURIComponent(res.data.data)
			// 	console.log("onLoad2",this.srcUrl);
			// })

		},
		methods: {
			handleMessage(evt) {
				console.log("handleMessage", evt);
				let msg = '@message传递数据：' + JSON.stringify(evt.detail.data)
				uni.showModal({
					content: msg,
					showCancel: false
				});
				// todo 写入到store中
			}
		}
	}
</script>
