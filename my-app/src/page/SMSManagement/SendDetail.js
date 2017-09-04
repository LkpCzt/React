/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import InputSelector from '../../InputSelector';
import { DatePicker } from 'antd';
import { Table } from 'antd';
var dataSearch = [
    {
        'type':'input',
        'key':'batch-number',
        "title":"批次编号：",
        "placeholder":"请输入批次编号",
        "id":"batchNumber"
    },
    {
        'type':'input',
        'key':'customer-account-number',
        "title":"客户账号：",
        "placeholder":"请输入账号",
        "id":"customerAccountNumber"
    },
    {
        'type':'input',
        'key':'send-content',
        "title":"发送内容：",
        "placeholder":"请输入发送内容",
        "id":"sendContent"
    },
    {
        'type':'select',
        'key':'send-state',
        "title":"发送状态：",
        "id":"sendState",
        "options":[
            "待发送","已发送","发送失败","状态报告未知","发送成功"
        ]
    },
    {
        'type':'input',
        'key':'issue-number',
        "title":"下发号码：",
        "placeholder":"请输入号码",
        "id":"issueNumber"
    },
    {
        'type':'select',
        'key':'back-state',
        "title":"是否返回状态报告：",
        "id":"backState",
        "options":[
            "已返回","未返回"
        ]
    },
    {
        'type':'datePicker',
        'key':'submit-time',
        "title":"提交时间：",
        "id":"submitTime"
    }
];
const columns = [
    {
        title: '批次编号',
        dataIndex: 'batchNumber',
        sorter: (a, b) => b.batchNumber.localeCompare(a.batchNumber)
    },
    {
        title: '团队',
        className: 'column-money',
        dataIndex: 'team',
        sorter: (a, b) => b.team.localeCompare(a.team)
    },
    {
        title: '客户名称',
        dataIndex: 'clientName',
        sorter: (a, b) => b.clientName.localeCompare(a.clientName)
    },
    {
        title: '账户',
        dataIndex: 'account',
        sorter: (a, b) => b.account.localeCompare(a.account)
    },
    {
        title: '接收号码',
        dataIndex: 'receiveNumber',
        sorter: (a, b) => b.receiveNumber.localeCompare(a.receiveNumber)
    },
    {
        title: '归属地',
        dataIndex: 'address',
        sorter: (a, b) => b.address.localeCompare(a.address)
    },
    {
        title: '通道',
        dataIndex: 'aisle',
        sorter: (a, b) => b.aisle.localeCompare(a.aisle)
    },
    {
        title: '发送状态',
        dataIndex: 'sendState',
        sorter: (a, b) => b.sendState.localeCompare(a.sendState)
    },
    {
        title: '计费条数',
        dataIndex: 'numberCharges',
        sorter: (a, b) => b.numberCharges.localeCompare(a.numberCharges)
    },
    {
        title: '发送时间',
        dataIndex: 'sendDate',
        sorter: (a, b) => b.sendDate.localeCompare(a.sendDate)
    },
    {
        title: '状态反馈时间',
        dataIndex: 'stateFeedbackTime',
        sorter: (a, b) => b.stateFeedbackTime.localeCompare(a.stateFeedbackTime)
    },
    {
        title: '推送消息',
        dataIndex: 'pushMessage',
        sorter: (a, b) => b.pushMessage.localeCompare(a.pushMessage)
    },
    {
        title: '详情',
        dataIndex: 'details',
    }
];
const data = [
    {
        "batchNumber":"94",
        "team":"a",
        "clientName":"百度人工智能",
        "account":"ba001",
        "receiveNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:54.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"-",
        "key":"1"

    },
    {
        "batchNumber":"946",
        "team":"d",
        "clientName":"百度人工智能",
        "account":"ba001",
        "receiveNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:55.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"-",
        "key":"2"

    },
    {
        "batchNumber":"944",
        "team":"b",
        "clientName":"百度人工智能",
        "account":"ba001",
        "receiveNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:52.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"-",
        "key":"3"

    },
    {
        "batchNumber":"945",
        "team":"c",
        "clientName":"百度人工智能",
        "account":"ba001",
        "receiveNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:51.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"-",
        "key":"4"
    }
];

const { RangePicker } = DatePicker;
function onChange(date, dateString) {
    searchCondition.dateString = dateString;
}
const searchCondition = {};
class SendDetail extends Component {

    search(){
        searchCondition.batchNumber=document.getElementById('batchNumber').value;
        searchCondition.customerAccountNumber=document.getElementById('customerAccountNumber').value;
        searchCondition.sendContent=document.getElementById('sendContent').value;
        searchCondition.sendState=document.getElementById('sendState').value;
        searchCondition.issueNumber=document.getElementById('issueNumber').value;
        searchCondition.backState=document.getElementById('backState').value;
        console.log(searchCondition);
    }
    reset(){
        document.getElementById('batchNumber').value = '';
        document.getElementById('customerAccountNumber').value = '';
        document.getElementById('sendContent').value = '';
        document.getElementById('sendState').value = '';
        document.getElementById('issueNumber').value = '';
        document.getElementById('backState').value = '';

        searchCondition.batchNumber='';
        searchCondition.customerAccountNumber='';
        searchCondition.sendContent='';
        searchCondition.sendState='';
        searchCondition.issueNumber='';
        searchCondition.backState= '';

        console.log(searchCondition);
    }
    render() {
        var search = dataSearch.map(function (item, index) {

            if (item.type === 'input'){
                return <InputBox key={item.key} curItem={item}/>
            }else if(item.type === 'select'){
                return <InputSelector key={item.key} curItem={item}/>
            }else {
                return <div style={{display: 'inline-block',padding:'10px'}} key={item.key}>
                    <span>{item.title}</span>
                    <RangePicker onChange={onChange}/>
                </div>
            }
        },this);
        return(
            <div className="sendDetail">
                <div className="content-title">
                    发送详情
                    <hr/>
                </div>
                {/*搜索条件模块*/}
                <div className="condition">
                    {search}

                    <button className="btn-reset" onClick={this.reset}>
                        重置
                    </button>
                    <button className="btn-search" onClick={this.search}>
                        <svg className="icon" viewBox="0 0 1024 1024">
                            <path d="M672.321 671.382c-131.242 131.242-344.77 131.242-475.985 0-131.242-131.242-131.242-344.742 0-475.961 131.242-131.226 344.77-131.226 475.985 0 131.193 131.242 131.193 344.742 0 475.961v0zM269.731 268.832c-90.763 90.747-90.763 238.455-0.003 329.241 90.747 90.747 238.485 90.747 329.241 0 90.747-90.747 90.747-238.455 0-329.198s-238.485-90.834-329.198-0.003v0zM931.479 828.993c24.934 24.934 24.934 65.335 0 90.292l-11.306 11.306c-24.934 24.954-65.335 24.954-90.292 0l-231.361-231.413c-24.934-24.954-24.934-65.335 0-90.292l11.306-11.306c24.934-24.954 65.378-24.954 90.292 0l231.361 231.413zM931.479 828.993z"></path>
                        </svg>
                    </button>

                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                />
            </div>
        );
    }
}

export default SendDetail;