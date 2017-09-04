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
        'type':'datePicker',
        'key':'create-time',
        "title":"创建时间：",
        "id":"createTime"
    }
];
const columns = [
    {
        title: '通道名称',
        dataIndex: 'channelName',
        sorter: (a, b) => b.channelName.localeCompare(a.channelName)
    },
    {
        title: '通道类型',
        dataIndex: 'channelType',
        sorter: (a, b) => b.channelType.localeCompare(a.channelType)
    },
    {
        title: '计费量',
        dataIndex: 'chargeVolume',
        sorter: (a, b) => b.chargeVolume.localeCompare(a.chargeVolume)
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
        "channelName":"通道名称",
        "channelType":"通道类型",
        "chargeVolume":"计费量",
        "mobile":"移动",
        "ChinaUnicom":"联通",
        "telecommunications":"电信",
        "key":"1"

    }
];
const searchCondition = {};
class ChannelStatistics extends Component {
    search(){
        searchCondition.proxyAccount=document.getElementById('proxyAccount').value;
        console.log(searchCondition);
    }
    reset(){
        console.log('重置');
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
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">通道统计</div>
                    <hr/>
                </div>
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

export default ChannelStatistics;