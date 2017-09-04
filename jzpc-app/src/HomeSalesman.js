// HomeSalesman 首页业务员显示
import React, { Component } from 'react';
import InputBtn from './InputBtn';
import Request from './Request';
import PropTypes from 'prop-types';
import './HomeSalesman.css';

class HomeSalesman extends Component {
  constructor(){
    super();
    this.look = this.look.bind(this);
    this.click = this.click.bind(this);
  }
  click(){
    this.context.changeItem();
    let request = new Request();
    let params = '';
    request.send('customer/viewImmediately.do','POST',params);
    document.cookie = 'currentLabel=' + escape('客户列表');
  }
  look(){
    this.click();
  }
  render() {
    let data ='';
    // console.log(this.props.data)
    if (this.props.data) {
      data = this.props.data.map(function(elem,index) {
              return <li key={index} ><span>{elem.cname}</span><span>{elem.createTime}</span></li>;
            })
    }
    return (
      <div className="HomeSalesman">
        <p>新增沟通客户</p>
        <br />
        <InputBtn btnClick={this.look} data-data={{title:'立即查看',className:'bgGreen'}}/>
        <ul onClick={this.click}>
          {
            data
          }
        </ul>
      </div>
    );
  }
}

export default HomeSalesman;
HomeSalesman.contextTypes = {
  changeItem: PropTypes.any
}