// PopUpGJ 跟进
import React, {
    Component
} from 'react';
import Request from './Request';
import Tools from './Tools';
import {
    Icon
} from 'antd';
import './PopUpGJ.css';
class PopUpGJ extends Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.content = this.content.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
        this.concel = this.concel.bind(this);
    }
    click(e) {
        let element = document.getElementById("PopUpGJ-wap");
        element.className = "PopUpGJ-wap ulHidden"
        this.reset()
    }
    content(e) {
        e.stopPropagation()
    }
    close() {
        this.props.closeCover();
        this.reset();
    }
    confirm() {
        let self = this
        let rec = this.props.defaule;
        // console.log(rec)
        let gj = document.getElementById("gj");
        let gjjl = document.getElementById("gjjl");
        let request = new Request();
        let params = {
            "cid": rec.cid,
            'userid': gj.value,
            'content': gjjl.value
        };
        request.send('customer/addFollowRecord.do', 'POST', params, function(res) {
            // console.log(res);
            if (res.retCode === '000000') {
                if (self.props.isSuccess) {
                    self.props.isSuccess();
                    self.concel()
                }
            } else if (res.retCode === '000001') {
                alert(res);
            }
        }, function(err) {
            // console.log(err)
        });
        this.reset()
    }

    concel() {
        let element = document.getElementById("PopUpGJ-wap");
        element.className = "PopUpGJ-wap ulHidden"
        this.reset()
    }
    reset() {
        let gjjl = document.getElementById("gjjl");
        gjjl.value = ''
    }
    componentDidMount() {}
    render() {
        // ulHidden
        // console.log(this.props.gjr);
        let tool = new Tools();
        let gjrd = ''
        if (tool.getCookie('role') === '3') {
            gjrd = 'disabled'
        }
        return (
            <div id='PopUpGJ' className="PopUpGJ ulHidden">
                <div onClick={this.close} className="close">
                    <Icon type='close' className="closeIcon"/>
                </div>
                <span className='GJtr1'>跟进人</span>
                <select id="gj" className='GJtr1' name="" disabled={gjrd}>
                {
                this.props.gjr.map(function(elem,index) {
                    return <option key={index} value={elem.id}>{elem.nickName}</option>;
                    })
                }
                </select>
                <br/>
                <span>跟进记录</span>
                <textarea name="" id="gjjl" cols="30" rows="10"></textarea>
                <button onClick={this.concel} className="concel">取消</button>
                <button onClick={this.confirm} className="Confirm">确认</button>
            </div>
        );
    }
}

export default PopUpGJ;