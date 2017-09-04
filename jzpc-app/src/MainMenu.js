// MainMenu 主菜单
import React, {
    Component
} from 'react';
import {
    Icon
} from 'antd';
import Tools from './Tools';

let oldElement = '';
let tool = new Tools();
class MainMenu extends Component {
    constructor() {
        super();
        this.currentClick = this.currentClick.bind(this);
    }
    currentClick(e) {
        if (oldElement) {
            oldElement.className = '';
        }
        var element = e.target;
        // 阻挡子节点事件，切换为父节点事件
        if (e.target.nodeName === 'SPAN') {
            element = e.target.parentNode;
        } else if (e.target.nodeName === 'I') {
            element = e.target.parentNode.parentNode;
        }
        element.className = 'currentSelect';
        oldElement = element;
        this.props.curItem(element.lastChild.innerHTML);
        document.cookie = 'currentLabel=' + escape(element.lastChild.innerHTML);
    }
    componentWillUnmount() {
        oldElement = null;
        // tool = null;
    }
    componentDidMount() {
        // oldElement = document.getElementById('home');
        let data = {
            '首页': 'home',
            '客户列表': 'autoJump',
            '公海客户': 'ghkh',
            '推广客户统计': 'tgkhtj',
            '账号管理': 'zhgl'
        }
        let currentLabel = data[this.props.current];
        let element = document.getElementById(currentLabel);

        element.className = 'currentSelect';
        oldElement = element;
        // console.log(element);
    }
    render() {
        if (this.props.autoJump !== '') {
            oldElement.className = '';
            let element = document.getElementById('autoJump');
            element.className = 'currentSelect';
            oldElement = element;
        }
        return (
            <div className="MainMenu">
        <ul>
          <li onClick={this.currentClick} id="home">
            <span className="MainMenu-img">
              <Icon type='home' />
            </span>
            <span>首页</span>
          </li>
          <li onClick={this.currentClick} id="autoJump">
            <span className="MainMenu-img">
              <Icon type='solution' /></span><span>客户列表</span>
          </li>
          <li onClick={this.currentClick} id='ghkh'>
            <span className="MainMenu-img"><Icon type='user' /></span><span>公海客户</span>
          </li>
          {
            tool.getCookie('role') !== '3' ? <li onClick={this.currentClick} id='tgkhtj'>
            <span className="MainMenu-img">
              <Icon type='rocket' />
              </span>
              <span>推广客户统计</span>
          </li> : ''
          }
          <li onClick={this.currentClick} id='zhgl'>
            <span className="MainMenu-img"><Icon type='setting' /></span><span>账号管理</span>
          </li>
        </ul>
      </div>
        );
    }
}
export default MainMenu;