<template>
	<view class="root_view">
		<view class="contanier">
			<button class="btn" @click="click">哈哈11哈</button>
<!--			<button class="btn" @click="click2">哈哈11哈</button>-->
			<scroll-view class="contain_top_scroll" scroll-y="true">
				<view v-if="contentList&&contentList.length">
					<view class="item" v-for="(item,index) in contentList" :key="index">
						<view>{{ item.name }}</view>
						<view class="view_text" @click="viewClick(item,index)" v-if="!item.isEdit">{{item.content}}</view>
						<textarea class="text_area" v-model="item.content" auto-height @linechange="lineChangeListener" maxlength="-1" v-if="item.isEdit"></textarea>
					</view>
				</view>
			</scroll-view>
<!--			<textarea v-model="input" auto-height ></textarea>-->

		</view>
		<u-popup :show="show" mode="center">
			<view>
				<text>出淤泥而不染，濯清涟而不妖</text>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	onLoad() {
		// this.contentList = this.list3;
	},

	data() {
		return {
			input: '开始的时候一直怀疑是因为循环的是对象下的数组导致的问题，但是经过在其他地方实验，调试，都没有复现类似的问题。' +
					'出现输入不进去的情况往往是因为dom存在，而v-model绑定的数据还没有创建的时候才会出现，所以我决定监听一下数组，突然间发现，' +
					'好家伙切换的时候应该是清空数组，watch居然没反馈结果，只给了一个新的长度为1的',
			list1: ['b', 'c', 'd', 'e', 'e', 'f', 'g', 'a', 'b', 'c', 'd', 'e', 'e', 'f', 'g'],
			list2: ['e', 'f', 'g'],
			contentList: [],
			list3: [{
				name: 'a',
				content: '开始的时候一直怀疑是因为循环的是对象下的数组导致的问题，但是经过在其他地方实验，调试，都没有复现类似的问题。' +
						'出现输入不进去的情况往往是因为dom存在，而v-model绑定的数据还没有创建的时候才会出现，所以我决定监听一下数组，突然间发现，' +
						'好家伙切换的时候应该是清空数组，watch居然没反馈结果，只给了一个新的长度为1的',
				// isEdit:false
			}, {
				name: 'b',
				content: 'bbbbbbbbbbb',
				// isEdit:false
			}, {
				name: 'c',
				content: 'ccccccccccccccccc',
				// isEdit:false
			}, {
				name: 'd',
				content: 'ddddddddddddddddddd',
				// isEdit:false
			}, {
				name: 'e',
				content: '阿斯顿发送到发发呆时撒的发生打发第三方阿萨德饭是大是大非阿萨德饭是的发送到发送到发送到发斯蒂芬奥迪阿萨德饭是发送到发送到发生的发生大是大非阿萨德发撒的发放阿斯蒂芬阿萨德发撒的奥迪是发送到发;房间爱上',
				// isEdit:false

			}, {
				name: 'f',
				content: '阿斯顿发送到发发呆时撒的发生打发第三方阿萨德饭是大是大非阿萨德饭是的发送到发送到发送到发斯蒂芬奥迪阿萨德饭是发送到发送到发生的发生大是大非阿萨德发撒的发放阿斯蒂芬阿萨德发撒的奥迪是发送到发;房间爱上',
				// isEdit:false

			}],
			list4: [{
				name: 'g',
				content: '开始的时候一直怀疑是因为循环的是对象下的数组导致的问题，但是经过在其他地方实验，调试，都没有复现类似的问题。' +
						'出现输入不进去的情况往往是因为dom存在，而v-model绑定的数据还没有创建的时候才会出现，所以我决定监听一下数组，突然间发现，' +
						'好家伙切换的时候应该是清空数组，watch居然没反馈结果，只给了一个新的长度为1的',
			}, {
				name: 'h',
				content: 'bbbbbbbbbbb'
			}, {
				name: 'i',
				content: 'ccccccccccccccccc'
			}, {
				name: 'j',
				content: 'ddddddddddddddddddd'
			}, {
				name: 'k',
				content: '阿斯顿发送到发发呆时撒的发生打发第三方阿萨德饭是大是大非阿萨德饭是的发送到发送到发送到发斯蒂芬奥迪阿萨德饭是发送到发送到发生的发生大是大非阿萨德发撒的发放阿斯蒂芬阿萨德发撒的奥迪是发送到发;房间爱上'
			}, {
				name: 'l',
				content: '阿斯顿发送到发发呆时撒的发生打发第三方阿萨德饭是大是大非阿萨德饭是的发送到发送到发送到发斯蒂芬奥迪阿萨德饭是发送到发送到发生的发生大是大非阿萨德发撒的发放阿斯蒂芬阿萨德发撒的奥迪是发送到发;房间爱上'
			}],
			type: 1,
			show: false,

		}
	},
	onPageScroll(e) {
		console.log("onPageScroll", e);
	},
	methods: {
		test(item, index) {
			console.log("test item", item);
			console.log("test index", index);
		},
		click() {
			wx.enableAlertBeforeUnload({
				message: 'hhfdhf',
				success(res) {
					console.log("success res", res);
				},
				fail(res) {
					console.log("fail res", res);
				},
				complete(res) {
					console.log("complete res", res);
				},
			})
			this.contentList = this.list3;
		},
		click2() {
			this.contentList = this.list4;
		},
		lineChangeListener(e) {
			// console.log("lineChangeListener e", e);
			console.log("lineChangeListener JSON.stringify(e)", JSON.stringify(e))
		},
		viewClick(item, index) {
			console.log("viewClick"+this.contentList[index]);
			// this.$set(this.contentList[index],"isEdit",true);
			this.$set(item,"isEdit",true);
		},
	}
}
</script>

<style lang="scss" scoped>
.root_view {
	width: 100%;
	height: calc(100vh - var(--window-top));
	background-color: #F0F1F4;
	box-sizing: border-box;
	padding-bottom: env(safe-area-inset-bottom);
}

.contanier {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}

.contain_top {
	width: 100%;
	height: 0;
	flex-grow: 1;
	flex-shrink: 0;
	background: #9acafc;
}

.contain_top_scroll {
	width: 100%;
	height: 0;

	flex-grow: 1;
	flex-shrink: 0;
}

.item {
	border: 1rpx solid red;
}

.view_text {
	width: 100%;
	font-size: 30rpx;
	padding: 12rpx 24rpx;
}

.text_area {
	width: 100%;
	font-size: 30rpx;
	padding: 12rpx 24rpx;
}

.btn {
	width: 100%;
	flex: 0 0 auto;
}
</style>
