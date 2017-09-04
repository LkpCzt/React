import React, {Component} from 'react';
import Card from './../Card';
// import InputBox from './../InputBox';
// import InputSelector from './../InputSelector';
// import InputDate from './../InputDate';
// import { Button } from 'antd';
// import { DatePicker } from 'antd';
// import DTable from './../DTable';

// const { MonthPicker, RangePicker } = DatePicker;
// function onChange(date, dateString) {
//     console.log(date, dateString);
// }

var data = [
    {
        "icon":"http://192.168.1.52:60007/static/new/img/tianjia.png",
        "num":"0",
        "color":"#27a9e3",
        "unit":"个",
        "description":"新增注册会员"
    },
    {
        "icon":"http://192.168.1.52:60007/static/new/img/dxts.png",
        "num":"31415926",
        "color":"#28b779",
        "unit":"条",
        "description":"客户剩余条数"
    },
    {
        "icon":"http://192.168.1.52:60007/static/new/img/jinzhang.png",
        "num":"0",
        "color":"#852b99",
        "unit":"元",
        "description":"今日在线充值"
    },
    {
        "icon":"http://192.168.1.52:60007/static/new/img/goumai.png",
        "num":"0",
        "color":"#ffb848",
        "unit":"条",
        "description":"今日客户购买条数"
    }
];
class Home extends Component {

    render() {
        var cards = data.map(function (item,index) {
            return <Card key={index} source={item} />
        });
        return(
            <div className="home">
                <div className="cards">
                    {cards}
                </div>
                <div className="home-title">
                    发送统计
                    <a href="#">客户统计详情>></a>&nbsp;&nbsp;
                    <a href="#">通道统计详情>></a>
                </div>
                <table className="home-table">
                    <tbody>
                    <tr>
                        <th rowSpan="2">时间</th>
                        <th rowSpan="2">发送号码数</th>
                        <th rowSpan="2">消费计费条数</th>
                        <th rowSpan="2">结算计费条数</th>

                        <th colSpan="3">移动</th>
                        <th colSpan="3">联通</th>
                        <th colSpan="3">电信</th>
                    </tr>
                    <tr>
                        <th>成功</th>
                        <th>失败</th>
                        <th>未知</th>

                        <th>成功</th>
                        <th>失败</th>
                        <th>未知</th>

                        <th>成功</th>
                        <th>失败</th>
                        <th>未知</th>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                        <td>10</td>
                    </tr>
                    </tbody>
                </table>
                {/*<InputBox/>*/}
                {/*<InputBox/>*/}
                {/*<InputSelector/>*/}
                {/*<InputDate/>*/}
                {/*<Button type="primary">Button</Button>*/}
                {/*<RangePicker onChange={onChange} />*/}
                {/*<DTable />*/}
            </div>
        );
    }
}

export default Home;