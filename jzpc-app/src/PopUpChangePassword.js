// PopUpChangePassword 重设密码
import React, { Component } from 'react';
import { Icon } from 'antd';
import Request from './Request';
import './PopUpChangePassword.css';
let oldPwd,newPwd = '';
class PopUpChangePassword extends Component {
	constructor(){
		super();
		this.reset = this.reset.bind(this);
	}
	close(){
		if (this.props.closeCover) {
			this.props.closeCover();
		}
	}
	concel(){
		this.close();
	}
	confirm(){
		let self = this;
		let request = new Request();
		let param = {
			oldPwd:oldPwd,
			newPwd:newPwd
		};
		// console.log(param);
		request.send('updatePwd.do','POST',param,function (res) {
			if (res.retCode === '000000') {
				self.close();
				alert('修改成功，请重新登录');
				document.cookie = "role=" + escape('-1');
		        document.cookie = "currentLabel=" + escape('');
		        window.location.reload();
			}else if(res.retCode === '000001') {
				alert(res.retMsg);
			}
		},function (err) {
			
		});
	}
	password(e){
		oldPwd = e.target.value;
	}
	newPassword(e){
		newPwd = e.target.value;
	}
	componentDidMount(){
	}
	reset() {
		let oldPwd = document.getElementById('password');
		let newPwd = document.getElementById('newPassword');
		oldPwd.value = '';
		newPwd.value = '';
	}
	render(){
	    return <div id='PopUpChangePassword' className="PopUpChangePassword ulHidden">
	    	<div onClick={this.close.bind(this)} className="close">
            	<Icon type='close' className="closeIcon"/>
      		</div>

      		<span className='GJtr1'>原密码</span>
      		<input type="password" onChange={this.password.bind(this)} id='password' className='GJtr1' />

      		<span className='GJtr2'>新密码</span>
      		<input type="password" onChange={this.newPassword.bind(this)} id='newPassword' className='GJtr2' />

      		<input onClick={this.concel.bind(this)} type="button" className="btn concel" value="取消"/>
			<input onClick={this.confirm.bind(this)} type="button" className="btn confirm" value="确认"/>
	    </div>
	}
}
export default PopUpChangePassword;