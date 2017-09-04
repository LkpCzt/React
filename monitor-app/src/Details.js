import React, { Component } from 'react';
import {WateCircle} from './WateCircle.js';
import {Partition} from './Partition.js';
import {CPU} from './CPU.js';
import {Process} from './Process.js';
import {Wdj} from './Wdj.js';
class Details extends Component {
  render() {
    return (
      	<div className="details normal">
      		<ul className="details-title">
      			<li><span></span>&nbsp;最新体验报告:&nbsp;</li>
      			<li><span></span>&nbsp;2项严重问题&nbsp;</li>
      			<li><span></span>&nbsp;2项一般问题</li>
      		</ul>
      		<div className="details-config">
      			<div className="details-config-left">
      				<div className="computer">
                <div className="computer-center">
                </div>
              </div>
      				<p>正常运行</p>
      				<p>123456789</p>
      			</div>
      			<div className="dividing-line">
      			</div>
      			<div className="details-config-right">
  				    <div>
  				        <span className="details-config-right-icon"></span>
  				        <p>实 例 :</p>
  				        <p>1核1G</p>
  				    </div>
  				    <div>
  				        <span className="details-config-right-icon"></span>
  				        <p>公网IP:</p>
  				        <p>120.76.126.93</p>
  				    </div>
  				    <div>
  				        <span className="details-config-right-icon"></span>
  				        <p>内网IP:</p>
  				        <p>120.76.126.93 
  				        <br/>固定带宽1Mbps</p>
  				    </div>
  				    <div>
  				        <span className="details-config-right-icon"></span>   
  				        <p>系统盘:</p>
  				        <p>普通云盘，40G</p>
  				    </div>
      			</div>
      		</div>
          <div className="deatail-content1">
            <WateCircle />
            <Partition />
          </div>
          <div className="deatail-content2">
            <CPU />
            <Process />
          </div>
          <div className="deatail-content3">
            <Wdj />
            <Wdj className="fr"/>
          </div>
      	</div>
    );
  }
}

export {Details};
