import React,{Component} from 'react';
import './InputSelector.css';

class InputBox extends Component {

    render() {
        const curItem = this.props.curItem;
        var options = curItem.options.map(function (subItem,index) {
            return(
                <option key={index} value={subItem}>{subItem}</option>
            );
        })
        return(
            <div className="input-selector">
                <span>{curItem.title.toString()}</span>
                <select name="" id={curItem.id.toString()}>
                    <option value="">请选择</option>
                    {options}
                </select>
            </div>
        );
    }
}

export {InputBox};