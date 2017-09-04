import React,{Component} from 'react';
import {Nav} from './Nav';
import {MainMenu} from './MainMenu';
// import Paging from './Paging'
// import TableItem from './TableItem'
// import DTable from "./DTable";
import Card from './Card';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Nav/>
                <MainMenu />
                {/*<Paging />*/}
                {/*<TableItem />*/}
                {/*<DTable />*/}
            </div>
        )
    }
}

export {Home};