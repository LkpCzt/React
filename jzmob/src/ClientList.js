import React, {
    Component
} from 'react';
import ClientListCell from './ClientListCell';
import AlloyTouch from './alloy_touch.css';
import Transform from './transform';
import Request from './Request';
import './ClientList.css';
let list, mockHTML, scroller, loading, alloyTouch, content;
let current = 1;
let once = false;

class ClientList extends Component {
    constructor() {
        super();
        this.loadMore = this.loadMore.bind(this);
        this.refresh = this.refresh.bind(this);
        this.reastMin = this.reastMin.bind(this);
        this.request = this.request.bind(this);
        this.success = this.success.bind(this);
        this.fail = this.fail.bind(this);
        this.Configuration = this.Configuration.bind(this);
        this.state = ({
            data: []
        })
    }
    componentWillUnmount(){
        document.removeEventListener("touchmove", function(evt) {
            evt.preventDefault();
        }, false);
    }
    componentDidMount() {
        let self = this;
        let request = new Request();
        let params = {
            pagenum: current,
            pagesize: 15
        };
        console.log(params);
        request.send('customer/customerList.do', 'POST', params, function(res) {
	        self.setState({
	            data: res.tableData.data
	        },function () {
                self.Configuration();
            });
        }, function(err) {
            // console.log(err);
            console.log('网络请求失败:'+ err);
        });
    }
    Configuration(){
        let self = this;
        let oldV = '';
    	current += 1;
        list = document.getElementById('clientList');
        mockHTML = list.innerHTML;
        scroller = document.getElementById('scroller');
        content = document.getElementById('wrapper');
        loading = false;
        alloyTouch = null;
        Transform(scroller, true);
        let min = 0;
        let scrren = document.body.clientWidth / 10;
        if (content.offsetHeight > 1.96 * scrren * self.state.data.length) {
            min = 0;
        } else {
            min = -1.96 * scrren * self.state.data.length + content.offsetHeight - 0.2 * scrren;
        }
        // console.log(min);
        alloyTouch = new AlloyTouch({
            touch: "#wrapper",
            vertical: true,
            target: scroller,
            property: "translateY",
            maxSpeed: 2,
            outFactor: 0.2,
            min: min,
            max: 0,
            touchStart: function () {
                self.reastMin();
            },
            lockDirection: false,
            change: function(v) {
                // console.log(v);
                // console.log(this.min+30);
            	if (v <= this.min + 2 * scrren && !loading) {
                    loading = true;
                    self.loadMore();
                }
                if (v > scrren && !loading) {
                    loading = true;
                    current = 1;
                    self.refresh();

                }
            }
        })
        document.addEventListener("touchmove", function(evt) {
            evt.preventDefault();
        }, false);
    }
    request() {
        let self = this;
        let request = new Request();
        let params = {
            pagenum: current,
            pagesize: 15
        };
        console.log(params);
        request.send('customer/customerList.do', 'POST', params, this.success, this.fail);
    }
    success(res){
        let self = this;
        if (current === 1) {
            this.setState({
                data: res.tableData.data
            },function () {
                loading = false;
                self.reastMin();
            })
        }else{
            current += 1;
            let data = self.state.data;
            data.push.apply(data, res.tableData.data);
            // console.log(data);
            self.setState({
                data: data
            },function () {
                loading = false;
                self.reastMin();
            });
        }
    }
    fail(err){

    }
    refresh(){
        let self = this;
        setTimeout(function () {
            self.request();
        },500);
    }
    loadMore() {
        let self = this;
        setTimeout(function() {
        	console.log('加载数据');
            self.request();
        }, 500);
    }

    reastMin() {
        if (content.offsetHeight >= parseInt(getComputedStyle(scroller).height)) {
            alloyTouch.min = 0;
            // console.log('1');
        } else {
        	// console.log('2');
            // console.log(parseInt(getComputedStyle(scroller).height));
            // console.log(content.offsetHeight);
            let scrren = document.body.clientWidth / 10;
            alloyTouch.min = -1 * parseInt(getComputedStyle(scroller).height) + content.offsetHeight;
        }
    }
    render() {
        // console.log(this.state.data);
        return ( 
            <div id = "scroller">
                <div className="loading-refresh font15"> 释放刷新... < /div> 
                <ul className = "ClientList" id = "clientList" > 
                {
                    this.state.data.map(function(elem, index) {
                        return <ClientListCell key={index} data={elem} />;
                    })
                } 
                </ul> 
                <div className="loading-more font15"> 正在加载中， 请稍后... < /div> 
            </div>
        );
    }
}

export default ClientList;