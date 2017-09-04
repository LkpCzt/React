// 实时收益率 RealTimeIncome
import React, { Component } from 'react';

class RealTimeIncome extends Component {
  render() {
    return (
		<div className="RealTimeIncome boundary">
			<p className="title font14px">实时收益率</p>
			<p className="rate-of-return font30px">-0.80%</p>
			<p className="rate-description font12px">(每天收盘时更新)</p>
			<ul>
				<li className="font12px">本周平均收益：<span>0.02%</span></li>
				<li className="font12px">本周累计收益：<span>0.02%</span></li>
			</ul>
		</div>
    );
  }
}

export default RealTimeIncome;