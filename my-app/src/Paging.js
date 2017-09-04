import React, {Component} from 'react';
import './Paging.css'
var currentPaging = 1;
class Paging extends Component {
    render() {
        return (
            <div className="paging-bg">
                1&nbsp;-&nbsp;20条，共286条，页数&nbsp;<input className="current-num" type="text"/>&nbsp;<p className="previous-page page">上一页></p>&nbsp;<p
                className="next-page page">下一页></p>&nbsp;<p className="last-page page">尾页>></p>
            </div>
        );
    }
}

export default Paging;