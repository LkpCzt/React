/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import { Table } from 'antd';
const columns = [
    {
        title: '短信管理',
        dataIndex: 'name',
    },
    {
        title: '序号',
        dataIndex: 'serialNumber',
    },
    {
        title: 'URL',
        dataIndex: 'URL',
    },
    {
        title: '创建时间',
        dataIndex: 'createDate',
    },
    {
        title: '修改时间',
        dataIndex: 'updateDate',
    },
    {
        title: '操作',
        dataIndex: 'operating',
    }
];
const data = [
    {
        "name":"短信管理",
        "serialNumber":"序号",
        "URL":"URL",
        "createDate":"创建时间",
        "updateDate":"修改时间",
        "operating":" 操作",
        "key":"1"
    },
    {
        "name":"短信管理",
        "serialNumber":"序号",
        "URL":"URL",
        "createDate":"创建时间",
        "updateDate":"修改时间",
        "operating":" 操作",
        "key":"2"
    }
];
class MenuManagement extends Component {

    render() {

        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">菜单管理</div>
                    <div className="title-remark">查看菜单相关的信息， 点击详情在弹出框中查看， 并对菜单进行编辑等操作。</div>
                    <hr/>
                </div>
                <div className="condition">
                    <button className="btn-normal">新增</button>
                </div>
                <Table
                    columns={columns}
                    dataSource={data}
                />
            </div>
        );
    }
}

export default MenuManagement;