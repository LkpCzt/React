// PageClient 公海客户
import React, {
    Component
} from 'react';
import InputBox from './InputBox';
import InputBtn from './InputBtn';
import Request from './Request';
import Tools from './Tools';
import PopUpFollowUp from './PopUpFollowUp';
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

let ids = '';
let currentX, currentY = '';
const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        ids = '';
        for (let index in selectedRows) {
            let elme = selectedRows[index]
            ids += elme.cid + ','
        }
        ids = ids.substring(0, ids.length - 1)
    },
    onSelect: (record, selected, selectedRows) => {
        // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
        // console.log(selected, selectedRows, changeRows);
    },
};

let clientName = '';
let phone = '';
class PageClient extends Component {
    constructor() {
        super();
        this.search = this.search.bind(this);
        this.clientName = this.clientName.bind(this);
        this.phone = this.phone.bind(this);
        this.add = this.add.bind(this);
        this.myImports = this.myImports.bind(this);
        this.success = this.success.bind(this);
        this.fail = this.fail.bind(this);
        this.handleTableChange = this.handleTableChange.bind(this);
        this.request = this.request.bind(this);

        this.state = ({
            columns: [],
            data: [],
            recording: [],
            uploadResult: '',
            pagination: {},
            loading: false
        })
    }
    clientName(str) {
        clientName = str;
    }
    phone(str) {
        phone = str;
    }
    search() {
        let params = {
            cname: clientName,
            telephone: phone,
            pagenum: 1,
            pagesize: 10
        };
        this.request(params)
    }
    add() {
        // console.log(ids);
        let self = this;
        let request = new Request();
        let params = {
            ids: ids
        };
        request.send('customer/addStage0List.do', 'POST', params, function(res) {
            // console.log(res)
            if (res.retCode === '000000') {
                self.componentDidMount();
            } else if (res.retCode === '000001') {
                alert(res.retMsg);
            }
        }, function(err) {
            // console.log(err)
        });
    }
    myImports() {
        // console.log('批量导入');
    }
    success(res) {
        // console.log(res);
        this.setState({loading:false});
        const pagination = {...this.state.pagination
        };
        // 设置总页数
        pagination.total = res.tableData.total;
        let self = this;
        let header = res.tableData.header;
        for (let i in header) {
            let obj = header[i];
            if (obj.title === '跟进记录') {
                obj = {
                    "title": obj.title,
                    "key": obj.key,
                    "dataIndex": obj.dataIndex,
                    render: (text, record) => (
                        <span>
                        <button onClick={this.content.bind(self,{record})}>{text}</button>
                      </span>
                    )
                }
                header[i] = obj;
            }
        }
        this.setState({
            columns: header,
            data: res.tableData.data,
            pagination,
        })
    }
    fail(fail) {

    }
    content(obj, e) {
        let self = this;
        let record = obj.record;
        currentX = e.clientX + 12;
        currentY = e.clientY;

        let request = new Request();
        let params = {
            "cid": record.cid
        };
        request.send('followRecord/ghCustomerList.do', 'POST', params, function(res) {
            let triangle = document.getElementById('triangle');

            let followUp = document.getElementById("PopUpFollowUp");
            if (followUp.className === 'PopUpFollowUp ulHidden') {
                followUp.className = 'PopUpFollowUp'
            }
            let data = res.tableData;
            self.setState({
                recording: data
            })
            let scrrenHeight = document.body.clientHeight;
            if (currentY + 380 < scrrenHeight) {
                followUp.style = 'top:' + (currentY - 12) + 'px;' + 'left:' + currentX + 'px';
                triangle.style = 'top:' + 9 + 'px;'
            } else {
                let temp = scrrenHeight - 380;
                followUp.style = 'top:' + temp + 'px;' + 'left:' + currentX + 'px';
                triangle.style = 'top:' + (currentY - temp - 9) + 'px;'
            }
        }, function(err) {

        });
    }
    pageClientList() {
        let followUp = document.getElementById("PopUpFollowUp");
        if (followUp.className === 'PopUpFollowUp') {
            followUp.className = 'PopUpFollowUp ulHidden'
        }

    }
    componentWillUnmount(){
        ids = null;
        currentX = null;
        currentY = null;
        clientName = null;
        phone = null;
    }
    componentDidMount() {
        let params = {
            pagenum: 1,
            pagesize: 10
        };
        this.request(params);
    }
    closeCover() {
        closePopUp('PopUpUpload');
        closePopUp('PopUpCover');
        this.setState({
            uploadResult:''
        })
    }
    handleTableChange(pagination) {
        // console.log(pagination);
        let params = {
            pagenum: pagination.current,
            pagesize: 10
        };
        this.request(params);
    }
    request(params,URL){
        URL = URL ? URL : 'customer/GhcustomerList.do';
        let request = new Request();
        this.setState({
            loading: true
        });
        // console.log(params);
        request.send(URL, 'POST', params, this.success, this.fail);
    }
    render() {
        let self = this;
        const props = {
            name: 'uploadFile',
            action: 'http://192.168.1.41:8080/customer/fileUpload.do',
            data:{
                temp:1
            },
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
                    }else {
                        self.setState({
                            uploadResult:'1'
                        })
                    }
                } else {
                    displayCover('PopUpUpload');
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        let tool = new Tools();
        return (
            <div onClick={this.pageClientList.bind(this)} className="PageClient">
        <div className="content-title">
          <span className="title">公海客户</span>
          <span className="icon"><Icon type='user'/></span>
        </div>
        <div className="content-main">
          <div className="search">
            <InputBox change={this.clientName} data-title={'客户名称：'}/>
            <InputBox change={this.phone} data-title={'联系电话：'}/>
            <div className="rightBtn btnVCenter">
              <InputBtn btnClick={this.search} data-data={{title:'查找',className:'bgGreen'}}/>
            </div>
          </div>
          {/**/}
            <div className="search">
              <div className="btnVCenter">
                {
                  tool.getCookie('role') === '3' ? <InputBtn btnClick={this.add} data-data={{title:'加入沟通列表',className:'lineGreen'}}/> : ''
                }
                <Upload {...props}>
                  <Button>
                    批量导入
                  </Button>
                </Upload>
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
        <PopUpFollowUp recording={this.state.recording} />
        <PopUpCover closeCover={this.closeCover.bind(this)} />
        <PopUpUpload closeCover={this.closeCover.bind(this)} uploadResult={this.state.uploadResult}/>
      </div>
        );
    }
}

export default PageClient;

function displayCover(id) {
    let cover = document.getElementById('PopUpCover');
    cover.className = 'PopUpCover';
    openPopUp(id);
}

function closePopUp(id) {
    let closeUpload = document.getElementById(id);
    closeUpload.className = id + ' ulHidden';
}

function openPopUp(id) {
    let closeUpload = document.getElementById(id);
    closeUpload.className = id;
}