// HomeManager 首页经理显示
import React, { Component } from 'react';
import HomeManagerCell from './HomeManagerCell';
import './HomeManager.css'
class HomeManager extends Component {
  constructor(){
    super();
    this.click = this.click.bind(this);
  }
  click(){
    this.props.click()
  }
  render() {
    let data ='';
    if (this.props.data) {
      data = this.props.data.map(function(elem,index) {
              return <li key={index}><HomeManagerCell data={elem}/></li>;
            })
    }
    return (
      <div className="HomeManager">
        <p>客户跟进记录</p>
        <ul>
          {
            data
          }
        </ul>
      </div>
    );
  }
}

export default HomeManager;