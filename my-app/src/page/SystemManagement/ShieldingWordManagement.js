/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
var item = {
    "title":"屏蔽词：",
    "placeholder":"123",
    "id":"shieldingWord"
}
class ShieldingWordManagement extends Component {

    render() {
        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">屏蔽词管理</div>
                    <div className="title-remark">查看屏屏蔽词相关的信息， 可以添加屏蔽词， 并对屏蔽词进行编辑等操作。</div>
                    <hr/>
                </div>
                <div className="condition">
                    <InputBox curItem={item}/>
                </div>
                <button>提交</button>
            </div>
        );
    }
}

export default ShieldingWordManagement;