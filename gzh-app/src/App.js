import React, { Component } from 'react';
import InvestmentObjectives from './Components/InvestmentObjectives';
import TradingDynamics from './Components/TradingDynamics';

class App extends Component {
  render() {
    return (
		<div className="App">
			<InvestmentObjectives/>
			<TradingDynamics/>
		</div>
    );
  }
}

export default App;
