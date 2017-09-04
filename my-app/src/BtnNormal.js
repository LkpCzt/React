import React,{Component} from 'react';

class BtnNormal extends Component {
	constructor(){
		super();
		this.normal = this.normal.bind(this);
	}
	normal(){
		this.props.btnnormal(this.props.item);
	};
    render() {
        
        return (
            <button className="btn-normal" onClick={this.normal}>
                        {this.props.item.title.toString()}
            </button>
        );
    }
}

export {BtnNormal};