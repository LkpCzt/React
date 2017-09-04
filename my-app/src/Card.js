import React,{Component} from 'react';
import './Card.css';
class Card extends Component {

    render() {
        var item = this.props.source;
        return(
            <div className="card">
                <img src={item.icon} alt=""/>
                <div className="card-aside">
                    <p><strong style={{color:item.color}}>{item.num}</strong>&nbsp;{item.unit}</p>
                    <p className="card-description">{item.description}</p>
                </div>
            </div>
        );
    }
}

export {Card};