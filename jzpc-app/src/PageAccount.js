// PageAccount 账号管理
import React, {
    Component
} from 'react';
import InputBox from './InputBox';
import InputBtn from './InputBtn';
import PopUpAddAccount from './PopUpAddAccount';
import {
    Table
} from 'antd';
import {
    Icon
} from 'antd';
import Request from './Request';
import PopUpCover from './PopUpCover';
import PopUpJudgment from './PopUpJudgment';
import Tools from './Tools';
let account = '';
let deleteObj = '';
let tool = new Tools();
let isSearch = false;
let isDelete = false;
class PageAccount extends Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.success = this.success.bind(this);
        this.change = this.change.bind(this);
        this.add = this.add.bind(this);
        this.request = this.request.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.state = ({
            columns: [],
            data: [],
            action: {
                "title": '操作',
                "key": 'Action',
                render: (text, record) => {
                    if (record.roleid === 1) {
                        return (
                            <span>
                      <button onClick={this.edit.bind(this,{record})}>编辑</button><span className="ant-divider" />
                      <button onClick={this.resetPassword.bind(this,{record})}>重置密码</button>
                    </span>
                        )
                    } else {
                        return (
                            <span>
                      <button onClick={this.edit.bind(this,{record})}>编辑</button>
                      <span className="ant-divider" />
                      <button onClick={this.resetPassword.bind(this,{record})}>重置密码</button>
                      <span className="ant-divider" />
                      <button onClick={this.delete.bind(this,{record})}>删除</button>
                    </span>

                        )
                    }
                }
            },
            record: '',
            pagination: {current:1},
            loading: false,
            title:''
        })
    }
    add() {
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpAddAccount');
        if (this.refs.PopUpAddAccount.componentDidMount) {
            this.refs.PopUpAddAccount.componentDidMount();
        }
    }
    search() {
        isSearch = true;
        let params = {
            email: account,
            pagenum: 1,
            pagesize: 10
        };
        this.request(params,'sysUser/sysUserList.do');
    }
    edit(obj) {
        this.setState({
            record: obj.record
        });
        // console.log(obj.record);
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpAddAccount');
    }
    resetPassword(obj){
        isDelete = false;
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpJudgment');
        deleteObj = obj;
        this.setState({
            title:'请确认是否重置密码？'
        })
    }
    delete(obj) {
        isDelete = true;
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpJudgment');
        deleteObj = obj;
        this.setState({
            title:'请确认是否删除该账号？'
        })
    }
    confirm() {
        let obj = deleteObj;
        let address;
        let self = this;
        let request = new Request();
        if (isDelete) {
            address = 'sysUser/delete.do';
        }else {
            address = 'resetPwd.do';
        }
        let params = {
            id: obj.record.id
        };
        request.send(address, 'POST', params, function(res) {
            if (res.retCode === '000000') {
                self.componentDidMount();
            } else if (res.retCode === '000001') {

            }
        }, function(err) {

        });
    }
    success(response) {
        // console.log(response);
        const pagination = {...this.state.pagination
        };
        // 设置总页数
        pagination.total = response.tableData.total;
        let header = response.tableData.header
        if (tool.getCookie('role') !== '3') {
            header.push(this.state.action);
        }
        this.setState({
            columns: header,
            data: response.tableData.data,
            loading: false,
            pagination,
        })
    }
    fail(err) {
        // console.log("请求失败");
        // console.log(err);
    }
    change(str) {
        account = str;
    };

    componentDidMount() {
        isSearch = false;
        let params = {
            pagenum: 1,
            pagesize: 10
        };
        this.request(params);
    }
    isSuccess() {
        isSearch = false;
        let params = {
            pagenum: this.state.pagination.current,
            pagesize: 10
        };
        this.request(params);
    }
    isEdit() {
        this.setState({
            record: ''
        })
    }
    closeCover() {
        tool.closePopUp('PopUpCover', 'ulHidden');
        tool.closePopUp('PopUpJudgment', 'ulHidden');
        tool.closePopUp('PopUpAddAccount', 'ulHidden');
        // 重置 PopUpAddAccount 组件内容
        this.refs.PopUpAddAccount.reset();
        deleteObj = '';
    }
    handleTableChange(pagination) {
        this.setState({pagination,});
        let params = {};
        if (isSearch) {
            params = {
                email: account,
                pagenum: pagination.current,
                pagesize: 10
            };
            this.request(params,'sysUser/sysUserList.do');
        } else {
            params = {
                pagenum: pagination.current,
                pagesize: 10
            };
            this.request(params);
        }

    }
    request(params) {
        let request = new Request();
        this.setState({
            loading: true
        });
        // console.log(params);
        request.send('sysUser/sysUserList.do', 'POST', params, this.success, this.fail);
    }
    componentWillUnmount(){
        account = null;
        deleteObj = null;
        // tool = null;
        isSearch = null;
        isDelete = null;
    }
    render() {
        return (
            <div id="PageAccount" className="PageAccount">
        <div className="content-title">
          <span className="title">账号管理</span>
          <span className="icon"><Icon type='setting'/></span>
        </div>
        <div className="content-main">
          <div className="search">
            <InputBox change={this.change} data-title={'账号：'}/>
            <div className="rightBtn btnVCenter">
              <InputBtn btnClick={this.search} data-data={{title:'查找',className:'bgGreen'}}/>
            </div>
          </div>
          {
            tool.getCookie('role') !== '3' ? <div className="search">
            <div className="btnVCenter">
              <InputBtn btnClick={this.add} data-data={{title:'新增',className:'lineGreen'}}/>
            </div>
          </div> : ''
          }
          
          <Table 
          columns={this.state.columns} 
          dataSource={this.state.data} 
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
          />
          
        </div>
        
        <PopUpCover closeCover={this.closeCover.bind(this)} />
        <PopUpAddAccount 
        ref="PopUpAddAccount" 
        closeCover={this.closeCover.bind(this)} 
        record={this.state.record} 
        isSuccess={this.isSuccess.bind(this)} 
        isEdit={this.isEdit.bind(this)} 
        />
        <PopUpJudgment 
        closeCover={this.closeCover.bind(this)} 
        confirm={this.confirm.bind(this)} 
        title={this.state.title}
        />
      </div>
        );
    }
}

export default PageAccount;