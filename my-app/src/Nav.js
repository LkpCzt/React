import React, {Component} from 'react';
import './Nav.css'
class Nav extends Component {
    constructor(props) {
        super(props);
        this.handleAccount = this.handleAccount.bind(this);
    };
    handleAccount(e){
        var parent = e.currentTarget.parentElement;
        var lastElement = parent.lastChild;
        console.log(lastElement);
        if(lastElement.className === 'nav-right-menu-drop'){
            lastElement.className = 'nav-right-menu-drop dropDown';
        }else {
            lastElement.className = 'nav-right-menu-drop';
        }
    };
    render() {
        return (
            <div className="nav">
                <a className="logo" href="#">
                </a>
                    <div className="nav-right-menu">
                    <div className="nav-right-menu-top" onClick={this.handleAccount}>
                        <img src="http://192.168.1.52:60007/static/new/img/avatar-mid-img.png" alt="" className="message"/>
                        <div className="account">{this.props.info ? this.props.info.account.toString() : ''}<span className="caret"></span></div>
                    </div>
                    <ol className="nav-right-menu-drop">
                        <li>修改密码</li>
                        <li>退出</li>
                    </ol>
                </div>
            </div>
        );
    }
}

export {Nav};