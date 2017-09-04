// 投资目标 InvestmentObjectives
import React, { Component } from 'react';

class InvestmentObjectives extends Component {
  render() {
    return (
		<div className="Investment-objectives boundary">
			<p className="title font14px">投资目标</p>
			<div className="circle"></div>
			<p className="circle-bottom font12px">
				<span className="border1px"></span>
			平均月收益率
				<span className="border1px"></span>
			</p>
		</div>
    );
  }
}

export default InvestmentObjectives;
