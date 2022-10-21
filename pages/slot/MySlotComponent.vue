<template>
	<view>
		<view>我是子组件:{{myShowText}}</view>
		<slot></slot>
		<view>分割线{{myShowNum}}</view>
		<slot name="footer"></slot>
	</view>
</template>

<script>
	export default {
		name: 'MySlotComponent',
		props: {
			showText:{
				type: String,
				default: '默认',
				required: true,
				validator:function (value) {
					return value.length > 0;
				}
			},
			showNum:{
				type:Number,
				default: 99,
			}
		},

		mounted() {
			console.log("mounted");	
		},
		data() {
			return {
				myShowText: this.showText,
				myShowNum: this.showNum,
			}
		},
		methods: {
			updateShowText(text) {
				this.myShowText = text;
			},
		}
	}
</script>

<style>

</style>
