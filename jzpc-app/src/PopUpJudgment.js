// PopUpJudgment 判断弹框
import React, { Component } from 'react';
import './PopUpJudgment.css';
class PopUpJudgment extends Component {
	// constructor(){
	// 	super();
	// }

	componentDidMount(){
	}
	concel(){
		if (this.props.closeCover) {
			this.props.closeCover();
		}
	}
	confirm(){
		if (this.props.confirm) {
			this.props.confirm();
			this.props.closeCover();
		}
	}
	render(){
	    return <div id={this.props.id ? this.props.id : "PopUpJudgment"} className="PopUpJudgment ulHidden">
	    	<p>{this.props.title}</p>
			<input onClick={this.concel.bind(this)} type="button" className="btn concel" value="取消"/>
			<input onClick={this.confirm.bind(this)} type="button" className="btn confirm" value="确认"/>
	    </div>
	}
}
export default PopUpJudgment;