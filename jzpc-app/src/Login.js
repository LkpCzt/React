import React, { Component } from 'react';
import Request from './Request';
import { Icon } from 'antd';
import './Login.css';
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
					self.props.login({'email':res.user.email,'role':res.user.role});
					
				}else if(res.retCode === '000001'){
					alert(res.msg);
					self.refreshCode();
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
	componentWillUnmount(){
	}
	componentDidMount(){		
	}
  render() {
    return (
      <div className="Login" id='login'>
      	<div className="Login-content">
			<div className="Login-content-top">
				<p>后台登录</p>
				<p>Backenf Of DeepShift</p>
			</div>
			<div className="Login-box">
				<span className="Login-img"><Icon type='user'/></span>
				<input id="account" onFocus={this.focus} onBlur={this.blur} type="text" className="Login-input" placeholder="请输入账号"/>
			</div>
			<div className="Login-box">
				<span className="Login-img"><Icon type='lock'/></span>
				<input id="password" onFocus={this.focus} onBlur={this.blur} type="password" className="Login-input" placeholder="请输入密码"/>
			</div>
			<div className="Login-box">
				<span className="Login-img"><Icon type='safety'/></span>
				<input id="verificationCode" onFocus={this.focus} onBlur={this.blur} type="text" className="Login-input" placeholder="请输入验证码" />
			</div>
			<img onClick={this.refreshCode} className="verification-code" src={"http://192.168.1.41:8080/captcha.do?v=" + this.state.code} title="刷新验证码" alt="未找到图片"/>
			<input onClick={this.login} type="button" className="login-btn" value="立即登录"/>
      	</div>
      </div>
    );
  }
}

export default Login;
