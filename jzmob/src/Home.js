import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Request from './Request';
import './Home.css';
class Home extends Component {
	constructor(props){
		super(props);
    this.click = this.click.bind(this);
    this.exit = this.exit.bind(this);
	}
  click(){
    this.context.changeItem('客户列表');
    let request = new Request();
    let params = '';
    request.send('customer/viewImmediately.do','POST',params);
  }
  exit(){
    document.cookie = 'role='+ escape('-1');
    window.location.reload();
  }
	componentDidMount(){
	}
  render() {

    // console.log(this.props.data);
    return (
      <div className="Home">
        <ul>
          {
            this.props.data.map(function(elem, index) {
              return <li key={index} className='font14'><span>{elem.cname}</span><span>{elem.createTime}</span></li>
            })
          }
        </ul>
        <input onClick={this.click} type="button" className="font15" value="立即查看"/>

        <input onClick={this.exit} type="button" className="font15" style={{'backgroundColor':'darkgray','marginTop':'4.64rem'}} value="退出账号"/>
      </div>
    );
  }
}

export default Home;
Home.contextTypes = {
  changeItem: PropTypes.any
}