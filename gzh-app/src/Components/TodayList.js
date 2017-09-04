// 今日全部列表 TodayList
import React, { Component } from 'react';
// import {Link} from 'react-router';
import TDACell from './TDACell';
class TodayList extends Component {
  render() {
    return (
		<div className="TodayList boundary">
			<ul>
				<li className="font14px">名称</li>
				<li className="font14px">买入时间</li>
				<li className="font14px">价格</li>
				<li className="font14px">实时收益</li>
			</ul>
			<TDACell />
			<TDACell />
			<TDACell />
			<TDACell />
			<TDACell />
			<TDACell />
			<TDACell />
			<TDACell />
			<TDACell />
		</div>
    );
  }
}

export default TodayList;