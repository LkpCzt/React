import React, { Component } from 'react';
import ClientList from './ClientList';
import Home from './Home';
import './Content.css';
import Request from './Request';
import getCookie from './cookieManager';
class Content extends Component {
	constructor(props){
		super(props);
    this.state = ({
      data:[]
    })
	}

	componentDidMount(){
    if (getCookie('role') !== '3') {return}
    let self = this;
    let request = new Request();
    let params = '';
    request.send('homePage.do','POST',params,function (res) {
      self.setState({
        data:res.data
      })
    },function (err) {
      
    });
	}
  render() {
    return (
      <div className="Content" id='wrapper'>
      	{
          this.props.item === '客户列表' ? <ClientList /> : <Home data={this.state.data}/>
        }
      </div>
    );
  }
}

export default Content;
