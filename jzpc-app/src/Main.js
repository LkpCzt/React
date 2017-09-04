import React, { Component } from 'react';
import MainMenu from './MainMenu';
import Tools from './Tools';
import Content from './Content';
import PropTypes from 'prop-types';

class Main extends Component {
	constructor(props){
		super(props);
		let tool = new Tools();
		this.curItem = this.curItem.bind(this);
		this.changeItem = this.changeItem.bind(this);
		let currentLabel = tool.getCookie('currentLabel');
		if (currentLabel === '' || currentLabel === null) {
			currentLabel = '首页';
		}
		this.state = ({
			title: currentLabel,
			autoJump:''
		});
	}
	getChildContext() {
		return {
			changeItem: this.changeItem
		}
	}
	changeItem(item) {
		this.setState({
			title: '客户列表',
			autoJump:'客户列表'
		});
	}
	curItem(title){
		if (title === this.state.title) {
			window.location.reload();
		}else {
			this.setState({
				title:title,
				autoJump:''
			});
		}
	}
  render() {
    return (
      <div className="Main">
      	<MainMenu curItem={this.curItem} current={this.state.title} autoJump={this.state.autoJump}/>
      	<Content data-title={this.state.title} obj={this.props.obj}/>
      </div>
    );
  }
}

export default Main;
Main.childContextTypes = {
	changeItem: PropTypes.any
}