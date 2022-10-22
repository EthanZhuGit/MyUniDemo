<template>
	<view>
		<view v-for="(item1,index1) in value" :key="index1">{{'myList '+item1}}</view>
		<view>---------------------------------------</view>
		<view v-for="(item2,index2) in computedList" :key="index2">{{'computedList '+item2}}</view>
		<view>---------------------------------------</view>
		<view v-for="(item3,index3) in listInData" :key="index3">{{'listInData '+item3}}</view>
		<button @click="subAdd">子组件增加</button>
	</view>
</template>

<script>
import value from "@/uni_modules/uview-ui/components/u-text/value";

export default {
	name: "myDataBindComponent",
	//微信小程序不支持自定义
	// model: {
	// 	prop: 'myList',
	// 	event: 'listChange',
	// },
	props: {
		value: {
			type: String | Array,
			default: '',
		}
	},
	watch: {
		value: {
			handler: function (newValue, oldValue) {
				console.log("watch handler newValue", newValue);
				console.log("watch handler oldValue", oldValue);
				console.log("watch handler equals this.value ", this.value === newValue);
				console.log("watch handler equals this.listInData ", this.listInData === newValue);

				this.listInData = [...newValue];
			},
			immediate: true,
			// deep: true,
		},
	},
	computed: {
		computedList: {
			get() {
				console.log("computed get this.value", this.value);

				return [...this.value];
			},
			set(val) {
				console.log("computed set val", val);
				// this.$emit('input', val);
			},
		},
	},
	data() {
		return {
			listInData: [],
			listInDataForComputed: [],
		}
	},
	methods:{
		subAdd() {
			// this.listInData.push("add from child components");
			// console.log("subAdd this.value", this.value);
			// console.log("subAdd this.listInData", this.listInData);
			// this.$emit("input", this.listInData);
			//

			let newList = [...this.computedList];


			newList.push("add from child to computedList");

			// this.computedList = newList;

			this.$emit('input', newList);

			console.log("subAdd this.computedList", this.computedList);
		},
	}
}
</script>

<style scoped>

</style>