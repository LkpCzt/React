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
        'key':'type',
        "title":"类型：",
        "id":"type",
        "options":[
            "重置","消费","返还"
        ]
    },
    {
        'type':'input',
        'key':'client-account',
        "title":"客户账号：",
        "placeholder":"请输入账号",
        "id":"clientAccount"
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
        title: '账单编号',
        className: 'column-money',
        dataIndex: 'billNumber',
        sorter: (a, b) => b.billNumber.localeCompare(a.billNumber)
    },
    {
        title: '客户名称',
        dataIndex: 'clientName',
        sorter: (a, b) => b.clientName.localeCompare(a.clientName)
    },
    {
        title: '账号',
        dataIndex: 'account',
        sorter: (a, b) => b.account.localeCompare(a.account)
    },
    {
        title: '交易前条数',
        dataIndex: 'transactionsBeforeNumber',
        sorter: (a, b) => b.transactionsBeforeNumber.localeCompare(a.transactionsBeforeNumber)
    },
    {
        title: '变动条数',
        dataIndex: 'changesNumber',
        sorter: (a, b) => b.changesNumber.localeCompare(a.changesNumber)
    },
    {
        title: '交易后条数',
        dataIndex: 'transactionsAfterNumber',
        sorter: (a, b) => b.transactionsAfterNumber.localeCompare(a.transactionsAfterNumber)
    },
    {
        title: '交易类型',
        dataIndex: 'transactionsType',
        sorter: (a, b) => b.transactionsType.localeCompare(a.transactionsType)
    },
    {
        title: '描述',
        dataIndex: 'description',
        sorter: (a, b) => b.description.localeCompare(a.description)
    },
    {
        title: '创建时间',
        dataIndex: 'createDate',
        sorter: (a, b) => b.createDate.localeCompare(a.createDate)
    }
];
const data = [
    {
        "billNumber":"账单编号",
        "clientName":"客户名称",
        "account":"账号",
        "transactionsBeforeNumber":"交易前条数",
        "changesNumber":" 变动条数",
        "transactionsAfterNumber":" 交易后条数",
        "transactionsType":" 交易类型",
        "description":" 描述",
        "createDate":"创建时间",
        "key":"1"
    }
];
const searchCondition = {};
class ProxyBillWater extends Component {
    search(){
        searchCondition.sttypeate=document.getElementById('type').value;
        searchCondition.clientAccount=document.getElementById('clientAccount').value;
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
                    <div className="content-title">代理账单流水</div>
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

export default ProxyBillWater;