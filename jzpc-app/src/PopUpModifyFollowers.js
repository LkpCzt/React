// PopUpModifyFollowers 修改跟进人弹窗
import React, {
    Component
} from 'react';
import Request from './Request';
import {
    Icon
} from 'antd';
import './PopUpModifyFollowers.css';
let GJR = '';
class PopUpModifyFollowers extends Component {
    constructor(props) {
        super(props);
        this.content = this.content.bind(this);
        this.close = this.close.bind(this);
        this.confirm = this.confirm.bind(this);
        this.concel = this.concel.bind(this);
    }
    content(e) {
        e.stopPropagation();
    }
    close() {
        this.props.closeCover();
    }
    updateGJR(e) {
        GJR = e.target.value;
    }
    confirm() {
        let self = this;
        let request = new Request();
        let params = {
            ids: this.props.ids,
            userid: GJR
        };
        // console.log(params);
        request.send('customer/updateList.do', 'POST', params, function(res) {
            if (res.retCode === '000000') {
                self.props.isSuccess();
                self.props.closeCover();
            } else if (res.retCode === '000001') {
                alert(res.retMsg);
            }
        }, function(err) {
            // console.log(err)
        });
    }

    concel() {
        this.props.closeCover();
    }
    componentWillUnmount() {
        GJR = null;
    }
    componentDidMount() {}
    render() {
        // ulHidden
        return (
            <div id="PopUpModifyFollowers" className = "PopUpModifyFollowers ulHidden" >
                <div onClick={this.close} className="close">
                    <Icon type='close' className="closeIcon"/>
                </div>
                <span className='GJtr1'>跟进人</span>
                <select onChange={this.updateGJR} id="gj" className='GJtr1' name="">
                {
                  this.props.gjr.map(function(elem,index) {
                    return <option key={index} value={elem.id}>{elem.nickName}</option>;
                  })
                }
                </select>
                <button onClick={this.concel} className="concel">取消</button>
                <button onClick={this.confirm} className="Confirm">确认</button>
            </div>
        );
    }
}

export default PopUpModifyFollowers;