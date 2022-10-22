<template>
	<view>
		<my-data-bind-component v-model="list"/>
		<view class="btn-box">
			<button class="btn" @click="add">父组件增加</button>
			<button class="btn" @click="change">父组件修改</button>
		</view>
		<button @click="get">get</button>
		<uni-file-picker
				v-model="imageValue"
				fileMediatype="image"
				mode="grid"
				:auto-upload="true"
				@select="select"
				@progress="progress"
				@success="success"
				@fail="fail"
		/>
		

	</view>
</template>

<script>
	import MyDataBindComponent from "@/pages/databind/myDataBindComponent";
	export default {
		components: {MyDataBindComponent},
		data() {
			return {
				list: ["hhh", 'ppp', 'yyyy'],
				imageValue: [],
			}
		},
		methods: {
			add() {
				this.list.push('llll');
			},
			change() {
				// this.list[0] = '父组件修改的内容';
				// this.$set(this.list, 0, '父组件修改的内容');
				this.list.splice(0, 1, '父组件修改的内容');
			},
			get() {
				console.log("get this.list", this.list);
			},
			select(e) {
				console.log("select e", e);
			},
			progress(e) {
				console.log("progress e", e);
			},
			success(e) {
				console.log("success e", e);
			},
			fail(e) {
				console.log("fail e", e);
			},
		}
	}
</script>

<style lang="scss" scoped>
.btn-box {
	display: flex;
	.btn {
		flex: 1 1 auto;
	}
}

</style>
