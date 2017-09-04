// InputList input列表
import React, {
    Component
} from 'react';

class InputList extends Component {
    constructor() {
        super();
        this.foucs = this.foucs.bind(this);
        this.blur = this.blur.bind(this);
        this.change = this.change.bind(this);
    }
    foucs(e) {
        e.target.className = 'inputBoxSelect';
    }
    blur(e) {
        e.target.className = '';
    }
    change(e) {
        if (this.props.change) {
            this.props.change(e.target.value)
        }
    }
    render() {
        var data = this.props['data-title'];
        return (
            <div className="InputList">
        <span>{data.title}</span>
        <input onChange={this.change} onFocus={this.foucs} onBlur={this.blur} type="text" list="cars"/>
        <datalist id="cars">
          {
            data.option.map(function(elem,index) {
              return <option key={index}>{elem.nickName}</option>;
            })
          }
        </datalist>
      </div>
        );
    }
}

export default InputList;