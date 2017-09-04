// PopUpUpload 上传弹窗
import React, { Component } from 'react';
import { Icon } from 'antd';
import './PopUpUpload.css';
class PopUpUpload extends Component {
	constructor(){
		super();
		this.state = ({
			data: ''
		});
	}
	close(){
		if (this.props.closeCover) {
			this.props.closeCover();
		}
	}
	confirm(){
		this.close();
	}
	componentDidMount(){
	}
	// ulHidden
	render(){
		let data = this.props.uploadResult;
		let str = '';
		if (data === '' || data === '1') {
			if (data === '') {
				str = '正在上传';
			}else {
				str = '上传失败';
			}
		}else{
			let duplicate = data.duplicate;
			for (let i in duplicate) {
				str = str + duplicate[i] + ','
			}
			let invalid = data.invalid;
			for (let i in invalid) {
				str = str + invalid[i] + ','
			}
		}
	    return <div id="PopUpUpload" className="PopUpUpload ulHidden">
	    	<div onClick={this.close.bind(this)} className="close">
            	<Icon type='close' className="closeIcon"/>
      		</div>
      		{
      			data === '' || data === '1' ? <div className='message'>
      			<p>{str}......</p>
      		</div> : <div className='message'>
      			<p>成功导入客户<span>{data.successNumber}</span>个</p>
      			<p>导入失败客户号码</p>
      			<p>{
      				str
      			}</p>
      		</div>
      		}
      		
      		<input onClick={this.confirm.bind(this)} type="button" value="确认"/>
	    </div>
	}
}
export default PopUpUpload;
