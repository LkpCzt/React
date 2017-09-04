import React, { Component } from 'react';
import Login from './Login';
import Main from './Main';
import './App.css';
import initReactFastclick from 'react-fastclick';
import getCookie from './cookieManager';
let isLogin = false;
initReactFastclick();
// console.log(getCookie('role'))
if (getCookie('role') !== '-1' && getCookie('role') !== ''  && getCookie('role') !== null) {
  // console.log('已登录');
  isLogin = true;
}else {
  // console.log('未登录');
  isLogin = false;
}
class App extends Component {
	constructor(){
		super();
    this.login = this.login.bind(this);
    this.state = ({
      isLogin:isLogin
    })
	}
  login(obj){
    this.setState({
      isLogin:true
    })
  }
  render() {
    return (
      <div className="App" id="App">
      	{
			this.state.isLogin ? <Main /> : <Login login={this.login} />
      	}
      </div>
    );
  }
}

export default App;