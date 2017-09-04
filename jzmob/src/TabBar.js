import React, { Component } from 'react';
import { Icon } from 'antd';
import './TabBar.css';
let oldElment = '';
class TabBar extends Component {
	constructor(){
		super();
		this.click = this.click.bind(this);
		this.update = this.update.bind(this);
	}
	update(){
		if (oldElment) {
			oldElment.className = '';
		}
		let elem = document.getElementById('tabberClientList');
		elem.className = 'liSelect';
		oldElment = elem;
	}
	click(e){
		if (oldElment) {
			oldElment.className = '';
		}
		let elem = e.target;
		if (e.target.nodeName !== 'LI') {
			let parent = e.target.parentNode;
			elem = parent;
		}
		if (elem.className === '') {
			elem.className = 'liSelect';
		}else {
			elem.className = '';
		}
		oldElment = elem;
		let title;
		if (elem.getAttribute("data-id") === '1') {
			title = "新增沟通客户"
		}else {
			title="客户列表"
		}
		this.props.changeItem(title);
	}
	componentDidMount(){
		oldElment = document.getElementById('home');
	}
  render() {
    return (
      <div className="TabBar">
      	<ul>
      		<li data-id={1} onClick={this.click} className="liSelect" id="home">
      			<Icon type='home'/>
      			<p className="font10">首页</p>
      		</li>
      		<li data-id={2} onClick={this.click} id='tabberClientList'>
      			<Icon type='solution'/>
      			<p className="font10">客户列表</p>
      		</li>
      	</ul>
      </div>
    );
  }
}

export default TabBar;
