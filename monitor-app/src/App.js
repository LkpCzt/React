import React, { Component } from 'react';
import {DailySMS} from './DailySMS';
import {LineChart} from './LineChart';
import {Details} from './Details';
import {MinuteSMS} from './MinuteSMS';
import {HourSMS} from './HourSMS';
import {Map} from './Map';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="left">
          <DailySMS />
          <MinuteSMS />
          <HourSMS />
        </div>
        <div className="center">
          <LineChart />
          <Map />
        </div>
        <div className="right">
          <Details />
        </div>
      </div>
    );
  }
}

export {App};
