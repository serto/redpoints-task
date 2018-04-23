import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './scss/main.scss';

class AppBoilerplate extends Component {
  render() {
  
    return(
      <p>NEW BOILERPLATE</p>
    );
  }
}

ReactDOM.render(
  <AppBoilerplate />,
	document.getElementById('app')
);
