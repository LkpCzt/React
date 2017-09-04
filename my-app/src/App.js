import React,{Component} from 'react';
import {Nav} from './Nav';
import {MainMenu} from './MainMenu';
import {Content} from './Content';
import Request from './Request';

class App extends Component {
    constructor() {
        super();
        this.changeItem = this.changeItem.bind(this);
        this.state={
            curItem:'首页'
        }
    };

    //MainMenu 组件点击item回调
    changeItem(item){
        this.setState({curItem:item});
    };
    componentWillMount(){
        console.log('APP');
        var mySelf = this;
        let request = new Request();
        let params = {
            account: "admin@qq.com",
            password: "654321"
        };

        request.send('/sms-platform/services/aip/V1/LoginService/login','POST',{},()=>this.succsee(),()=>this.fail());
    }
    success(res) {
        this.setState({
            "mainmenu":response.data.mainmenu,
            "info":response.data.info
        })
    }
    fail(err) {
        console.log(err);
    }
    render() {
        
        return(
            <div className="app">
                <Nav info={this.state.info}/>
                <MainMenu changeItem={this.changeItem} data={this.state.mainmenu}/>
                <Content curItem={this.state.curItem} />
            </div>
        );
    }
}

export {App};
