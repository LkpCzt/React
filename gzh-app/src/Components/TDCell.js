// 交易动态cell TDCell
import React, { Component } from 'react';

class TDCell extends Component {
  render() {
    return (
		<div className="TDCell">
			<div className="TDCell-img"></div>
			<ul className="cell-center">
				<li className="font13px">集智智能投资工具</li>
				<li className="font10px">17:57买入东兴证劵(123456)</li>
			</ul>
			<ul className="cell-right">
				<li className="font10px">2017-07-07</li>
				<li className="font10px">02-12</li>
			</ul>
		</div>
    );
  }
}

export default TDCell;