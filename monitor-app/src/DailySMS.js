import React, { Component } from 'react';

class DailySMS extends Component {
  render() {
    return (
      <div className="dailySMS normal">
        <div className="dailySMS-top">1 天发送短信用户数</div>
        <div className="dailySMS-middle">1234567 <span>人</span></div>
        <div className="dailySMS-bottom">昨日：2345678 人</div>
      </div>
    );
  }
}

export {DailySMS};
