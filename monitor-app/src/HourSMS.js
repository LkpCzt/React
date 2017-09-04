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
        value: 60 - percent,
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
	var date = new Date();
    if (timeout) return;
    var temp = percent < 10 ? '0' + percent : percent;  
    var temp1 = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    myChart.setOption({
        title: {
            subtext: temp1 + ':' + temp
        },
        series: [{
            name: 'main',
            data: getData()
        }]
    });
    
    if (percent === 59) {
        percent = 0;
    } else {
        ++percent;
    }
    setTimeout(time, 60000 - date.getSeconds() * 1000); //time是指本身,延时递归调用自己,100为间隔调用时间,单位毫秒 
}
class HourSMS extends Component {
	constructor(){
		super();
		this.onWindowResize = this.onWindowResize.bind(this);
		this.state = {
			ringWidth:0,
			ringHeight:0
		}
	}
	onWindowResize(){
		console.log('lineChart refresh');
		var ring = document.getElementById('hour-ring');
		console.log(ring.clientWidth);
		this.setState({
			ringWidth:ring.clientWidth,
			ringHeight:ring.clientHeight
		})
		console.log(this.state.ringWidth);
		console.log(this.state.ringHeight);
		myChart.resize();
	}
	componentWillUnmount() {
	  	window.removeEventListener('resize', this.onWindowResize)
	}
	componentDidMount() {
		window.addEventListener('resize', this.onWindowResize)
		var ring = document.getElementById('hour-ring');
		console.log(ring);
		myChart = echarts.init(ring);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
        // 获取当前秒数
        var date = new Date();
        console.log(date.getMinutes());
        percent = date.getMinutes();
        setTimeout(time, 0);
    }
  render() {
    return (
     	<div className="hourSMS normal">
     		<div className="ring" id="hour-ring"></div>
     		<div className="ring-right">
     			<div className="ring-title">
     				<div className="title-img"></div>
     				&nbsp;一小时短息发送量
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

export {HourSMS};
