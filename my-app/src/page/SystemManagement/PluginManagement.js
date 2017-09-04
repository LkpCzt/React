/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import { Table } from 'antd';
const columns = [
    {
        title: 'id编号',
        dataIndex: 'IDNumbering',
        sorter: (a, b) => b.IDNumbering.localeCompare(a.IDNumbering)
    },
    {
        title: '名称',
        dataIndex: 'name',
        sorter: (a, b) => b.name.localeCompare(a.name)
    },
    {
        title: '通道名称',
        className: 'column-money',
        dataIndex: 'channelName',
        sorter: (a, b) => b.channelName.localeCompare(a.channelName)
    },
    {
        title: '通道标示',
        dataIndex: 'channelIdentifier',
        sorter: (a, b) => b.channelIdentifier.localeCompare(a.channelIdentifier)
    },
    {
        title: '路径',
        dataIndex: 'path',
        sorter: (a, b) => b.path.localeCompare(a.path)
    },
    {
        title: '上传时间',
        dataIndex: 'submitDate',
        sorter: (a, b) => b.submitDate.localeCompare(a.submitDate)
    },
    {
        title: '内容',
        dataIndex: 'content',
        sorter: (a, b) => b.content.localeCompare(a.content)
    },
    {
        title: '描述',
        dataIndex: 'description',
        sorter: (a, b) => b.description.localeCompare(a.description)
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
        "IDNumbering":"id编号",
        "name":"名称",
        "channelName":"通道名称",
        "channelIdentifier":"通道标示",
        "path":"路径",
        "submitDate":" 上传时间",
        "content":" 内容",
        "description":" 描述",
        "key":"1"
    }
];
class PluginManagement extends Component {

    render() {

        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">插件管理</div>
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

export default PluginManagement;