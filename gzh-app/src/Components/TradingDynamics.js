// 交易动态 TradingDynamics
import React, { Component } from 'react';
import {Link} from 'react-router';
import TDCell from './TDCell';
class TradingDynamics extends Component {
  render() {
    return (
		<div className="Trading-dynamics boundary">
			<p className="title font14px">交易动态</p>
			<TDCell />
			<TDCell />
			<TDCell />
			<Link className="font13px" to="/TodayAllTransactions">查看今日全部交易</Link>
		</div>
    );
  }
}

export default TradingDynamics;