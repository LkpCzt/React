// 历史cell HLCell
import React, { Component } from 'react';

class HLCell extends Component {
  render() {
    return (
		<div className="HLCell">
			<ul>
				<li className="font12px">东兴证劵<br/><span>601198</span></li>
				<li className="font12px">2017-07-07<br/><span>02-12</span></li>
				<li className="font12px">17.65</li>
				<li className="font12px">T+1最高<br/><span>T+1最高</span><br/><span>T+1最高</span></li>
				<li className="font12px">-0.06%<br/><span>-0.06%</span><br /><span>-0.06%</span></li>
			</ul>
		</div>
    );
  }
}

export default HLCell;