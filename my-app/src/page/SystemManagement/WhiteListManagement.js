/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
var item = {
    "title":"白名单：",
    "placeholder":"123",
    "id":"whiteListBox"
}
class WhiteListManagement extends Component {

    render() {
        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">白名单管理</div>
                    <div className="title-remark">查看临时白名单相关的信息， 可以添加临时白名单， 并对临时白名单进行编辑等操作。</div>
                    <hr/>
                </div>
                <div className="condition">
                    <InputBox curItem={item}/>
                </div>
            </div>
        );
    }
}

export default WhiteListManagement;