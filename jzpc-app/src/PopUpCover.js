// PopUpCover 遮罩
import React, { Component } from 'react';
import './PopUpCover.css';
class PopUpCover extends Component {
	// constructor(){
	// 	super();
	// }

	// componentDidMount(){
	// }
	click(e){
		// console.log('隐藏');
		if (this.props.closeCover) {
			this.props.closeCover();
		}
	}
	render(){
	    return <div onClick={this.click.bind(this)} id={this.props.id ? this.props.id : "PopUpCover"} className="PopUpCover ulHidden">
	    </div>
	}
}
export default PopUpCover;