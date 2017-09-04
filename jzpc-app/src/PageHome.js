// PageHome 首页
import React, {
    Component
} from 'react';
import HomeSalesman from './HomeSalesman';
import HomeManager from './HomeManager';
import Request from './Request';
import Tools from './Tools';
import {
    Icon
} from 'antd';

class PageHome extends Component {
    constructor() {
        super();
        this.success = this.success.bind(this);
        this.fail = this.fail.bind(this);
        this.state = ({
            roleId: '',
            data: []
        })

    }
    componentDidMount() {
        let request = new Request();
        let params = '';
        request.send('homePage.do', 'POST', params, this.success, this.fail);
    }
    success(res) {
        this.setState({
            data: res.data
        })
    }
    fail(err) {

    }
    render() {
        // console.log(this.props.roleId)
        let tool = new Tools();
        let role = tool.getCookie('role');
        let temp = '';
        if (role === '3') {
            temp = <HomeSalesman  data={this.state.data}/>
        } else if (role === '2') {
            temp = <HomeManager data={this.state.data} />
        }
        return (
            <div className="PageHome">
        <div className="content-title">
          <span className="title">首页</span>
          <span className="icon"><Icon type='home' /></span>
        </div>
        <div className="content-main">
          {
            temp
          }
          
        </div>
      </div>
        );
    }
}

export default PageHome;