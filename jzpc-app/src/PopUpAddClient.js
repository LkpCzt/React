// PopUpAddClient 编辑
import React, {
    Component
} from 'react';
import Request from './Request';
import {
    Icon
} from 'antd';
import Tools from './Tools';
import './PopUpAddClient.css';
let tool = new Tools();
class PopUpAddClient extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.content = this.content.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
        this.concel = this.concel.bind(this);
    }
    click(e) {
        let element = document.getElementById("EjectModify-wap");
        element.className = "EjectModify-wap ulHidden"
        this.reset()
    }
    content(e) {
        e.stopPropagation()
    }
    close() {
        this.props.closeCover();
        this.reset()
    }
    confirm() {
        // console.log('confirm');
        let self = this;
        let eClientName = document.getElementById("eClientName")
        let ePhone = document.getElementById("ePhone")
        let jd = document.getElementById("jd")
        let esoucre = document.getElementById("esoucre")
        let egjr = document.getElementById("egjr")
        let eReams = document.getElementById("eReams")

        let request = new Request();
        let params = {
            "cname": eClientName.value,
            "telephone": ePhone.value,
            "stage": jd.value,
            "source": esoucre.value,
            "userid": egjr.value,
            "remark": eReams.value
        };
        // console.log(params);
        if (this.props.defaule !== '') {
            params.cid = this.props.defaule.cid
        }
        request.send('customer/from/merge.do ', 'POST', params, function (res) {
            if (res.retCode === '000000') {
                if (self.props.isSuccess) {
                    self.props.isSuccess();
                    self.concel()
                }
            } else if (res.retCode === '000001') {
                alert(res.retMsg)
            }
        }, function (err) {
            
        });
    }
    concel() {
        this.props.closeCover();
        this.reset();
    }
    reset() {
        let eClientName = document.getElementById("eClientName");
        let ePhone = document.getElementById("ePhone");
        let esoucre = document.getElementById("esoucre");
        let eReams = document.getElementById("eReams");
        eClientName.value = '';
        ePhone.value = '';
        esoucre.value = '';
        eReams.value = '';
    }
    componentWillUnmount(){
        // tool = null;
    }
    componentDidMount() {}
    render() {
        let gjrd = ''
        let phoned = ''
        if (this.props.defaule !== '') { // 编辑
          if (tool.getCookie('role') === '3') {
            gjrd = 'disabled'
            phoned = 'disabled'
          }

          let eClientName = document.getElementById("eClientName")
          let ePhone = document.getElementById("ePhone")
          let jd = document.getElementById("jd")
          let esoucre = document.getElementById("esoucre")
          let egjr = document.getElementById("egjr")
          let eReams = document.getElementById("eReams")
          let data = this.props.defaule
          eClientName.value = data.cname !== null ? data.cname : ''
          ePhone.value = data.telephone
          jd.value = data.stage
          esoucre.value = data.source
          egjr.value = data.userid
          eReams.value = data.remark

        } else { // 新增
          // console.log('新增')
          if (tool.getCookie('role') === '3') {
            gjrd = 'disabled'
          }
        }
        // console.log(this.props.gjr)
        return (
            <div id="PopUpAddClient" className="PopUpAddClient ulHidden">
        <div onClick={this.close} className="close">
            <Icon type='close' className="closeIcon"/>
        </div>
        <div className="myForm">
            <span className="tr1">客户名称</span>
            <input id="eClientName" className="tr1" type="text"/>
            <span className="tr1 ml26">联系电话</span>
            <input id="ePhone" className="tr1" type="text" disabled={phoned}/>
            <br />
            <span className="tr2">阶段</span>
            <select id="jd" className="tr2">
              <option value="0">沟通</option>
              <option value="1">意向</option>
              <option value="2">成交</option>
            </select>
            <span className="tr2 ml26">来源</span>
            <input id="esoucre" className="tr2" type="text"/>
            <br />
            <span className="tr3">跟进人</span>
            <select id="egjr" className="tr3" disabled={gjrd}>
              {
                this.props.gjr.map(function(elem,index) {
                  return <option key={index} value={elem.id}>{elem.nickName}</option>;
                })
              }
            </ select>
            <span className="tr3 ml26">备注</span>
            <textarea id="eReams" className="tr3" name="detail">
            </textarea>
            <button onClick={this.concel} className="concel">取消</button>
            <button onClick={this.confirm} className="Confirm">确认</button>
          </div>
      </div>
        );
    }
}

export default PopUpAddClient;