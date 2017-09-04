/**
 * Created by lkp on 2017/5/26.
 */
import {React,Component} from 'react';
import {InputBox} from '../../InputBox';
import {InputSelector} from '../../InputSelector';
import {DatePicker} from 'antd';
import {Table} from 'antd';
import {BtnSearch}  from '../../BtnSearch';
import {BtnReset}  from '../../BtnReset';
import {BtnNormal} from '../../BtnNormal';
const {RangePicker} = DatePicker;
function onChange(date, dateString) {
    searchCondition.dateString = dateString;
}
var response = {
    "code":200,
    "msg":"",
    "data":{
        "title":"短信审核",
        "description":"查看短信审核相关的信息，点击导出可导出任务发送号码并审核当前消息等操作。",
        "searchData":[
            {
                "type":"btnNormal",
                "key":"btn-normal",
                "title":"批量审核",
            },
            {
                "type":"input",
                "key":"batch-number",
                "title":"批次编号：",
                "placeholder":"请输入批次编号",
                "id":"batchNumber"
            },
            {
                "type":"select",
                "key":"review-state",
                "title":"审核状态：",
                "id":"reviewState",
                "options":[
                    "自动通过","人工通过","人工拒绝","中止审核"
                ]
            },
            {
                "type":"input",
                "key":"send-content",
                "title":"发送内容：",
                "placeholder":"请输入号码",
                "id":"sendContent"
            },
            {
                "type":"input",
                "key":"proxy-account",
                "title":"代理账号：",
                "placeholder":"请输入账号",
                "id":"proxyAccount"
            },
            {
                "type":"datePicker",
                "key":"submit-time",
                "title":"提交时间："
            },
            {
                "type":"btnReset",
                "key":"btn-reset"
            },
            {
                "type":"btnSearch",
                "key":"btn-search"
            }
        ],
        "tableData":{
            "header":{
                "data":[
                    {
                        "title":"批次编号",
                        "dataIndex":"batchNumber",
                        "isSorter":true
                    },
                    {
                        "title":"团队",
                        "dataIndex":"team",
                        "isSorter":true
                    },
                    {
                        "title":"客户名称",
                        "dataIndex":"clientName",
                        "isSorter":true
                    },
                    {
                        "title":"账户",
                        "dataIndex":"account",
                        "isSorter":true
                    },
                    {
                        "title":"通道组",
                        "dataIndex":"channelGroup",
                        "isSorter":true
                    },
                    {
                        "title":"发送类型",
                        "dataIndex":"sendType",
                        "isSorter":true
                    },
                    {
                        "title":"发送量",
                        "dataIndex":"sendVolume",
                        "isSorter":true
                    },
                    {
                        "title":"计费量",
                        "dataIndex":"chargeVolume",
                        "isSorter":true
                    },
                    {
                        "title":"审核状态",
                        "dataIndex":"reviewState",
                        "isSorter":true
                    },
                    {
                        "title":"错误\\黑名单",
                        "dataIndex":"errorBlacklist",
                        "isSorter":true
                    },
                    {
                        "title":"审核时间",
                        "dataIndex":"reviewDate",
                        "isSorter":true
                    }
                ],
                "operation":{
                    "title":"操作"
                }
            },
            "data":[
                {
                    "batchNumber":"1",
                    "team":"abc",
                    "clientName":"客户名称",
                    "account":"账户",
                    "channelGroup":"通道组",
                    "sendType":"发送类型",
                    "sendVolume":"发送量",
                    "chargeVolume":"计费量",
                    "reviewState":"审核状态",
                    "errorBlacklist":"错误\\黑名单",
                    "reviewDate":"审核时间",
                    "content":"内容1",
                    "submitDate":"提交时间1",
                    "key":"1"
                },
                {
                    "batchNumber":"2",
                    "team":"adc",
                    "clientName":"客户名称",
                    "account":"账户",
                    "channelGroup":"通道组",
                    "sendType":"发送类型",
                    "sendVolume":"发送量",
                    "chargeVolume":"计费量",
                    "reviewState":"审核状态",
                    "errorBlacklist":"错误\\黑名单",
                    "reviewDate":"审核时间",
                    "content":"内容2",
                    "submitDate":"提交时间2",
                    "key":"2"
                }
            ],
            "isExpandedRow":true,
            "isRowSelection":true
        }
    }
}
// rowSelection objects indicates the need for row selection
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
    },
};
const searchCondition = {};
const searchIDs = [];
class SMSReview extends Component {
    constructor(){
        super();
    }
    btnsearch(){
        if (searchIDs.length === 0) {
            response.data.searchData.map(function(item){
                if (item.id !== undefined) {
                    searchIDs.push(item.id);
                }
            })
        }
        searchIDs.map(function(item) {
            searchCondition[item] = document.getElementById(item).value;
        })

        console.log(searchCondition);
    }
    btnreset(){
        if (searchIDs.length === 0) {
            response.data.searchData.map(function(item){
                if (item.id !== undefined) {
                    searchIDs.push(item.id);
                }
            })
        }

        searchIDs.map(function(item) {
            document.getElementById(item).value = '';
            searchCondition[item] = '';
        })
        console.log(searchCondition);
    }
    btnnormal(parame){
        // 根据model显示不同的弹窗界面
        var str = "alert('"+parame.title+"')";
        str = eval(str);
        str;
    }
    expandedRowFun(record){
        if (response.data.tableData.isExpandedRow) {
            return <div><p>{record.content}</p><br/><p>{record.submitDate}</p></div>
        }
    }
    rowSelectionFun(){
        console.log('123');
        return new Object();
    }
    render() {
        // 设置搜索模块
        var search = response.data.searchData.map(function (item, index) {
            if (item.type === 'input'){
                return <InputBox key={item.key} curItem={item}/>
            }else if(item.type === 'select'){
                return <InputSelector key={item.key} curItem={item}/>
            }else if(item.type === 'datePicker') {
                return <div style={{display: 'inline-block',padding:'10px'}} key={item.key}>
                    <span>{item.title}</span>
                    <RangePicker onChange={onChange}/>
                </div>
            }else if(item.type === 'btnReset'){
                return <BtnReset key={item.key} btnreset={this.btnreset} />
            }else if(item.type === 'btnSearch'){
                return <BtnSearch key={item.key} btnsearch={this.btnsearch} />
            }else if(item.type === 'btnNormal'){
                return <BtnNormal key={item.key} item={item} btnnormal={this.btnnormal}/>
            }
        },this);
        // 设置table header
        var columns = response.data.tableData.header.data.map(function(item, index) {
            var dictionary = {
                title:item.title,
                dataIndex:item.dataIndex
            }
            if (item.isSorter) {
                // 动态生成比较函数
                var str = "(a, b) => b."+ item.dataIndex + ".localeCompare(a." + item.dataIndex + ")";
                // 将字符串转换为函数
                str = eval(str);
                dictionary.sorter = str;
            }
            return dictionary;
        },this);
        // 判断是否有操作
        if (response.data.tableData.header.operation) {

            var dictionary = {
                title:response.data.tableData.header.operation.title
            };
            dictionary.render = (record) => (
                <span className={'table-operation'}>
                    <a href="#">{record.team}</a>&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#">{record.batchNumber}</a>
                </span>
            );
            columns.push(dictionary);
        }
        // 判断是否显示多选框
        var rowSelectiontemp = null;
        if (response.data.tableData.isRowSelection) {
            rowSelectiontemp = rowSelection;
        }
        
        return(
            <div className="SMSReply">
                <div className="title-package">
                    <div className="content-title">
                        {response.data.title}
                    </div>
                    <div className="title-remark">
                        {response.data.description}
                    </div>
                    <hr/>
                </div>
                <div className="condition">
                    {search}
                </div>
                <Table 
                columns={columns} 
                dataSource={response.data.tableData.data} 
                bordered
                expandedRowRender={this.expandedRowFun} 
                defaultExpandAllRows={response.data.tableData.isExpandedRow}
                rowSelection={rowSelectiontemp}
                />
            </div>
        );
    }
}

export {SMSReview} ;