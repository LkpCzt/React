// PageClientList 客户列表
import React, {
    Component
} from 'react';
import InputBox from './InputBox';
import InputList from './InputList';
import InputBtn from './InputBtn';
import PopUpAddClient from './PopUpAddClient';
import PopUpGJ from './PopUpGJ';
import PopUpModifyFollowers from './PopUpModifyFollowers';
import PopUpFollowUp from './PopUpFollowUp';
import Request from './Request';
import Tools from './Tools';
import PopUpCover from './PopUpCover';
import PopUpUpload from './PopUpUpload';
import {
    Table
} from 'antd';
import {
    Icon
} from 'antd';
import {
    Upload,
    message,
    Button
} from 'antd';

let oldElement = '';
let cName, phone, people, currentIndex, ids = '';
let currentX, currentY = '';
let tool = new Tools();
let isSearch = false;
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        ids = '';
        for (let index in selectedRows) {
            let elme = selectedRows[index]
            ids += elme.cid + ','
        }
        ids = ids.substring(0, ids.length - 1)
    },
    onSelect: (record, selected, selectedRows) => {},
    onSelectAll: (selected, selectedRows, changeRows) => {},
};

class PageClientList extends Component {
    constructor() {
        super();
        this.click = this.click.bind(this);
        this.search = this.search.bind(this);
        this.myExport = this.myExport.bind(this);
        this.add = this.add.bind(this);
        this.update = this.update.bind(this);
        this.success = this.success.bind(this);
        this.fail = this.fail.bind(this);
        this.cName = this.cName.bind(this);
        this.phone = this.phone.bind(this);
        this.people = this.people.bind(this);
        this.isSuccess = this.isSuccess.bind(this);
        this.currentClient = this.currentClient.bind(this);
        this.pageClientList = this.pageClientList.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.request = this.request.bind(this);
        let temp = [{
                nickName: tool.getCookie('nickName'),
                id: tool.getCookie('id')
            }]
            // console.log(temp)
        this.state = ({
            columns: [],
            data: [],
            loading:false,
            pagination:{current:1},
            user: temp,
            action: {
                "title": "操作",
                "key": "action",
                render: (text, record) => (
                    <span>
                        <button onClick={this.edit.bind(this,{record})}>编辑</button>
                        <span className="ant-divider" />
                        <button onClick={this.GJ.bind(this,{record})}>跟进</button>
                        <span className="ant-divider" />
                        <button onClick={this.release.bind(this,{record})}>释放</button>
                      </span>
                )
            },
            currentEdit: '',
            recording: [],
            total: 0,
            stage0: 0,
            stage1: 0,
            stage2: 0,
            ids: '',
            uploadResult: ''

        })
    }
    pageClientList() {
        let followUp = document.getElementById("PopUpFollowUp");
        if (followUp.className === 'PopUpFollowUp') {
            followUp.className = 'PopUpFollowUp ulHidden'
        }
    }
    click(e) {
        isSearch = false;
        if (oldElement) {
            oldElement.className = '';
        }
        var element = e.target;
        element.className = 'PageClientList-liselect';
        oldElement = element;
        let index = element.getAttribute('data-index');
        let params = ''
        if (index !== null) {
            params = {
                stage: index,
                pagenum: 1,
                pagesize:10
            };
            currentIndex = index;
        } else {
            params = {
                pagenum:1,
                pagesize:10
            };
            currentIndex = '';
        }
        let request = new Request();

        request.send('customer/customerList.do', 'POST', params, this.success, this.fail);
    }
    cName(str) {
        cName = str;
    }
    phone(str) {
        phone = str;
    }
    people(str) {
        people = str;
    }
    search() {
        isSearch = true;
        let params = {
            cname: cName,
            telephone: phone,
            bname: people,
            stage: currentIndex,
            pagenum: 1,
            pagesize:10
        };
        this.request(params)
    }
    myExport() {
        let str = 'cname=' + cName + "&telephone=" + phone + "&bname=" + people + "&stage=" + currentIndex + '&ids=' + ids
        str = "http://192.168.1.41:8080/customer/exportData.do?" + str
            // console.log(str)
        window.open(str)
    }
    add() {
        // console.log('新增用户');
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpAddClient');
        this.setState({
            currentEdit: ''
        })
    }
    update() {
        // console.log('修改');
        this.setState({
            ids: ids
        });
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpModifyFollowers');
    }
    edit(obj) {
        let self = this;
        // console.log(obj.record);
        let request = new Request();
        let params = {
            "cid": obj.record.cid
        };
        request.send('customer/queryByCid.do', 'POST', params, function(res) {
            if (res.response.retCode === '000000') {
                self.add()
                self.setState({
                    currentEdit: res.response.data.data
                })
            }
        }, function(err) {
            // console.log(err);
        });
    }
    GJ(obj) {
        // console.log('GJ')
        tool.openPopUp('PopUpCover');
        tool.openPopUp('PopUpGJ');
        this.setState({
            currentEdit: obj.record
        })
    }
    release(obj) {
            let self = this;
            let request = new Request();
            let params = {
                "cid": obj.record.cid
            };
            request.send('customer/release.do', 'POST', params, function(res) {
                if (res.retCode === '000000') {
                    self.isSuccess()
                }
            }, function(err) {
                // console.log(err)
            });
        }
        // 查看跟进记录
    content(obj, e) {
        let self = this;
        let record = obj.record;
        currentX = e.clientX + 12;
        currentY = e.clientY;

        let request = new Request();
        let params = {
            "cid": record.cid
        };
        request.send('followRecord/ghCustomerList.do', 'POST', params, self.currentClient, self.fail);
    }
    currentClient(res) {
        // console.log(res);
        let triangle = document.getElementById('triangle');

        let followUp = document.getElementById("PopUpFollowUp");
        if (followUp.className === 'PopUpFollowUp ulHidden') {
            followUp.className = 'PopUpFollowUp'
        }
        let data = res.tableData;
        this.setState({
            recording: data
        })
        let scrrenHeight = document.body.clientHeight;
        if (currentY + 380 < scrrenHeight) {
            let temp = currentY - 12;
            followUp.style = 'top:' + temp + 'px;' + 'left:' + currentX + 'px';
            triangle.style = 'top:' + 9 + 'px;'
        } else {
            let temp = scrrenHeight - 380;
            followUp.style = 'top:' + temp + 'px;' + 'left:' + currentX + 'px';
            triangle.style = 'top:' + (currentY - temp - 9) + 'px;';
        }
    }
    componentDidMount() {
        isSearch = false;
        oldElement = document.getElementById('firstLi');
        let params = {
            pagenum:1,
            pagesize:10
        };
        this.request(params);
    }
    isSuccess() {
        let params='';
        if (isSearch) {
            params = {
                cname: cName,
                telephone: phone,
                bname: people,
                stage: currentIndex,
                pagenum: this.state.pagination.current,
                pagesize:10
            };
        }else {
            params = {
                stage:currentIndex,
                pagenum:this.state.pagination.current,
                pagesize:10
            };
        }
        this.request(params);
        this.closeCover();
    }
    success(res) {
        // console.log(res);
        const pagination = { ...this.state.pagination };
        // 设置总页数
        pagination.total = res.total;
        let self = this;
        let header = res.tableData.header;
        for (let i in header) {
            let obj = header[i];
            if (obj.title === '跟进记录') {
                obj = {
                    "title": obj.title,
                    "key": obj.key,
                    "dataIndex": obj.dataIndex,
                    width:'25%',
                    render: (text, record) => (
                        <span>
                        <button className='tdLimit1' onClick={self.content.bind(self,{record})}>{text}</button>
                      </span>
                    )
                }
                header[i] = obj;
            }
        }
        header = formatHeader(header);
        // console.log(header);
        header.push(this.state.action);
        if (res.tableData.user.length === 0) {
            res.tableData.user = [{
                nickName: tool.getCookie('nickName'),
                id: tool.getCookie('id')
            }]
        }
        this.setState({
            columns: header,
            data: res.tableData.data,
            user: res.tableData.user,
            loading:false,
            pagination,
        })
        if (res.stage0) {
            this.setState({
                total: res.stageTotal,
                stage0: res.stage0,
                stage1: res.stage1,
                stage2: res.stage2
            })
        }
    }
    fail(err) {

    }
    closeCover() {
        tool.closePopUp('PopUpUpload', 'ulHidden');
        tool.closePopUp('PopUpCover', 'ulHidden');
        if (tool.getCookie('role') === '2') {
            tool.closePopUp('PopUpModifyFollowers', 'ulHidden');
        }
        tool.closePopUp('PopUpAddClient', 'ulHidden');
        tool.closePopUp('PopUpGJ', 'ulHidden');
        this.setState({uploadResult:''});
    }
    handleTableChange(pagination){
        this.setState({pagination,});
        let params = {};
        if (isSearch) {
            params = {
                cname: cName,
                telephone: phone,
                bname: people,
                stage: currentIndex,
                pagenum: pagination.current,
                pagesize:10
            };
        }else {
            params = {
                stage: currentIndex,
                pagenum:pagination.current,
                pagesize:10
            };
        }
        this.request(params);
    }
    request(params,URL){
        URL = URL ? URL : 'customer/customerList.do';
        this.setState({loading:true});
        let request = new Request();
        request.send(URL, 'POST', params, this.success, this.fail);
    }
    componentWillUnmount(){
        oldElement = null;
        cName = null;
        phone = null;
        people = null;
        currentIndex = null;
        ids = null;
        currentX = null;
        currentY = null;
        // tool = null;
        isSearch = null;
    }
    render() {
        let isExport = ''
        if (tool.getCookie('role') === '1') {
            isExport = <InputBtn btnClick={this.myExport} data-data={{title:'导出'}}/>
        }
        let self = this;
        const props = {
            name: 'uploadFile',
            action: 'http://192.168.1.41:8080/customer/fileUpload.do',
            withCredentials: true,
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    // console.log(info.file, info.fileList);
                    // console.log(info.file.response);
                    let data = info.fileList[info.fileList.length - 1];
                    let res = data.response;
                    if (res.retCode === '000000') {
                        self.setState({
                            uploadResult: res.data
                        })
                    }else{
                        self.setState({
                            uploadResult: '1'
                        })
                    }
                } else {
                    tool.openPopUp('PopUpCover');
                    tool.openPopUp('PopUpUpload');
                }
                if (info.file.status === 'done') {
                    // message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    // message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div onClick={this.pageClientList} id="PageClientList" className="PageClientList">
                <div className="content-title">
                    <span className="title">客户列表</span>
                    <span className="icon"><Icon type='solution'/></span>
                </div>
                <div className="content-main">
                    <ul>
                        <li id="firstLi" onClick={this.click} className="PageClientList-liselect">全部{'('+this.state.total+')'}</li>
                        <li onClick={this.click} data-index={0}>沟通{'('+this.state.stage0+')'}</li>
                        <li onClick={this.click} data-index={1}>意向{'('+this.state.stage1+')'}</li>
                        <li onClick={this.click} data-index={2}>成交{'('+this.state.stage2+')'}</li>
                    </ul>
                    <div className="search">
                        <InputBox change={this.cName} data-title={'客户名称：'}/>
                        <InputBox change={this.phone} data-title={'联系电话：'}/>
                        <InputList change={this.people} data-title={{title:'跟进人：',option:this.state.user}}/>
                        <div className="rightBtn btnVCenter">
                            <InputBtn btnClick={this.search} data-data={{title:'查找',className:'bgGreen'}}/>
                            {isExport}
                        </div>
                    </div>
                    <div className="search">
                        <div className="btnVCenter">
                            <InputBtn btnClick={this.add} data-data={{title:'新增客户',className:'lineGreen'}}/>
                            <Upload {...props}>
                                <Button>
                                    批量导入
                                </Button>
                            </Upload>
                            {
                              tool.getCookie('role') === '2' ? <InputBtn btnClick={this.update} data-data={{title:'修改跟进人',className:'lineGreen'}}/> : '' 
                            }
                  
                        </div>
                    </div>
                    <Table 
                        rowSelection={rowSelection} 
                        columns={this.state.columns} 
                        dataSource={this.state.data} 
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                    />
                </div>
        
                <PopUpFollowUp 
                recording={this.state.recording} 
                />
                <PopUpCover 
                closeCover={this.closeCover.bind(this)} 
                />
                <PopUpGJ
                closeCover={this.closeCover.bind(this)} 
                isSuccess={this.isSuccess} 
                gjr={this.state.user} 
                defaule={this.state.currentEdit}
                />
                <PopUpAddClient
                closeCover={this.closeCover.bind(this)}
                isSuccess={this.isSuccess}
                gjr={this.state.user}
                defaule={this.state.currentEdit}
                />
                {
                    tool.getCookie('role') === '2' ? <PopUpModifyFollowers 
                    closeCover={this.closeCover.bind(this)} 
                    gjr={this.state.user} 
                    ids={this.state.ids} 
                    isSuccess={this.isSuccess}
                    /> : ''
                }
                
                <PopUpUpload 
                closeCover={this.closeCover.bind(this)}
                uploadResult={this.state.uploadResult}
                />
            </div>
        );
    }
}
export default PageClientList;

function formatHeader(header) {
    for (let i in header) {
      let obj = header[i];
      if (obj.title === '备注') {
        obj = {
          title:obj.title,
          key:obj.key,
          dataIndex:obj.dataIndex,
          width:'12.5%',
          render: (text) => <span className="tdLimit">{text}</span>
        }
        header[i] = obj;
      }
    }
    return header;
}