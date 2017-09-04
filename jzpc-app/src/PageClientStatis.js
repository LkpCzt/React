// PageClientStatis 推广客户统计
import React, {
	Component
} from 'react';
import {
	Icon
} from 'antd';
import InputBox from './InputBox';
import InputBtn from './InputBtn';
import PopUpFollowUp from './PopUpFollowUp';
import {
	DatePicker
} from 'antd';
import {
	Table
} from 'antd';
import Request from './Request';
import './PageClientStatis.css';

const {
	RangePicker
} = DatePicker;
let startTime, endTime, source, clientName, phone = '';
let contentAction, currentX, currentY = '';
let isSearch = false;
class PageClientStatis extends Component {
	constructor() {
		super();
		let self = this;
		contentAction = (text, record) => (
			<span>
                        <button onClick={this.content.bind(self,{record})}>{text}</button>
                      </span>
		);
		this.search = this.search.bind(this);
		this.source = this.source.bind(this);
		this.onChange = this.onChange.bind(this);
		this.handleTableChange = this.handleTableChange.bind(this);
		this.request = this.request.bind(this);
		this.success = this.success.bind(this);
		this.fail = this.fail.bind(this);
		this.state = ({
			title: '推广客户统计',
			columns: [],
			data: [],
			recording: [],
			action: {
				"title": "操作",
				"key": "action",
				render: (text, record) => (
					<span>
	                        <button onClick={this.detail.bind(this,{record})}>详情</button>
	                      </span>
				)
			},
			createTime: '',
			source: '',
			pagination: {},
			loading: false

		})
	}
	onChange(date, dateString) {
		// console.log(date, dateString);
		startTime = dateString[0];
		endTime = dateString[1]
	}
	source(str) {
		source = str
	}
	clientName(str) {
		clientName = str;
	}
	phone(str) {
		phone = str;
	}
	search(str) {
		isSearch = true;
		let parms = '';
		let address = '';
		if (this.state.title === '推广客户统计') {
			parms = {
				startTime: startTime,
				endTime: endTime,
				source: source,
				pagenum: 1,
				pagesize: 10
			};
			address = 'fCustomerS/fCustomerSList.do';
		} else {
			parms = {
				date: this.state.createTime,
				source: this.state.source,
				cname: clientName,
				telephone: phone,
				pagenum: 1,
				pagesize: 10
			};
			address = 'fCustomerS/customerTgDeatil.do';
		}
		this.request(parms, address);
	}
	detail(obj, e) {
		// console.log(obj.record);
		isSearch = false;
		this.setState({
			title: '客户详情',
			columns: [],
			data: [],
			createTime: obj.record.createTime,
			source: obj.record.source
		});
		let parms = {
			date: obj.record.createTime,
			source: obj.record.source,
			pagenum: 1,
			pagesize: 10
		};
		this.request(parms, 'fCustomerS/customerTgDeatil.do');

	}
	back() {
		// console.log('返回');
		this.setState({
			title: '推广客户统计'
		});
		this.componentDidMount();
	}
	pageClientList() {
		let followUp = document.getElementById("PopUpFollowUp");
		if (followUp) {
			if (followUp.className === 'PopUpFollowUp') {
				followUp.className = 'PopUpFollowUp ulHidden'
			}
		}
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
		}, this.fail);
	}
	componentDidMount() {
		isSearch = false;
		let parms = {
			pagenum: 1,
			pagesize: 10
		};
		this.request(parms);
	}
	success(res) {
		// console.log(res);
		this.setState({
			loading: false
		});
		const pagination = {...this.state.pagination
		};
		// 设置总页数
		pagination.total = res.tableData.total;
		let header = res.tableData.header;
		if (this.state.title === '推广客户统计') {
			header.push(this.state.action);
		} else {
			header = formatHeader(res.tableData.header);
		}
		this.setState({
			columns: header,
			data: res.tableData.data,
			pagination,
		})
	}
	fail(err) {

	}
	handleTableChange(pagination) {
		// console.log(pagination);
		let params;
		if (isSearch) {
			let address = '';
			if (this.state.title === '推广客户统计') {
				params = {
					startTime: startTime,
					endTime: endTime,
					source: source,
					pagenum: pagination.current,
					pagesize: 10
				};
				address = 'fCustomerS/fCustomerSList.do';
			} else {
				params = {
					date: this.state.createTime,
					source: this.state.source,
					cname: clientName,
					telephone: phone,
					pagenum: pagination.current,
					pagesize: 10
				};
				address = 'fCustomerS/customerTgDeatil.do';
			}
			this.request(params, address);
		} else {
			if (this.state.title === '推广客户统计') {
				params = {
					pagenum: pagination.current,
					pagesize: 10
				};
				this.request(params);
			} else {
				params = {
					date: this.state.createTime,
					source: this.state.source,
					pagenum: pagination.current,
					pagesize: 10
				};
				this.request(params, 'fCustomerS/customerTgDeatil.do');
			}
		}
	}
	request(params, URL) {
		let request = new Request();
		URL = URL ? URL : 'fCustomerS/fCustomerSList.do';
		this.setState({
			loading: true
		});
		// console.log(params, URL);
		request.send(URL, 'POST', params, this.success, this.fail);
	}
	componentWillUnmount() {
		startTime = null;
		endTime = null;
		source = null;
		clientName = null;
		phone = null;
		contentAction = null;
		currentX = null;
		currentY = null;
		isSearch = null;
	}
	render() {
		return <div onClick={this.pageClientList.bind(this)} className="PageClientStatis">
	      	<div className="content-title">
	          <span className="title">{this.state.title}</span>
	          <span className="icon"><Icon type='rocket'/></span>
	          {
	          	this.state.title !== '推广客户统计' ? <span onClick={this.back.bind(this)} className="btn-back">返回</span> : ''
	          }
	          
	      	</div>
	      	<div className="content-main">
	      		<div className="search">
		      		{
		      			this.state.title === '推广客户统计' ? <span>
			      			<span className="search-title">时间：</span>
			      			<RangePicker onChange={this.onChange} />
			      			<InputBox change={this.source} data-title={'来源：'}/>
		      			</span>
		      			 : <span>
		      			 	<InputBox change={this.clientName.bind(this)} data-title={'客户名称：'}/>
		      				<InputBox change={this.phone.bind(this)} data-title={'联系电话：'}/>
		      			 </span>
		      			
		      		}
	      				

		           	<div className="rightBtn btnVCenter">
		              <InputBtn btnClick={this.search} data-data={{title:'筛选',className:'bgGreen'}}/>
		            </div>
		          </div>
		          <Table 
		          columns={this.state.columns}
		          dataSource={this.state.data}
		          pagination={this.state.pagination}
		          loading={this.state.loading}
		          onChange={this.handleTableChange}
		          />
	      	</div>
	      	{
	      		this.state.title !== '推广客户统计' ? <PopUpFollowUp recording={this.state.recording} /> : ''
	      	}
	      	
	    </div>
	}
}
export default PageClientStatis;

function formatHeader(header) {
	for (let i in header) {
		let obj = header[i];
		if (obj.title === '跟进记录') {
			obj = {
				"title": obj.title,
				"key": obj.key,
				"dataIndex": obj.dataIndex,
				render: contentAction
			}
			header[i] = obj;
		}
	}
	return header;
}