import 'lib-flexible';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About';
import TodayAllTransactions from './TodayAllTransactions';
import HistoricalMessage from './HistoricalMessage';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
	(
		<Router history={browserHistory}>
			<Route path="/" component={App} >
			</Route>
			<Route path="/TodayAllTransactions" component={TodayAllTransactions} />
			<Route path="/HistoricalMessage" component={HistoricalMessage} />
			<Route path="/about" component={About} />
			
		</Router>
	),
	document.getElementById('root')
);

