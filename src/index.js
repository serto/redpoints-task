import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home'
import Detail from './components/pages/Detail'

import './scss/main.scss';

class RedPointsTask extends Component {
  render() {
  
    return(
        <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail' component={Detail} />
        </Switch>
        </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <RedPointsTask />,
    document.getElementById('app')
);
