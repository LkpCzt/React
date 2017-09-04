import React, { Component } from 'react';
import echarts from 'echarts';

var myChart;
var option = {
    itemStyle:{
        normal:{
            borderWidth: 4,
            borderColor: '#97eefb',
        }
    },
    series: [ 
        {
            "name": ' ',
            "type": 'pie',
            "radius": ['140%', '200%'],
            "center": ['50%','100%'],
            "avoidLabelOverlap": false,
            "startAngle": 180,
            "color": ['#102635',"#97eefb",'#102635', "transparent"],
            "hoverAnimation": false,
            "legendHoverLink": false,
            "label": {
                "normal": {
                    "show": false,
                    "position": 'center'
                },
                "emphasis": {
                    "show": true,
                    "textStyle": {
                        "fontSize": '30',
                        "fontWeight": 'bold'
                    }
                }
            },
            "labelLine": {
                "normal": {
                    "show": false
                }
            },
            "data": [
                {
                "value": 2.5,
                "name": '1'
            }, 
            {
                "value": 20,
                "name": '2'
            }, {
                "value": 2.5,
                "name": '3'
            }, {
                "value": 25,
                "name": '4'
            }],
            silent: true
        }
    ]
};
class Process extends Component {
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
		var wateCircle = document.getElementById('process');
		myChart = echarts.init(wateCircle);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
    }
  render() {
    return (
     	<div className="wateCircle fr">
     		<p className="title-top">数量</p>
     		<div id="process"></div>
     		<p className="title-bottom">进程总数</p>
      	</div>
    );
  }
}

export {Process};
