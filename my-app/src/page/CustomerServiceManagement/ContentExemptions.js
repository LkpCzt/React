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
        'type':'select',
        'key':'review-state',
        "title":"审核状态：",
        "id":"reviewState",
        "options":[
            "待审核","通过审核","停用","审核不通过"
        ]
    }
];
const columns = [
    {
        title: '团队名称',
        className: 'column-money',
        dataIndex: 'teamName',
        sorter: (a, b) => b.teamName.localeCompare(a.teamName)
    },
    {
        title: '代理名称',
        dataIndex: 'proxyName',
        sorter: (a, b) => b.proxyName.localeCompare(a.proxyName)
    },
    {
        title: '代理账号',
        dataIndex: 'proxyAccount',
        sorter: (a, b) => b.proxyAccount.localeCompare(a.proxyAccount)
    },
    {
        title: '审核内容',
        dataIndex: 'reviewContent',
        sorter: (a, b) => b.reviewContent.localeCompare(a.reviewContent)
    },
    {
        title: '模版类型',
        dataIndex: 'templateType',
        sorter: (a, b) => b.templateType.localeCompare(a.templateType)
    },
    {
        title: '状态',
        dataIndex: 'state',
        sorter: (a, b) => b.state.localeCompare(a.state)
    },
    {
        title: '提交时间',
        dataIndex: 'submitDate',
        sorter: (a, b) => b.submitDate.localeCompare(a.submitDate)
    },
    {
        title: '审核时间',
        dataIndex: 'reviewDate',
        sorter: (a, b) => b.reviewDate.localeCompare(a.reviewDate)
    },
    {
        title: '操作',
        render: () => (
            <span className={'table-operation'}>
                <a href="#">审核通过</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">不通过</a>
          </span>
        ),
    }
];
const data = [
    {
        "teamName":"团队名称",
        "proxyName":"代理名称",
        "proxyAccount":"代理账号",
        "reviewContent":"审核内容",
        "templateType":"模版类型",
        "state":" 状态",
        "submitDate":"提交时间",
        "reviewDate":"审核时间",
        "key":"1"
    }
];
const searchCondition = {};
class ContentExemptions extends Component {
    search(){
        searchCondition.proxyAccount=document.getElementById('proxyAccount').value;
        searchCondition.reviewState=document.getElementById('reviewState').value;
        console.log(searchCondition);
    }
    reset(){
        console.log('重置');
    }
    added(){
        console.log('新增');
    }
    render() {
        console.log(columns);
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
                    <div className="content-title">内容免审报备</div>
                    <div className="title-remark">查看免审模板相关的信息， 并查询免审模板等操作。</div>
                    <hr/>
                </div>
                <div className="condition">
                    <button className="btn-normal" onClick={this.added}>新增</button>
                    <div style={{display: 'inline-block',padding:'10px'}}>
                        <span>{'提交时间：'}</span>
                        <RangePicker onChange={onChange}/>
                    </div>
                    <button className="btn-reset" onClick={this.reset}>
                        重置
                    </button>
                    {search}
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

export default ContentExemptions;