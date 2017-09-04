import React,{Component} from 'react';

class BtnReset extends Component {
	constructor(){
		super();
		this.reset = this.reset.bind(this);
	}
	reset(){
		this.props.btnreset();
	};
    render() {
        
        return (
            <button className="btn-reset" onClick={this.reset}>
                        重置
            </button>
        );
    }
}

export {BtnReset};