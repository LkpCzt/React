// PopUpAccount 弹窗新增用户
import React, {
    Component
} from 'react';
import Request from './Request';
import Tools from './Tools';
import {
    Icon
} from 'antd';
import './PopUpAddAccount.css';
let aName, aRole, aAccount, aState, aPhone, aLeader, aAutoAssign = '';
let tool = new Tools();
class PopUpAddAccount extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.content = this.content.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
        this.concel = this.concel.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeRole = this.changeRole.bind(this);
        this.changeAccount = this.changeAccount.bind(this);
        this.changeState = this.changeState.bind(this);
        this.changePhone = this.changePhone.bind(this);
        this.changeLeader = this.changeLeader.bind(this);
        this.autoAssign = this.autoAssign.bind(this);
        this.judgmentRole = this.judgmentRole.bind(this);
        this.reset = this.reset.bind(this);
        this.state = ({
            isClerk: false,
            leader: []
        });
    }
    judgmentRole(role) {
        let self = this;
        // 当选择业务员时，查询所有经理屏显示隐藏选项
        if (role === '3') {
            let request = new Request();
            let params = {};
            request.send('/sysUser/querySuperiorManager.do', 'POST', params, function(res) {
                // console.log(res);
                if (res.retCode === '000000') {
                    self.setState({
                        isClerk: true,
                        leader: res.data
                    });
                    let firstObj = res.data[0];
                    if (firstObj) {
                        aLeader = firstObj.id;
                    }
                } else if (res.retCode === '000001') {
                    alert(res.retMsg);
                }
            }, function(err) {
                // console.log(err);
            });

        } else {
            this.setState({
                isClerk: false
            });
        }
    }
    changeName(e) {
        aName = e.target.value;
    }
    changeRole(e) {
        aRole = e.target.value;
        // console.log(aRole);
        let role = e.target.value;
        this.judgmentRole(role);
    }
    changeAccount(e) {
        aAccount = e.target.value;
    }
    changeState(e) {
        aState = e.target.value;
    }
    changePhone(e) {
        aPhone = e.target.value;
    }
    changeLeader(e) {
        aLeader = e.target.value;
    }
    autoAssign(e) {
        aAutoAssign = e.target.checked;
    }
    click(e) {
        if (tool.getCookie('role') !== '2') {
            this.setState({
                isClerk: false
            });
        }
        if (this.props.record !== '') {
            this.props.isEdit();
        }
    }
    content(e) {
        e.stopPropagation()
    }
    close() {
        this.props.closeCover();
        if (tool.getCookie('role') !== '2') {
            this.setState({
                isClerk: false
            });
        }
        if (this.props.record !== '') {
            this.props.isEdit();
        }
    }
    confirm() {
        let self = this;
        let request = new Request();
        let params = {
            nickName: aName,
            role: aRole,
            email: aAccount,
            state: aState,
            telephone: aPhone,
            superiorId: aLeader,
            isAutomatic: aAutoAssign ? 1 : 0
        };
        if (this.props.record !== '') {
            params.id = this.props.record.id;
        }
        // console.log(params);
        request.send('sysUser/from/merge.do', 'POST', params, function(res) {
            // console.log(res);
            if (res.retCode === '000000') {
                if (self.props.record !== '') {
                    self.props.isEdit();
                }
                if (self.props.isSuccess) {
                    self.props.isSuccess();
                    self.concel();
                }
                if (tool.getCookie('role') !== '2') {
                    self.setState({
                        isClerk: false
                    });
                }
            } else if (res.retCode === '000001') {
                alert(res.retMsg);
            }
        }, function(err) {});
    }

    concel() {
        this.props.closeCover();
        if (tool.getCookie('role') !== '2') {
            this.setState({
                isClerk: false
            });
        }
        if (this.props.record !== '') {
            this.props.isEdit();
        }
    }
    componentWillUnmount(){
        aName = null;
        aRole = null;
        aAccount = null;
        aState = null;
        aPhone = null;
        aLeader = null;
        aAutoAssign = null;
        // tool = null;
    }
    componentDidMount() {
        let Role = document.getElementById("aRole");
        let State = document.getElementById("aState");
        if (tool.getCookie('role') === '2') {
            Role.value = '3';
            aRole = '3';
            aLeader = tool.getCookie('id');
            this.setState({
                isClerk: true,
                leader: [{
                    id: tool.getCookie('id'),
                    nickName: tool.getCookie('nickName')
                }]
            });
        } else {
            Role.value = '100';
            State.value = '100';
        }
    }
    // 确保编辑执行
    componentWillReceiveProps(props) {
        // console.log(props.record);

        let self = this;
        if (props.record.roleid === 3) {
            this.setState({isClerk: true});
            let request = new Request();
            let params = {};
            request.send('/sysUser/querySuperiorManager.do', 'POST', params, function(res) {
                // console.log(res);
                if (res.retCode === '000000') {
                    self.setState({
                        leader: res.data
                    });
                } else if (res.retCode === '000001') {
                    alert(res.retMsg);
                }
            }, function(err) {
                // console.log(err);
            });
        }
        if (props.record !== '') {
            let request = new Request();
            let params = {
                id: props.record.id
            };
            // console.log(params);
            request.send('sysUser/queryById.do ', 'POST', params, function(res) {
                // console.log(res);
                if (res.retCode === '000000') {
                    let data = res.data;
                    defaultValue(data.nickName, data.roleid, data.email, data.state, data.telephone, data.superiorId, data.isAutomatic);
                    // console.log(data);
                }
            }, function(err) {
                // console.log('err');
            })
        }
    }
    reset(){
        reset();
        this.setState({
            isClerk:false
        })
    }
    render() {
        // ulHidden
        // 编辑
        return (
        <div id="PopUpAddAccount" onClick={this.content} className="PopUpAddAccount ulHidden">
            <div onClick={this.close} className="close">
                <Icon type='close' className="closeIcon"/>
            </div>
            <div className="tr1">
              <span>
                <p>名称</p>
                <input onChange={this.changeName} id="aName" type="text"/>
              </span>
              <span>
                <p>角色</p>
                <select onChange={this.changeRole} name="" id="aRole">
                  {tool.getCookie('role') === '2' ? '' : <option value="2">经理</option>}
                  <option value="3">业务员</option>
                </select>
              </span>
            </div>
            <div className="tr2">
              <p>账号</p>
              <input onChange={this.changeAccount} id="aAccount" type="text"/>
              <p>状态</p>
              <select onChange={this.changeState} name="" id="aState">
                <option value="0">启用</option>
                <option value="1">停用</option>
              </select>
            </div>
            <div className="tr3">
              <p>电话</p>
              <input onChange={this.changePhone} id="aPhone" type="text"/>
              {
                this.state.isClerk ? <span id="leader">
                <p>上级经理</p>
                <select onChange={this.changeLeader} name="" id="aLeader">
                  {
                    this.state.leader.map(function(elem, index) {
                      return <option key={index} value={elem.id}>{elem.nickName}</option>;
                    })
                  }
                </select>
              </span> : ''
              }
            </div>
            {
              this.state.isClerk ? <div id="autoAssignClient">
              <input onChange={this.autoAssign} id="aAutoAssign" className="addAccountCheckbox" type="checkbox"/>
              <p>自动分配客户</p>
            </div> : '' 
            }
            <br/>
            <button onClick={this.concel} className="concel">取消</button>
            <button onClick={this.confirm} className="Confirm">确认</button>
        </div>
        );
    }
}

export default PopUpAddAccount;
function reset() {
    let Name = document.getElementById("aName");
    let Role = document.getElementById("aRole");
    let Account = document.getElementById("aAccount");
    let State = document.getElementById("aState");
    let Phone = document.getElementById("aPhone");
    let leader = document.getElementById("aLeader");
    let AutoAssign = document.getElementById("aAutoAssign");
    Name.value = '';
    Role.value = '';
    Account.value = '';
    State.value = '';
    Phone.value = '';
    if (leader) {
        leader.value = '';
        AutoAssign.checked = false;
    }
    aName = '';
    aRole = '';
    aAccount = '';
    aState = '';
    aPhone = '';
    aLeader = '';
    aAutoAssign = 0;
}

function defaultValue(name, role, account, state, phone, leader1, autoAssign) {
    // console.log(name,role,account,state,phone,leader1,autoAssign);
    let Name = document.getElementById("aName");
    let Role = document.getElementById("aRole");
    let Account = document.getElementById("aAccount");
    let State = document.getElementById("aState");
    let Phone = document.getElementById("aPhone");
    let leader = document.getElementById("aLeader");
    let AutoAssign = document.getElementById("aAutoAssign");
    Name.value = name;
    Role.value = role !== null ? role.toString() : '';
    Account.value = account;
    State.value = state !== null ? state.toString() : '';
    Phone.value = phone;

    aName = Name.value;
    aRole = Role.value;
    aAccount = Account.value;
    aState = State.value;
    aPhone = Phone.value;
    if (leader1) {
        leader.value = leader1;
        AutoAssign.checked = autoAssign === 1 ? true : false;
        aLeader = leader.value;
        aAutoAssign = AutoAssign.checked;
    }
}