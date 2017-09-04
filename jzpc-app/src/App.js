import React, { Component } from 'react';
import Login from './Login';
import Main from './Main';
import Tools from './Tools';
import './App.css';
let tool = new Tools();
class App extends Component {
	constructor(props){
		super(props);
		this.login = this.login.bind(this);
		let role = tool.getCookie('role');
		if (role !== '' && role !== null && role !== '-1') {
			let user = {
				email: tool.getCookie('email'),
				role: role
			};
			this.state = ({
				obj:user,
				isLogin: true
			})
			// console.log(this.state)
		}else{
			this.state = ({
				obj: '',
				isLogin: false
				// isLogin: true
			})
		}
		
	}
	login(obj){
		// console.log(obj);
		this.setState({
			obj:obj,
			isLogin: true
		})
	}
	componentWillUnmount(){
		// tool = null;
	}
  render() {
    return (
    	<div className="App" id='App'>
    		{
    			this.state.isLogin ? <Main obj={this.state.obj} /> : <Login login={this.login} />
    		}
    	</div>
    );
  }
}
export default App;