<template>
	<view class="container">
		<u-form :model="record" labelPosition="top" ref="myForm" :rules="rules">
			<u-form-item label="选择类型" prop="recordType" :borderBottom="false" labelWidth="auto" :required="true"
			             @click="showTypePickerSheet">
				<u-input v-model="record.recordType" disabled placeholder="请选择类型"/>
			</u-form-item>

			<u-form-item label="选择人员" prop="staffName" :borderBottom="false" labelWidth="auto" :required="true"
			             v-show="record.recordType==='a'">
				<u-input v-model="record.staffName" placeholder="请选择人员" disabled/>
			</u-form-item>

			<u-form-item label="奖励金额" prop="amount" :borderBottom="false" labelWidth="auto" :required="true">
				<u-input v-model="record.amount"/>
			</u-form-item>

			<u-form-item label="输入文字" prop="picture" :borderBottom="false" labelWidth="auto" :required="true"
			             v-show="record.recordType==='a'">
				<u-input v-model="record.picture"></u-input>
			</u-form-item>

		</u-form>

		<view @click="submit">确定</view>

		<u-action-sheet :show="showTypePicker" :actions="typeList" title="请选择类型" :safeAreaInsetBottom="true"
		                @close="showTypePicker = false" @select="onPicker"/>
	</view>
</template>

<script>
export default {
	data() {
		return {
			key: '',
			record: {
				recordType: '',
				amount: '',
				staffName: '',
				picture: ''
			},
			typeList: [{
				name: 'a'
			}, {
				name: 'b'
			}],
			delegateList: [{
				name: '是'
			}, {
				name: '否'
			}],
			showTypePicker: false,
			rules: {
				recordType:{
					type:'string',
					required: true,
					message: '请选择类型',
					trigger: ['blur', 'change']
				},
				amount:{
					type:'float',
					required: true,
					message: '请输入奖励金额',
					trigger: ['blur', 'change']
				},
				staffName:{
					type: 'string',
					required: true,
					message: '请选择人员',
					trigger: ['blur', 'change']
				},
				picture: {
					type: 'string',
					required: true,
					message: '请上传图片',
					trigger: 'change'
				}
			}

		}
	},
	methods: {
		showTypePickerSheet() {
			this.showTypePicker = true;
		},
		onPicker(e) {
			console.log("onPicker e", e);
			if (this.record.recordType !== e.name) {
				this.record.recordType = e.name;
				this.record.staffName = '';
				this.record.picture = '';
			}
		},
		submit() {
			this.$refs.myForm.validate().then(res => {
				console.log("validate res", res);
			}).catch(err => {
				console.log("validate err", err);
			})
		},
	}
}
</script>

<style scoped lang="scss">
.container {
	width: 100%;
	height: 100vh;
	background-color: #F0F1F4;
	padding-bottom: env(safe-area-inset-bottom);
}
</style>