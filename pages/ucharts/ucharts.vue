<template>
  <view class="charts-box">
	  <scroll-view scroll-y class="scroll_view">
		  <view class="scroll_item"></view>
		  <view class="scroll_charts">
			  <qiun-data-charts  type="radar" :opts="{legend:{position: 'bottom'},extra:{radar:{border:true}}}" :chartData="chartData"/>
		  </view>
		  <view class="scroll_charts">
			  <qiun-data-charts  type="radar" :opts="{legend:{position: 'bottom'},extra:{radar:{border:true}}}" :chartData="chartData2"/>
		  </view>
		  <view class="scroll_item"></view>

	  </scroll-view>
	  <button class="btn">测试</button>
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {},
	    chartData2: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['line'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
        padding: [15,10,0,15],
        legend: {},
        xAxis: {
          disableGrid: true
        },
        yAxis: {
          gridType: "dash",
          dashLength: 2
        },
        extra: {
          line: {
            type: "curve",
            width: 2
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
	    console.log("getServerData");
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
	      let res = {
		      "categories": ["维度1", "维度2", "维度3", "维度4", "维度5", "维度6"],
		      "series": [{
			      "name": "成交量1",
			      "data": [90, 110, 165, 195, 187, 172]
		      }, {
			      "name": "成交量2",
			      "data": [190, 210, 105, 35, 27, 102]
		      }]
	      };
        this.chartData = JSON.parse(JSON.stringify(res));

	      res = {
		      "categories": ["维度1", "维度2", "维度3", "维度4", "维度5"],
		      "series": [{
			      "name": "成交量1",
			      "data": [90, 110, 165, 195, 187]
		      }, {
			      "name": "成交量2",
			      "data": [190, 210, 105, 35, 27]
		      }]
	      };
	      this.chartData2 = JSON.parse(JSON.stringify(res));
      }, 500);
    },
  }
};
</script>

<style scoped>
  /* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
  .charts-box {
    width: 100%;
    height: 100vh;
	  display: flex;
	  flex-direction: column;
  }

  .scroll_item{
	  height: 400rpx;
	  border: 2rpx solid red ;
  }

  .scroll_charts{
	  height: 600rpx;
	  border: 2rpx solid red ;
  }

  .scroll_view {
	  flex: 1 1 auto;
	  display: flex;
	  flex-direction: column;
	  height: 0;
  }

  .btn {
	  flex: 0 0 auto;
  }

</style>