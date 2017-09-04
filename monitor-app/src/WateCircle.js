import React, { Component } from 'react';
import echarts from 'echarts';
import liquidfill from 'echarts-liquidfill';

var percent = 0;
var myChart;
var option = {
    series: [{
        type: 'liquidFill',
        data: [0.667],
        color:['#97eefb'],
        radius: '100%',
        shape: 'circle',
        center: ['50%', '50%'],
        backgroundStyle: {
            borderColor: '#528994',
            borderWidth: 1,
            shadowColor: 'rgba(0, 0, 0, 0.4)',
            shadowBlur: 20
        },
        outline: {
            show: false
        },
        label: {
            normal: {
                offset:[0,0],
                textStyle: {
                    color: 'black',
                    insideColor: 'black',
                    fontSize: 16
                }
            }
        }
    }],
    tooltip: {
        show: true
    }
};
class WateCircle extends Component {
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
		var wateCircle = document.getElementById('wateCircle');
		myChart = echarts.init(wateCircle);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
    }
  render() {
    return (
     	<div className="wateCircle">
     		<p className="title-top">1G</p>
     		<div id="wateCircle"></div>
     		<p className="title-bottom">内存使用率</p>
      	</div>
    );
  }
}

export {WateCircle};
