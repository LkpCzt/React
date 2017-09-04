// HistoricalList 历史列表
import React, { Component } from 'react';
// import {Link} from 'react-router';
import HLCell from './HLCell.js';
class HistoricalList extends Component {
  render() {
    return (
		<div className="HistoricalList boundary">
			<ul>
				<li className="font14px">名称</li>
				<li className="font14px">买入时间</li>
				<li className="font14px">价格</li>
				<li className="font14px">卖出点</li>
				<li className="font14px">收益率</li>
			</ul>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
			<HLCell/>
		</div>
    );
  }
}

export default HistoricalList;