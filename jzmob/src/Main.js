import React, { Component } from 'react';
import './Main.css';
import Nav from './Nav';
import TabBar from './TabBar';
import Content from './Content';
import PropTypes from 'prop-types';
class Main extends Component {
	constructor(){
		super();
		this.curItem = this.curItem.bind(this);
		this.changeItem = this.changeItem.bind(this);
		this.state = ({
			curItem:'新增沟通客户'
		})
	}
	getChildContext() {
		return {
			changeItem: this.changeItem
		}
	}
	curItem(title){
		this.setState({
			curItem:title
		})
	}
	changeItem(item){
		this.curItem(item);
		this.refs.TabBar.update();
	}
  render() {
    return (
      <div className="Main">
		<Nav item={this.state.curItem} />
		<Content item={this.state.curItem} changeItem={this.changeItem} />
		<TabBar changeItem={this.curItem} ref='TabBar'/>
      </div>
    );
  }
}

export default Main;
Main.childContextTypes = {
	changeItem: PropTypes.any
}