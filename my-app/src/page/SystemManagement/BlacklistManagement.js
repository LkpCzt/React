/**
 * Created by lkp on 2017/5/26.
 */
import React, {Component} from 'react';
import InputBox from '../../InputBox';
import { Table } from 'antd';
const columns = [
    {
        title: '手机号码',
        dataIndex: 'cellphoneNumber',
    },
    {
        title: '加入时间',
        dataIndex: 'joinTime',
    },
    {
        title: '归属通道',
        dataIndex: 'attributionChannel',
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
        "cellphoneNumber":"手机号码",
        "joinTime":"加入时间",
        "attributionChannel":"归属通道",
        "key":"1"
    }
];
class BlacklistManagement extends Component {

    render() {

        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">角色管理</div>
                    <div className="title-remark">查看角色相关的信息， 点击详情在弹出框中查看， 并对角色进行编辑等操作。</div>
                    <hr/>
                </div>
                <div className="condition">
                    上传文件：
                    <button className="btn-normal">上传</button>
                    <button className="btn-reset">重置</button>
                    <button className="btn-normal">提交</button>
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

export default BlacklistManagement;