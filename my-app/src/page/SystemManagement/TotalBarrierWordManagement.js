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
var item = {
    "title":"名称",
    "placeholder":"请输入账号名称",
    "id":"inputName"
};
const columns = [
    {
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => b.name.localeCompare(a.name)
    },
    {
        title: '属性',
        className: 'column-money',
        dataIndex: 'attributes',
        sorter: (a, b) => b.attributes.localeCompare(a.attributes)
    },
    {
        title: '关联数',
        dataIndex: 'relatedNum',
        sorter: (a, b) => b.relatedNum.localeCompare(a.relatedNum)
    },
    {
        title: '描述',
        dataIndex: 'description',
        sorter: (a, b) => b.description.localeCompare(a.description)
    },
    {
        title: '屏蔽词',
        dataIndex: 'shieldingWords',
        sorter: (a, b) => b.role.localeCompare(a.role)
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
            <a href="#">子任务</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">导出号码</a>&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">详情</a>
          </span>
        ),
    }
];
const data = [
    {
        "name":"名称",
        "attributes":"属性",
        "relatedNum":"关联数",
        "description":"描述",
        "shieldingWords":"屏蔽词",
        "createDate":" 创建时间",
        "key":"1"

    }
];
const searchCondition = {'batchNumber':''};

class TotalBarrierWordManagement extends Component {
    search(){
        searchCondition.inputName=document.getElementById('inputName').value;
        console.log(searchCondition);
    }
    reset(){
        document.getElementById('inputName').value = '';

        searchCondition.inputName='';

        console.log(searchCondition);
    }

    render() {
        return(
            <div className="sendTask">
                <div className="title-package">
                    <div className="content-title">总屏蔽词管理</div>
                    <hr/>
                </div>
                {/*搜索条件模块*/}
                <div className="condition">
                    <button className="btn-normal" onClick={this.added}>新增</button>
                    <InputBox curItem={item}/>
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

export default TotalBarrierWordManagement;