// PopUpFollowUp 跟进记录弹窗
import React, {
    Component
} from 'react';
import {
    Icon
} from 'antd';
import PopUpFollowUpCell from './PopUpFollowUpCell';
import './PopUpFollowUp.css';
class PopUpFollowUp extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.popUp = this.popUp.bind(this);
    }
    popUp(e) {
        e.stopPropagation();
    }
    close() {
        let followUp = document.getElementById("PopUpFollowUp");
        if (followUp.className === 'PopUpFollowUp') {
            followUp.className = 'PopUpFollowUp ulHidden'
        }
    }
    render() {
        return (
            <div onClick={this.popUp} id="PopUpFollowUp" className="PopUpFollowUp ulHidden">
        <div onClick={this.close} className="close">
            <Icon type='close' className="closeIcon"/>
        </div>
        <div className="followUp-content">
          {
            this.props.recording.map(function(elem,index) {
              return <PopUpFollowUpCell key={index} data={elem} />;
            })
          }
        </div>
        <div className="box" id='triangle'></div>
      </div>
        );
    }
}

export default PopUpFollowUp;