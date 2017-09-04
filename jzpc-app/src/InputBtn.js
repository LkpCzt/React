// InputBtn input按钮
import React, {
    Component
} from 'react';

class InputBtn extends Component {
    constructor() {
        super();
        this.foucs = this.foucs.bind(this);
        this.blur = this.blur.bind(this);
        this.click = this.click.bind(this);
        this.mousedown = this.mousedown.bind(this);
        this.mouseup = this.mouseup.bind(this);
        this.mouseleave = this.mouseleave.bind(this);
    }
    foucs(e) {
        e.target.className = 'inputBoxSelect';
    }
    blur(e) {
        e.target.className = '';
    }
    click() {
        if (this.props.hasOwnProperty('btnClick')) {
            this.props.btnClick();
        }
    }
    mousedown() {
        // console.log('鼠标摁下');
    }
    mouseup() {
        // console.log('鼠标松开');
    }
    mouseleave() {
        // console.log('鼠标移出元素');
    }
    render() {
        var data = this.props['data-data'];
        return (
            <div className="InputBtn">
        <input 
        onClick={this.click}
        onMouseDown={this.mousedown}
        onMouseUp={this.mouseup}
        onMouseLeave={this.mouseleave}
        type="button" value={data.title}
        className={data.className}
        />
      </div>
        );
    }
}

export default InputBtn;