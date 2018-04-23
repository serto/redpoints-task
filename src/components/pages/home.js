
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Header } from '../common/Header'

export default class Home extends Component {

  constructor(props){
    super(props);
  }

  render () {

    return (
      <div className='wrapper'>
        <Header>RedPoints MovieSearch</Header>
      </div>
    );
  }
  
}
