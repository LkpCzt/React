// HomeManagerCell 首页经理cell
import React, { Component } from 'react';

class HomeManagerCell extends Component {
  // constructor(){
  //   super();
  // }
  render() {
    let data = this.props.data
    return (
      <div className="HomeManagerCell">
        <div className="cellLeft">
          <p className="cellTop">{data.nickName}</p>
          <p className="cellBottom">{data.cname}</p>
        </div>
        <div className="cellRight">
          <p className="cellTop">{data.createTime}</p>
          <p className="cellBottom">{data.content}</p>
        </div>
      </div>
    );
  }
}

export default HomeManagerCell;