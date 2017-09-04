import React, {Component} from 'react';
import './TableItem.css'
var head = ["团队","客户名称","客户账号","通道组","发送类型","发送号码输","消费计费条数","审核状态","错号/黑名单","审核时间","操作",];
var obj = [
    {
        "team":"张三",
        "clientName":"20",
        "clientAccount":"20",
        "channelGroup":"三网通道组",
        "sendType":"定时发送",
        "sendDate":"2012/12/ 12:12",
        "sendNumber":"25",
        "sendBillingNum":"25",
        "approvalStatus":"自动通过",
        "blacklist":"25/36",
        "approvalDate":"2012/12/21 12:12",
        "operating":"下载号码",
        "content":"【短信大咖】验证码：6859，退订回复T",
        "submitTime":"提交时间：2012/12/21 12:12"
    },
    {
        "team":"张三",
        "clientName":"20",
        "clientAccount":"20",
        "channelGroup":"三网通道组",
        "sendType":"定时发送",
        "sendDate":"2012/12/ 12:12",
        "sendNumber":"25",
        "sendBillingNum":"25",
        "approvalStatus":"自动通过",
        "blacklist":"25/36",
        "approvalDate":"2012/12/21 12:12",
        "operating":"下载号码",
        "content":"【短信大咖】验证码：6859，退订回复T",
        "submitTime":"提交时间：2012/12/21 12:12"
    },
    {
        "team":"张三",
        "clientName":"20",
        "clientAccount":"20",
        "channelGroup":"三网通道组",
        "sendType":"定时发送",
        "sendDate":"2012/12/ 12:12",
        "sendNumber":"25",
        "sendBillingNum":"25",
        "approvalStatus":"自动通过",
        "blacklist":"25/36",
        "approvalDate":"2012/12/21 12:12",
        "operating":"下载号码",
        "content":"【短信大咖】验证码：6859，退订回复T",
        "submitTime":"提交时间：2012/12/21 12:12"
    },
    {
        "team":"张三",
        "clientName":"20",
        "clientAccount":"20",
        "channelGroup":"三网通道组",
        "sendType":"定时发送",
        "sendDate":"2012/12/ 12:12",
        "sendNumber":"25",
        "sendBillingNum":"25",
        "approvalStatus":"自动通过",
        "blacklist":"25/36",
        "approvalDate":"2012/12/21 12:12",
        "operating":"下载号码",
        "content":"【短信大咖】验证码：6859，退订回复T",
        "submitTime":"提交时间：2012/12/21 12:12"
    }
];
class TableItem extends Component {
    render() {
        var liList = head.map(function (item,index) {
            return(
                <li key={index}>{item}</li>
                )
        },this);
        return (
            <div className="table-item">
                <ol>
                    {liList}
                </ol>
            </div>
        );
    }
}

export default TableItem;