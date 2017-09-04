import React, { Component } from 'react';
import echarts from 'echarts';

var myChart;
var option = {
    background:'#102635',
    title: {
        text: '一天短信发送量',
        textStyle:{
            color:'#f44888',
        }
    },
    legend:{
        data:['昨日发送量','今日发送量'],
        textStyle:{
            color:'white'
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        axisLine:{
            lineStyle:{
                    color: {
                    type: 'linear',
                    x: 0.5,
                    y: 0,
                    x2: 0.5,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#d5cbed' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#9ad4df' // 100% 处的颜色
                    }],
                    globalCoord: true // 缺省为 false
                }
            }
        },
        axisTick:{
            interval:1
        },
        axisLabel:{
            interval:1
        },
        data: [
            {
                value:'00',
                textStyle:{
                    color:'#4e7594'
                }
            },'01','02','03', '04','05', '06','07', '08','09', '10','11', '12','13', '14','15', '16','17', '18','19', '20','21', '22','23', '24'
        ]
    },
    yAxis: {
        type: 'value',
        splitLine:{
            show:false
        },
        axisLabel: {
            formatter: '{value}',
            textStyle:{
                color:'#4e7594'
            }
        },
        axisLine:{
            lineStyle:{
                    color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: '#d5cbed' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#9ad4df' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                }
            }
        }
    },
    series: [
        {
            name:'昨日发送量',
            type:'line',
            smooth: true,
            showSymbol: false,
            symbol: false,
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0.0, color: '#8616aa' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#55dbec' // 100% 处的颜色
                    }], false),
                    width: 5,
                },
            },
            data: [500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400,500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600],
        },
        {
            name:'今日发送量',
            type:'line',
            smooth: true,
            showSymbol: false,
            symbol: false,
            lineStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0.0, color: '#2b1da6' // 0% 处的颜色
                    }, {
                        offset: 1, color: '#eb8a43' // 100% 处的颜色
                    }], false),
                    width: 5,
                },
            },
            data: [1, 115, 130, 500, 600, 400, 350, 490, 510, 520, 560, 430, 350,100, 115, 130, 500, 600, 400, 350, 490, 510, 520, 560, 430],
        }
    ]
};

class LineChart extends Component {
	constructor(){
		super();
		this.onWindowResize = this.onWindowResize.bind(this);
		this.state = {
			lineChartWidth:0,
			lineChartHeight:0
		}
	}
	onWindowResize(){
		console.log('lineChart refresh');
        // var linechart = document.getElementById('lineChart');
		var parent = document.getElementsByClassName('lineChart');
		this.setState({
			lineChartWidth:parent[0].clientWidth,
			lineChartHeight:parent[0].clientHeight
		})
		myChart.resize();
	}
	componentWillUnmount() {
	  	window.removeEventListener('resize', this.onWindowResize)
	}
	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize)
		var linechart = document.getElementById('lineChart');
		var parent = document.getElementsByClassName('lineChart');
		this.setState({
			lineChartWidth:parent[0].clientWidth,
			lineChartHeight:parent[0].clientHeight
		})
		myChart = echarts.init(linechart);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
    }

  render() {
    return (
     <div className="lineChart normal">
		<div id="lineChart" style={{width:this.state.lineChartWidth,height:this.state.lineChartHeight}}></div>
     </div>
    );
  }
}

export {LineChart};
