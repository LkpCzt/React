// HistoricalMessage 查看历史消息
import React, { Component } from 'react';
// import {Link} from 'react-router';
import DatePicker from './Components/DatePicker.js';
import HistoricalHeaderView from './Components/HistoricalHeaderView.js';
import HistoricalList from './Components/HistoricalList.js';
// import TodayList from './Components/TodayList.js';
class HistoricalMessage extends Component {
  render() {
    return (
		<div className="HistoricalMessage">
			<DatePicker />
			<HistoricalHeaderView />
			<HistoricalList />
		</div>
    );
  }
}

export default HistoricalMessage;