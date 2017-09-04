// InputBox input输入框
import React, {
    Component
} from 'react';

class InputBox extends Component {
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
        return (
            <div className="InputBox">
        <span>{this.props['data-title']}</span>
        <input onFocus={this.foucs} onBlur={this.blur} onChange={this.change} type="text"/>
      </div>
        );
    }
}

export default InputBox;