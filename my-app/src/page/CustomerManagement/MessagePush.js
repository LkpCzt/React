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
const columns = [

    {
        title: '消息标题',
        dataIndex: 'messageTitle',
        sorter: (a, b) => b.messageTitle.localeCompare(a.messageTitle)
    },
    {
        title: '消息内容',
        dataIndex: 'messageContent',
        sorter: (a, b) => b.messageContent.localeCompare(a.messageContent)
    },
    {
        title: '推送范围',
        dataIndex: 'pushRange',
        sorter: (a, b) => b.pushRange.localeCompare(a.pushRange)
    },
    {
        title: '操作人',
        dataIndex: 'Operator',
        sorter: (a, b) => b.Operator.localeCompare(a.Operator)
    },
    {
        title: '创建时间',
        dataIndex: 'createDate',
        sorter: (a, b) => b.createDate.localeCompare(a.createDate)
    }
];
const data = [
    {
        "messageTitle":"消息标题",
        "messageContent":"消息内容",
        "pushRange":"推送范围",
        "Operator":" 操作人",
        "createDate":"创建时间",
        "key":"1"
    }
];
const searchCondition = {};
class ClientList extends Component {
    search(){

        console.log(searchCondition);
    }
    reset(){

        console.log(searchCondition);
    }
    added(){
        console.log('新增');
    }
    render() {

        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">消息推送</div>
                    <hr/>
                </div>
                <div className="condition">
                    <button className="btn-normal" onClick={this.added}>新增</button>
                    <div style={{display: 'inline-block',padding:'10px'}}>
                        <span>{'创建时间：'}</span>
                        <RangePicker onChange={onChange}/>
                    </div>
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

export default ClientList;