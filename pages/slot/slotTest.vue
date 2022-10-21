<template>
	<view>
		<MySlotComponent @click.native="refFunction" ref="refMySlot" show-text="参数text"  :show-num="0">
			<template v-slot:footer>
				<view>我是footer</view>
				<view>底部</view>
			</template>
			<template v-slot:default>
				默认slot slot
			</template>
		</MySlotComponent>
	</view>
</template>

<script>
	import MySlotComponent from "./MySlotComponent.vue"
	export default {
		components:{MySlotComponent},
		
		data() {
			return {
				
			}
		},
		methods: {
			refFunction() {
				this.$refs.refMySlot.updateShowText('哈哈哈哈哈');
			},
		}
	}
</script>

<style>

</style>
