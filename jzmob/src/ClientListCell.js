import React, { Component } from 'react';
import './ClientList.css';
class ClientListCell extends Component {
	constructor(){
		super();
	}
	componentDidMount(){
	}
  render() {
  	let data = this.props.data;
  	let a = 'tel:'+data.telephone;
    return (
			<li className='ClientListCell'>
				<div className="cellTop font15">
  				<span className="cellLeft">{data.cname}</span>
  				<span data-id={data.stage} className="cellRight font12">{data.stageValue}</span>
				</div>
				<div className="cellBottom font12">
					<span className="cellLeft"><a href={a}>{data.telephone}</a></span>
					<span className="cellRight">{data.bname}</span>
				</div>
			</li>
    );
  }
}

export default ClientListCell;
