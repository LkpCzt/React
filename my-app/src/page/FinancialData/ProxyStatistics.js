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
        'key':'proxy-account',
        "title":"代理账号：",
        "placeholder":"请输入账号",
        "id":"proxyAccount"
    },
    {
        'type':'input',
        'key':'channel-name',
        "title":"通道名称：",
        "placeholder":"请输入通道组名称",
        "id":"channelName"
    },
    {
        'type':'datePicker',
        'key':'submit-time',
        "title":"创建时间：",
        "id":"submitTime"
    }
];
const columns = [
    {
        title: '日期',
        dataIndex: 'date',
        sorter: (a, b) => b.date.localeCompare(a.date)
    },
    {
        title: '客户名称',
        className: 'column-money',
        dataIndex: 'clientName',
        sorter: (a, b) => b.clientName.localeCompare(a.clientName)
    },
    {
        title: '账号',
        dataIndex: 'account',
        sorter: (a, b) => b.account.localeCompare(a.account)
    },
    {
        title: '通道',
        dataIndex: 'channel',
        sorter: (a, b) => b.channel.localeCompare(a.channel)
    },
    {
        title: '通道类型',
        dataIndex: 'channelType',
        sorter: (a, b) => b.channelType.localeCompare(a.channelType)
    },
    {
        title: '发送号码数',
        dataIndex: 'sendNumbers',
        sorter: (a, b) => b.sendNumbers.localeCompare(a.sendNumbers)
    },
    {
        title: '消费计费条数',
        dataIndex: 'consumptionBillNumber',
        sorter: (a, b) => b.consumptionBillNumber.localeCompare(a.consumptionBillNumber)
    },
    {
        title: '结算计费条数',
        dataIndex: 'settlementBill',
        sorter: (a, b) => b.settlementBill.localeCompare(a.settlementBill)
    },
    {
        title: '移动发送成功\\失败\\未知',
        dataIndex: 'mobile',
        sorter: (a, b) => b.mobile.localeCompare(a.mobile)
    },
    {
        title: '联通发送成功\\失败\\未知',
        dataIndex: 'ChinaUnicom',
        sorter: (a, b) => b.ChinaUnicom.localeCompare(a.ChinaUnicom)
    },
    {
        title: '电信发送成功\\失败\\未知',
        dataIndex: 'telecommunications',
        sorter: (a, b) => b.telecommunications.localeCompare(a.telecommunications)
    }
];
const data = [
    {
        "date":"日期",
        "clientName":"客户名称",
        "account":"账号",
        "channel":"通道",
        "channelType":"通道类型",
        "sendNumbers":"发送号码数",
        "consumptionBillNumber":" 消费计费条数",
        "settlementBill":"结算计费条数",
        "mobile":"移动",
        "ChinaUnicom":"联通",
        "telecommunications":"电信",
        "key":"1"

    }
];
const searchCondition = {'batchNumber':''};
class ProxyStatistics extends Component {
    search(){
        searchCondition.proxyAccount=document.getElementById('proxyAccount').value;
        searchCondition.channelName=document.getElementById('channelName').value;
        console.log(searchCondition);
    }
    reset(){
        document.getElementById('proxyAccount').value = '';
        document.getElementById('channelName').value = '';

        searchCondition.proxyAccount='';
        searchCondition.channelName='';

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
                    <div className="content-title">代理统计</div>
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

export default ProxyStatistics;