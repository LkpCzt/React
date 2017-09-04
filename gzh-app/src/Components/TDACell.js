// 今日全部列表cell TDACell
import React, { Component } from 'react';

class TDACell extends Component {
  render() {
    return (
		<div className="TDACell">
			<ul>
				<li className="font12px">东兴证劵<br/><span>601198</span></li>
				<li className="font12px">2017-07-07<br/><span>02-12</span></li>
				<li className="font12px">17.65</li>
				<li className="font12px">-0.06%</li>
			</ul>
		</div>
    );
  }
}

export default TDACell;