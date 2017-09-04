import React,{Component} from 'react';
import './InputBox.css';
// var item = {
//     'type':'input',
//     'key':'batch-number',
//     "title":"批次编号：",
//     "placeholder":"请输入批次编号",
//     "id":"batchNumber"
// };
class InputBox extends Component {

    render() {
        const curItem = this.props.curItem;
        return(
            <div className="input-box">
                <span>{curItem.title.toString()}</span>
                <input type="text"  placeholder={curItem.placeholder.toString()} id={curItem.id.toString()}/>
            </div>
        );
    }
}

export {InputBox};