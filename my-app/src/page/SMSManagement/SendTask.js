/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import InputSelector from '../../InputSelector';
import { DatePicker } from 'antd';
import { Table } from 'antd';
const { RangePicker } = DatePicker;
function onChange(date, dateString) {
    searchCondition.dateString = dateString;
}
var dataSearch = [
    {
        'type':'input',
        'key':'batch-number',
        "title":"批次编号：",
        "placeholder":"请输入批次编号",
        "id":"batchNumber"
    },
    {
        'type':'select',
        'key':'send-state',
        "title":"发送状态：",
        "id":"sendState",
        "options":[
            "等待发送","正在发送","人工中止","发送完成","已结算"
        ]
    },
    {
        'type':'select',
        'key':'send-type',
        "title":"发送类型：",
        "id":"sendType",
        "options":[
            "马上发送","定时发送"
        ]
    },
    {
        'type':'input',
        'key':'send-content',
        "title":"发送内容：",
        "placeholder":"请输入发送内容",
        "id":"sendContent"
    },
    {
        'type':'input',
        'key':'proxy-account',
        "title":"代理账号：",
        "placeholder":"请输入账号",
        "id":"proxyAccount"
    },{
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
        title: '发送量',
        dataIndex: 'sendVolume',
        sorter: (a, b) => b.sendVolume.localeCompare(a.sendVolume)
    },
    {
        title: '计费量',
        dataIndex: 'chargeVolume',
        sorter: (a, b) => b.chargeVolume.localeCompare(a.chargeVolume)
    },
    {
        title: '结算条数',
        dataIndex: 'settlementNum',
        sorter: (a, b) => b.chargeVolume.localeCompare(a.chargeVolume)
    },
    {
        title: '发送状态',
        dataIndex: 'sendState',
        sorter: (a, b) => b.sendState.localeCompare(a.sendState)
    },
    {
        title: '错误\\黑名单',
        dataIndex: 'errorBlacklist',
        sorter: (a, b) => b.errorBlacklist.localeCompare(a.errorBlacklist)
    },
    {
        title: '发送类型',
        dataIndex: 'sendType',
        sorter: (a, b) => b.sendType.localeCompare(a.sendType)
    },
    {
        title: '发送时间',
        dataIndex: 'sendDate',
        sorter: (a, b) => b.sendDate.localeCompare(a.sendDate)
    },
    {
        title: '操作',
        render: () => (
            <span className={'table-operation'}>
            <button>子任务</button>
            <button>导出号码</button>
            <button>详情</button>
          </span>
        ),
    }
];
const data = [
    {
        "batchNumber":"94",
        "team":"a",
        "clientName":"百度人工智能",
        "account":"ba001",
        "sendVolume":"13903960056",
        "chargeVolume":"河南",
        "settlementNum":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "errorBlacklist":"1",
        "sendType":"123",
        "sendDate":"2017-05-24 14:18:54.0",
        "key":"1"

    }
];
const searchCondition = {'batchNumber':''};
class SendTask extends Component {

    subTask(){
        console.log('子任务');
    }
    search(){
        searchCondition.batchNumber=document.getElementById('batchNumber').value;
        searchCondition.sendState=document.getElementById('sendState').value;
        searchCondition.sendType=document.getElementById('sendType').value;
        searchCondition.sendContent=document.getElementById('sendContent').value;
        searchCondition.proxyAccount=document.getElementById('proxyAccount').value;
        console.log(searchCondition);
    }
    reset(){
        document.getElementById('batchNumber').value = '';
        document.getElementById('sendState').value = '';
        document.getElementById('sendType').value = '';
        document.getElementById('sendContent').value = '';
        document.getElementById('proxyAccount').value = '';

        searchCondition.batchNumber='';
        searchCondition.sendState='';
        searchCondition.sendType='';
        searchCondition.sendContent='';
        searchCondition.proxyAccount='';
        searchCondition.dateString = '';

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
            <div className="sendTask">
                <div className="title-package">
                    <div className="content-title">发送任务</div>
                    <div className="title-remark">查看发送任务相关的信息，点击导出可导出任务发送号码 并查询发送详情等操作。</div>
                    <hr/>
                </div>
                {/*搜索条件模块*/}
                <div className="condition">
                    {search}
                    <button className="btn-reset" onClick={this.reset}>重置</button>
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
                    expandedRowRender={record=><div><p>{"【7878】你的验证码是1FGHD"}</p><br/><p>{"提交时间：2017-05-24 14:18:21.0 (共17个字)"}</p></div>}
                    defaultExpandAllRows={true} />
            </div>
        );
    }
}

export default SendTask;