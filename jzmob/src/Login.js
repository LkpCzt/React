import React, { Component } from 'react';
import './Login.css';
import { Icon } from 'antd';
import Request from './Request';
class Login extends Component {
	constructor(){
		super();
		this.focus = this.focus.bind(this);
		this.blur = this.blur.bind(this);
		this.login = this.login.bind(this);
		this.refreshCode = this.refreshCode.bind(this);
		this.state = ({
			code:1
		});
	}
	focus(e){
		let parent = e.target.parentNode;
		parent.className = 'Login-box login-box-selector';
	}
	blur(e){
		let parent = e.target.parentNode;
		parent.className = 'Login-box';
	}
	login(e){
		let self = this;
		// console.log(e);
		let account = document.getElementById('account');
		let password = document.getElementById('password');
		let code = document.getElementById('verificationCode');
		let request = new Request();
    
        let params = {
            "account":account.value,
            "password":password.value,
            "captcha": code.value
        }
    	request.send('login.do','POST',params, function (res){
	    		// console.log('success');
				// console.log(res.user)
				if(res.retCode === '000000'){// 登录成功
					document.cookie = 'email='+escape(res.user.email);
					document.cookie = 'role='+escape(res.user.role);
					document.cookie = 'nickName='+escape(res.user.nickName);
					document.cookie = 'id='+escape(res.user.id);
					self.props.login({'role':res.user.role});
					
				}else if(res.retCode === '000001'){
					alert(res.msg);
				}
	    	},function (err) {
				// console.log('fail');
				// console.log(err);
	    	});
	}
	refreshCode(){
		// console.log('刷新验证码');
		let code = this.state.code;
		this.setState({
			code:code+1
		})
	}
  render() {
    return (
      <div className="Login">
		<div className="Login-content">
			<div className="Login-content-top">
				<p className='font36'>后台登录</p>
				<p className='font14'>Backenf Of DeepShift</p>
			</div>

				<div className="Login-box">
					<span className="Login-img"><Icon type='user'/></span>
					<input id="account" onFocus={this.focus} onBlur={this.blur} type="text" className="Login-input font12" placeholder="请输入账号"/>
				</div>
				<div className="Login-box">
					<span className="Login-img"><Icon type='lock'/></span>
					<input id="password" onFocus={this.focus} onBlur={this.blur} type="password" className="Login-input font12" placeholder="请输入密码"/>
				</div>
				<div className="Login-box">
					<span className="Login-img"><Icon type='safety'/></span>
					<input id="verificationCode" onFocus={this.focus} onBlur={this.blur} type="text" className="Login-input font12" placeholder="请输入验证码" />
				</div>
				<img onClick={this.refreshCode} className="verification-code" src={"http://192.168.1.41:8080/captcha.do?v=" + this.state.code} title="刷新验证码" alt='图片'/>
				<input onClick={this.login} type="button" className="login-btn font14" value="立即登录"/>
				</div>
      </div>
    );
  }
}

export default Login;
