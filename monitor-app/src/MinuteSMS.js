import React, { Component } from 'react';
import echarts from 'echarts';

var percent = 0;
var myChart;
function getData() {
    return [{
        value: percent,
        itemStyle: {
            normal: {
                color: {
				    type: 'linear',
				    x: 1,
				    y: 0,
				    x2: 0,
				    y2: 1,
				    colorStops: [{
				        offset: 0, color: '#10396e' // 0% 处的颜色
				    }, {
				        offset: 1, color: '#68f5f7' // 100% 处的颜色
				    }],
				    globalCoord: false // 缺省为 false
				}
            }
        },
    }, {
        value: 59 - percent,
        itemStyle: {
            normal: {
                color: 'transparent'
            }
        }
    }];
}

var option = {
    backgroundColor: '#102635',
    title: {
        text:'123',
        textStyle:{
            color: '#98a0c4'
        },
        subtext: '00:00',
        x: 'center',
        y: 'center',
        subtextStyle: {
            color: '#98a0c4',
            fontWeight: 'bolder',
            fontSize: 15,
        },
    },
    series: [{
        name: 'main',
        type: 'pie',
        hoverAnimation:false,
        radius: ['95%', '100%'],
        label: {
            normal: {
                show: false,
            }
        },
        data: getData(),

        animationEasingUpdate: 'cubicInOut',
        animationDurationUpdate: 1000
    }]
};

var timeout = false; //启动及关闭按钮  
function time() {
    if (timeout) return;
    if (percent === 59) {
        var date = new Date();
        percent = date.getSeconds();
    } else {
        ++percent;
    }
    myChart.setOption({
        title: {
            subtext: percent < 10 ? '0' + percent : percent
        },
        series: [{
            name: 'main',
            data: getData()
        }]
    });
    setTimeout(time, 1000); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒 
}
class MinuteSMS extends Component {
	constructor(){
		super();
		this.onWindowResize = this.onWindowResize.bind(this);
	}
	onWindowResize(){
		console.log('lineChart refresh');
		myChart.resize();
	}
	componentWillUnmount() {
	  	window.removeEventListener('resize', this.onWindowResize)
	}
	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize)
		var ring = document.getElementById('minute-ring');
		console.log(ring);
		myChart = echarts.init(ring);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
        // 获取当前秒数
        var date = new Date();
        console.log(date.getSeconds());
        percent = date.getSeconds();
        setTimeout(time, 1000);
    }
  render() {
    return (
     	<div className="minuteSMS normal">
     		<div className="ring" id="minute-ring"></div>
     		<div className="ring-right">
     			<div className="ring-title">
     				<div className="title-img"></div>
     				&nbsp;一分钟短息发送量
     			</div>
     			<ul className="ring-bottom">
     				<li>11000</li>
     				<li>94000</li>
     				<li>999,999</li>
     			</ul>
     		</div>
     		
      	</div>
    );
  }
}

export {MinuteSMS};
