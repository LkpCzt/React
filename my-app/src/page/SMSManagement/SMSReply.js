/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import { Table } from 'antd';
var dataSearch = [
    {
        'type':'input',
        'key':'client-name',
        "title":"客户名称：",
        "placeholder":"请输入名称",
        "id":"clientName"
    },
    {
        'type':'input',
        'key':'phonen-umber',
        "title":"手机号码：",
        "placeholder":"手机号码",
        "id":"phoneNumber"
    }
];
const columns = [
    {
        title: '团队',
        className: 'column-money',
        dataIndex: 'team',
        sorter: (a, b) => b.team.localeCompare(a.team)
    },
    {
        title: '业务员',
        dataIndex: 'clerk',
        sorter: (a, b) => b.clerk.localeCompare(a.clerk)
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
        title: '接收号码',
        dataIndex: 'receiveNumber',
        sorter: (a, b) => b.receiveNumber.localeCompare(a.receiveNumber)
    },
    {
        title: '通道名称',
        dataIndex: 'aisleName',
        sorter: (a, b) => b.aisleName.localeCompare(a.aisleName)
    },
    {
        title: '下发内容',
        dataIndex: 'issuedContent',
        sorter: (a, b) => b.issuedContent.localeCompare(a.issuedContent)
    },
    {
        title: '推送内容',
        dataIndex: 'pushContent',
        sorter: (a, b) => b.pushContent.localeCompare(a.pushContent)
    },
    {
        title: '回复内容',
        dataIndex: 'replyContent',
        sorter: (a, b) => b.replyContent.localeCompare(a.replyContent)
    },
    {
        title: '接收时间',
        dataIndex: 'receiveDate',
        sorter: (a, b) => b.receiveDate.localeCompare(a.receiveDate)
    }
];
const data = [
    {
        "team":"a",
        "clerk":"业务员",
        "clientName":"客户名称",
        "account":"账号",
        "receiveNumber":"接受号码",
        "aisleName":" 通道名称",
        "issuedContent":"下发内容",
        "pushContent":"推送内容",
        "replyContent":"回复内容",
        "receiveDate":"接收时间",
        "key":"1"
    }
];
const searchCondition = {};
class SMSReply extends Component {
    search(){
        searchCondition.phoneNumber=document.getElementById('phoneNumber').value;
        searchCondition.clientName=document.getElementById('clientName').value;
        console.log(searchCondition);
    }
    render() {
        var search = dataSearch.map(function (item, index) {

            if (item.type === 'input'){
                return <InputBox key={item.key} curItem={item}/>
            }
        },this);
        return(
            <div className="SMSReply">
                <div className="content-title">
                    短信回复
                    <hr/>
                </div>
                <div className="condition">
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

export default SMSReply;