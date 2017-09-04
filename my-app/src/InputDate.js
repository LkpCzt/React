import React,{Component} from 'react';
import './InputDate.css';
// var item = {
//     "title":"发送状态：",
//     "id":"sendState",
//     "options":[
//         "等待发送","正在发送","人工中止","发送完成","已结算"
//     ]
// };
const dataSource = [
    {
        "batchNumber":"945",
        "team":"kk经理",
        "clientName":"百度人工智能",
    "account":"ba001",
    "acceptNumber":"13903960056",
    "address":"河南",
    "aisle":" 千讯信通通道-测试654-免审",
    "sendState":"未知",
    "numberCharges":"1",
    "sendDate":"2017-05-24 14:18:54.0",
    "stateFeedbackTime":"213",
    "pushMessage":"未推送",
    "details":"【7878】你的验证码是1FGHD" +
"提交时间：2017-05-24 14:18:21.0    (共17个字)"

},
{
    "batchNumber":"945",
    "team":"kk经理",
    "clientName":"百度人工智能",
    "account":"ba001",
    "acceptNumber":"13903960056",
    "address":"河南",
    "aisle":" 千讯信通通道-测试654-免审",
    "sendState":"未知",
    "numberCharges":"1",
    "sendDate":"2017-05-24 14:18:54.0",
    "stateFeedbackTime":"213",
    "pushMessage":"未推送",
    "details":"【7878】你的验证码是1FGHD" +
"提交时间：2017-05-24 14:18:21.0    (共17个字)"

},
{
    "batchNumber":"945",
    "team":"kk经理",
    "clientName":"百度人工智能",
    "account":"ba001",
    "acceptNumber":"13903960056",
    "address":"河南",
    "aisle":" 千讯信通通道-测试654-免审",
    "sendState":"未知",
    "numberCharges":"1",
    "sendDate":"2017-05-24 14:18:54.0",
    "stateFeedbackTime":"213",
    "pushMessage":"未推送",
    "details":"【7878】你的验证码是1FGHD" +
"提交时间：2017-05-24 14:18:21.0    (共17个字)"

}
];
class InputBox extends Component {

    render() {
        return(
            <div className="input-date">
                <span>提交时间：</span>
                <input type="text" placeholder="年/月/日"/>—
                <input type="text" placeholder="年/月/日"/>
            </div>
        );
    }
}

export {InputBox};