/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import { Table } from 'antd';
const columns = [
    {
        title: '编号',
        dataIndex: 'numbering',
    },
    {
        title: '名称',
        dataIndex: 'name',
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
        title: '描述',
        dataIndex: 'description',
    },
    {
        title: '操作',
        dataIndex: 'operating',
    }
];
const data = [
    {
        "numbering":"编号",
        "name":"名称",
        "createDate":"创建时间",
        "updateDate":"修改时间",
        "description":"描述",
        "operating":" 操作",
        "key":"1"
    }
];
class RoleManagement extends Component {

    render() {

        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">角色管理</div>
                    <div className="title-remark">查看角色相关的信息， 点击详情在弹出框中查看， 并对角色进行编辑等操作。</div>
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

export default RoleManagement;