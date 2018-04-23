
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Header } from '../common/Header'

export default class Detail extends Component {

  constructor(props){
    super(props);
  }

  render () {

    const { id } = this.props.match.params

    return (
      <div className='wrapper'>
        <Header>RedPoints MovieSearch</Header>
        <p>ID of the movie {id}</p>
      </div>
    );
  }

}
