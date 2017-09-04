// TodayAllTransactions 今日全部交易
import React, { Component } from 'react';
import {Link} from 'react-router';
import RealTimeIncome from './Components/RealTimeIncome.js';
import TodayList from './Components/TodayList.js';
class TodayAllTransactions extends Component {
  render() {
    return (
		<div className="Today-All-Transactions">
			<RealTimeIncome />
			<TodayList />
			<Link to="/HistoricalMessage" className="font15px">查看历史记录</Link>
		</div>
    );
  }
}

export default TodayAllTransactions;