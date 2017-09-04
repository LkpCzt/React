// HistoricalHeaderView 历史页面头部
import React, { Component } from 'react';
// import {Link} from 'react-router';
class HistoricalHeaderView extends Component {
  render() {
    return (
		<div className="HistoricalHeaderView">
			<ul className="top">
				<li className="font14px">累计收益</li>
				<li className="font14px">T+1日最高价</li>
			</ul>
			<p className="font30px">-0.08%</p>
			<ul className="bottom">
				<li className="font12px">日均收益<br/><span>0.02%</span></li>
				<li className="font12px">买入次数<br/><span>74</span></li>
				<li className="font12px">股票成功率<br/><span>0.02%</span></li>
			</ul>
		</div>
    );
  }
}

export default HistoricalHeaderView;