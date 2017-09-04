import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import './MainMenu.css';

var currentSelectorItem;
var currentSeletorSubItem;

class MainMenu extends Component {z
    //初始化以及方法绑定
    constructor(props) {
        super(props);
        this.handleItemClick = this.handleItemClick.bind(this);
        this.handleSubItemClick = this.handleSubItemClick.bind(this);
        this.handleHome = this.handleHome.bind(this);
};
    //点击首页按钮
    handleHome(){
        if(currentSeletorSubItem){
            currentSeletorSubItem.className = 'sub-item';
        }
        //回调函数，将点击结果回调给父组件
        this.props.changeItem("首页");

    };
    //点击item 控制subItem是否展开
    handleItemClick(e){

        var parent = e.currentTarget.parentElement;
        var lastElement = parent.lastChild;
        if(currentSelectorItem && currentSelectorItem !== lastElement){
            currentSelectorItem.className = 'sub-items';
        }
        if(lastElement.className === 'sub-items'){
            lastElement.className = 'sub-items hidden';
        }else{
            lastElement.className = 'sub-items'
        }
        currentSelectorItem = lastElement;
    };
    //点击subItem 选择不同栏目
    handleSubItemClick(e){
        var currentSelector;
        if(currentSeletorSubItem){
            currentSelector = currentSeletorSubItem;
            currentSelector.className = "sub-item";
        }
        currentSeletorSubItem = e.currentTarget;
        currentSelector = currentSeletorSubItem;
        currentSelector.className = "sub-item sub-item-selector";
        //回调函数，将选择的subItem字符串转为object回调给父组件 
        this.props.changeItem(JSON.parse(currentSelector.getAttribute("data")));
    };
    render() {
        //遍历数据源，生成DOM树
        if(this.props.data){
            var dataSource = this.props.data.map(function (item,index) {
                return (
                    <li key={index*10} className="menu-items">
                        <div className="menu-item" onClick={this.handleItemClick}>
                            <img src="http://192.168.1.52:60007/static/new/img/duanxinguanli.png" alt="img" className="item-icon" />
                            {item.name}
                            <img src="http://192.168.1.52:60007/static/new/img/xiala.png" alt="123" className="item-more" />
                        </div>
                        <ol className="sub-items">
                            {item.sub.map(function (subItem,subindex) {
                                return <li data={JSON.stringify(subItem)} key={subItem.title} className="sub-item" onClick={this.handleSubItemClick}>{subItem.title}</li>
                            },this)}
                        </ol>
                    </li>
                )
            },this);
        }
        return (
            <div className="main-menu">
                <div className="main-menu-home" onClick={this.handleHome}>
                    <svg className="home-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M426.666667 853.333333l0-256 170.666667 0 0 256 213.333333 0 0-341.333333 128 0-426.666667-384-426.666667 384 128 0 0 341.333333z" ></path>
                    </svg>
                    <span>
                        首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页
                    </span>
                </div>
                <ol>
                    {dataSource}
                </ol>
            </div>
        );
    }
}

export {MainMenu};