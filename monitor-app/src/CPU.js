import React, { Component } from 'react';
import echarts from 'echarts';
var myChart;
var option = {
    title: {
        "text": '办结率',
        "x": '50%',
        "y": '100%',
        textAlign: "center",
        "textStyle": {
            "fontWeight": 'normal',
            "fontSize": 24
        },
        "subtextStyle": {
            "fontWeight": 'bold',
            "fontSize": 32,
            "color": '#3ea1ff'
        }
    },
    series: [{
        "name": ' ',
        "type": 'pie',
        "radius": ['150%', '200%'],
        "center": ['50%', '100%'],
        "avoidLabelOverlap": false,
        "startAngle": 180,
        "color": [
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723',
            "#97eefb",
            '#0d1723', {
                colorStops: [{
                    offset: 0,
                    color: 'red' // 0% 处的颜色
                }, {
                    offset: 0.1,
                    color: 'red' // 100% 处的颜色
                }, {
                    offset: 1,
                    color: '#0d1723' // 100% 处的颜色
                }
                ],
            },
            '#0d1723',
            "transparent"
        ],
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
        "data": [{
            "value": 1,
            "name": '1'
        }, {
            "value": 3,
            "name": '2',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '3'
        }, {
            "value": 3,
            "name": '4',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '5'
        }, {
            "value": 3,
            "name": '6',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '7'
        }, {
            "value": 3,
            "name": '8',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '9'
        }, {
            "value": 3,
            "name": '10',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '11'
        }, {
            "value": 3,
            "name": '12',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '13'
        }, {
            "value": 3,
            "name": '14',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '15'
        }, {
            "value": 3,
            "name": '16',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '17'
        }, {
            "value": 3,
            "name": '18',
            "itemStyle": {
                normal: {
                    borderWidth: 3,
                    borderColor: '#97eefb'
                }
            }
        }, {
            "value": 1,
            "name": '19'
        }, {
            "value": 37,
            "name": '20'
        }],
        silent: true
    }]
};
class CPU extends Component {
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
		var wateCircle = document.getElementById('cpu');
		myChart = echarts.init(wateCircle);
        // 绘制图表
        myChart.setOption(option);
        myChart.resize();
    }
  render() {
    return (
     	<div className="wateCircle">
     		<p className="title-top">1核</p>
     		<div id="cpu"></div>
     		<p className="title-bottom">CPU使用率</p>
      	</div>
    );
  }
}

export {CPU};
