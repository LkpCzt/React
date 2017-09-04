import React,{Component} from 'react';
import { Table } from 'antd';
import './DTable.css'
const columns = [{
    title: '批次编号',
    dataIndex: 'batchNumber',
},
    {
        title: '团队',
        className: 'column-money',
        dataIndex: 'team',
    },
    {
        title: '客户名称',
        dataIndex: 'clientName',
        minWidth:100
    },
    {
        title: '账户',
        dataIndex: 'account',
    },
    {
        title: '接受号码',
        dataIndex: 'acceptNumber',
    },
    {
        title: '归属地',
        dataIndex: 'address',
    },
    {
        title: '通道',
        dataIndex: 'aisle',
    },
    {
        title: '发送状态',
        dataIndex: 'sendState',
    },
    {
        title: '计费条数',
        dataIndex: 'numberCharges',
    },
    {
        title: '发送时间',
        dataIndex: 'sendDate',
    },
    {
        title: '状态反馈时间',
        dataIndex: 'stateFeedbackTime',
    },
    {
        title: '推送消息',
        dataIndex: 'pushMessage',
    },
    {
        title: '详情',
        dataIndex: 'details',
    }
];

const data = [
    {
        "batchNumber":"945",
        "team":"kk经理",
        "clientName":"百度人工智能",
        "account":"ba001",
        "acceptNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:54.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"【7878】你的验证码是1FGHD" +
        "提交时间：2017-05-24 14:18:21.0    (共17个字)",
        "key":"1"

    },
    {
        "batchNumber":"945",
        "team":"kk经理",
        "clientName":"百度人工智能",
        "account":"ba001",
        "acceptNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:54.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"【7878】你的验证码是1FGHD" +
        "提交时间：2017-05-24 14:18:21.0    (共17个字)",
        "key":"2"

    },
    {
        "batchNumber":"945",
        "team":"kk经理",
        "clientName":"百度人工智能",
        "account":"ba001",
        "acceptNumber":"13903960056",
        "address":"河南",
        "aisle":" 千讯信通通道-测试654-免审",
        "sendState":"未知",
        "numberCharges":"1",
        "sendDate":"2017-05-24 14:18:54.0",
        "stateFeedbackTime":"213",
        "pushMessage":"未推送",
        "details":"【7878】你的验证码是1FGHD" +
        "提交时间：2017-05-24 14:18:21.0    (共17个字)",
        "key":"3"
    }
];
class DTable extends Component {
    render() {
        return (
            <Table
                columns={columns}
                dataSource={data}
                bordered
                expandedRowRender={record=><div><p>{"【7878】你的验证码是1FGHD"}</p><br/><p>{"提交时间：2017-05-24 14:18:21.0 (共17个字)"}</p></div>}
                defaultExpandAllRows={true}
            />
        );
    }
}

export {DTable};