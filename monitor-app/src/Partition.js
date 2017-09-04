import React, { Component } from 'react';
import echarts from 'echarts';

var myChart;
var option = {
    itemStyle:{
        normal:{
            borderWidth: 4,
            borderColor: '#99f1fa',
        }
    },
    series: [{
        type: 'pie',
        radius: [0, '100%'],
        data: [{
            value: 66,
            name: '66%',
            itemStyle:{
                normal:{
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(35, 41, 58, 0.3)' // 0% 处的颜色
                        }, {
                            offset: 1, color: '#99f1fa' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }
                }
            }
        }, 
        {
            value: 44,
            name: '',
            itemStyle: {
                normal: {
                    color: '#0d1723',
                }
            }
        }
        ],
        startAngle: 90,
        itemStyle: {
            normal: {
                color: '#425E8D'
            }
        },
        labelLine: {
            normal: {
                show: true
            }
        },
        label: {
            normal: {
                position: 'inner',
                color: 'black'
            }
        },
        silent: true
    }]
};
class Partition extends Component {
	constructor(){
		super();
		this.onWindowResize = this.onWindowResize.bind(this);
	}
	onWindowResize(){
		console.log('wateCircle refresh');
		myChart.resize();
	}
	componentWillUnmount() {
	  	window.removeEventListener('resize', this.onWindowResize)
	}
	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize)
		var wateCircle = document.getElementById('partition');
		myChart = echarts.init(wateCircle);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
    }
  render() {
    return (
     	<div className="wateCircle fr">
     		<p className="title-top">分区"/"</p>
     		<div id="partition"></div>
     		<p className="title-bottom">磁盘用量(共39G)</p>
      	</div>
    );
  }
}

export {Partition};
