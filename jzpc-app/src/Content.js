// Content App内容
import React, {
    Component
} from 'react';
import PageHome from './PageHome';
import PageClientList from './PageClientList';
import PageClient from './PageClient';
import PageClientStatis from './PageClientStatis';
import PageAccount from './PageAccount';
import Tools from './Tools';
import PopUpCover from './PopUpCover';
import PopUpChangePassword from './PopUpChangePassword';
import PopUpJudgment from './PopUpJudgment';

import {
    Icon
} from 'antd';
let tool = new Tools();
class Content extends Component {
    constructor() {
        super();
        this.clickInfo = this.clickInfo.bind(this);
        this.info = this.info.bind(this);
        this.update = this.update.bind(this);
        this.exit = this.exit.bind(this);
        this.state = ({
            title:'修改成功，请重新登录'
        });
    }

    clickInfo() {
        let ul = document.getElementById("infoUl");
        if (ul.className === '') {
            ul.className = 'ulHidden'
        } else {
            ul.className = ''
        }
    }
    info() {
        this.clickInfo();
    }
    update() {
        this.clickInfo();
        tool.openPopUp('PopUpCoverContent');
        tool.openPopUp('PopUpChangePassword');
    }
    exit() {
        this.clickInfo();
        document.cookie = "role=" + escape('-1');
        document.cookie = "currentLabel=" + escape('');
        window.location.reload();
    }
    closeCover(){
        tool.closePopUp('PopUpCoverContent','ulHidden');
        tool.closePopUp('PopUpChangePassword','ulHidden');
        this.refs.PopUpChangePassword.reset();
    }
    render() {
        let data = {
            '首页': <PageHome/>,
            '客户列表': <PageClientList />,
            '公海客户': <PageClient />,
            '推广客户统计': <PageClientStatis />,
            '账号管理': <PageAccount />
        }
        var title = this.props['data-title'];
        var temp = data[title];
        return (
            <div className="Content">
      {
        temp
      }
      <div className="info">
          <div onClick={this.clickInfo} className="header">
            <span><Icon type='user' /></span>
            <span>{this.props.obj.email}</span>
          </div>
          <ul id="infoUl" className="ulHidden">
            {/*
              <li onClick={this.info}>
                <span></span>
                <span>帐号信息</span>
              </li>
            */}
              <li onClick={this.update}>
                <span><Icon type='unlock'/></span>
                <span>修改密码</span>
              </li>
            
            <li onClick={this.exit}>
              <span><Icon type='poweroff'/></span>
              <span>退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</span>
            </li>
          </ul>
        </div>
        <PopUpCover
        closeCover={this.closeCover.bind(this)}
        id='PopUpCoverContent'
        />
        <PopUpChangePassword 
        closeCover={this.closeCover.bind(this)}
        ref='PopUpChangePassword'
        />
      </div>
        );
    }
}

export default Content;