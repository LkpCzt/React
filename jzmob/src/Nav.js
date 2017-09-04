import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
      	<div className="Nav-title font18">
      		{this.props.item}
      	</div>
      </div>
    );
  }
}

export default Nav;
