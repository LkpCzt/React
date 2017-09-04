// PopUpFollowUpCell 探矿cell
import React, {
    Component
} from 'react';

class PopUpFollowUpCell extends Component {
    // constructor(props){
    //  super(props);
    // }
    render() {
        let data = this.props.data
        return (
            <div className="PopUpFollowUpCell">
        <div className="cellTop">
            <span>{data.createTime}</span>
            <span>{data.nickName}</span>
        </div>
        <div className="cellBottom">
            {data.content}
        </div>
      </div>
        );
    }
}

export default PopUpFollowUpCell;