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
        'type':'select',
        'key':'state',
        "title":"状态：",
        "id":"state",
        "options":[
            "待审核","通过审核","停用","审核不通过"
        ]
    },
    {
        'type':'input',
        'key':'channel-group',
        "title":"通道组：",
        "placeholder":"",
        "id":"channelGroup"
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
        className: 'column-money',
        dataIndex: 'channelName',
        sorter: (a, b) => b.channelName.localeCompare(a.channelName)
    },
    {
        title: '状态',
        dataIndex: 'state',
        sorter: (a, b) => b.state.localeCompare(a.state)
    },
    {
        title: '通道组类型',
        dataIndex: 'channelGroupType',
        sorter: (a, b) => b.channelGroupType.localeCompare(a.channelGroupType)
    },
    {
        title: '创建时间',
        dataIndex: 'createDate',
        sorter: (a, b) => b.createDate.localeCompare(a.createDate)
    },
    {
        title: '操作',
        render: () => (
            <span className={'table-operation'}>
                <a href="#">编辑</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">删除</a>
          </span>
        ),
    }
];
const data = [
    {
        "channelName":"通道名称",
        "state":"状态",
        "channelGroupType":"类型",
        "createDate":"创建时间",
        "key":"1"
    }
];
const searchCondition = {};
class ChannelGroupManagement extends Component {
    search(){
        searchCondition.state=document.getElementById('state').value;
        searchCondition.channelGroup=document.getElementById('channelGroup').value;
        console.log(searchCondition);
    }
    reset(){
        console.log('重置');
    }
    added(){
        console.log('新增');
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
                    <div className="content-title">通道管理</div>
                    <div className="title-remark">查看通道相关的信息， 点击添加可以添加通道， 并对通道进行编辑等操作。</div>
                    <hr/>
                </div>
                <div className="condition">
                    <button className="btn-normal" onClick={this.added}>新增</button>
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

export default ChannelGroupManagement;