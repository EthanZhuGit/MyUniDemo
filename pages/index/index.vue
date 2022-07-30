<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
		<u--form labelPosition="top"  >
			<u-form-item label="姓名" borderBottom  :required="true">
				<input/>
			</u-form-item>
		</u--form>

		<u-popup mode="center" :show="showPop" :closeOnClickOverlay="true" @close="popViewClose()">
			<scroll-view :scroll-y="true" class='pop_view'>
				<view>12345678</view>
				<view v-for="(item,index) in 10">
					<view>{{item}}</view>
					<!-- 		<view v-for="(item2,index2) in item.subList" >
						<view>{{item2.data}}</view>
					</view> -->
				</view>
			</scroll-view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				showPop: false,
				list: [{
					id: 1,
					name: 'item1',
					subList: [{
						index: 1,
						data: 'data1'
					}, {
						index: 2,
						data: 'data2'
					}]
				}, {
					id: 2,
					name: 'item2',
					subList: [{
						index: 3,
						data: 'data3'
					}, {
						index: 4,
						data: 'data4'
					}, {
						index: 5,
						data: 'data5'
					}]
				}, {
					id: 3,
					name: 'item3',
					subList: [{
						index: 6,
						data: 'data6'
					}, {
						index: 7,
						data: 'data7'
					}, {
						index: 8,
						data: 'data8'
					}]
				}, {
					id: 4,
					name: 'item4',
					subList: [{
						index: 9,
						data: 'data9'
					}]
				}]
			}
		},
		onLoad() {

		},
		methods: {
			imgClick() {
				this.showPop = true;
			},
			itemClick(e) {
				console.log("itemClick", e);
			},
			subItemClick(e) {
				console.log("subItemClick", e);
			},
			popViewClose() {

			}
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
