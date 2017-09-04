import React, { Component } from 'react';
import logo from './logo.svg';
import {SayHello} from './SayHello.js';
// import {Echart} from './Echart.js';
import './App.css';
//import Using ES6 syntax
import WeUI from 'react-weui';

//import styles
import 'weui';
import 'react-weui/lib/react-weui.min.css';
const {Button} = WeUI;

class App extends Component {
  render() {
    var hello = new SayHello();
    hello.hehe();
    hello.setName('张三');
    // 如果不想实例化就调用，那就需要定义成静态方法
    SayHello.hehe = function(){
      console.log('静态方法');
    };
    // 类直接调用
    SayHello.hehe();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Echart /> */}
         <Button>hello wechat</Button>
      </div>
    );
  }
}

export {App};
