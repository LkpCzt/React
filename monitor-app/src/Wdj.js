import React, { Component } from 'react';

class Wdj extends Component {
  render() {
    return (
     	<div className="d-in-block wdjzj">
            <div className="d-in-block">
                <div className="wdjz">
                    <p className="wdj-title p-center">入站</p>
                    <div className="wdj rotate">
                        <div className="wdj-bg"></div>
                        <div className="wdj-top"></div>
                        <div className="wdj-bottom"></div>
                    </div>
                    <p className="wdj-bt p-center">0.24Kbps</p>
                </div>
                <div className="wdjz">
                    <p className="wdj-title p-center">入站</p>
                    <div className="wdj">
                        <div className="wdj-bg"></div>
                        <div className="wdj-top"></div>
                        <div className="wdj-bottom"></div>
                    </div>
                    <p className="wdj-bt p-center">0.24Kbps</p>
                </div>
            </div>
            <p className="p-center colorb44472">公网:120.76.126.93</p>
        </div>
    );
  }
}

export {Wdj};
