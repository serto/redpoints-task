
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const EMPTY_SUGGESTS = []

export default class Suggest extends Component {

  constructor(props){
    super(props);

    this.state = {
      suggests: EMPTY_SUGGESTS,
    }

    this.getMovieTitle = this.getMovieTitle.bind(this)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.list === prevState.suggests) {
      return null;
    }
    return {
      suggests: nextProps.list
    }
  }

  getMovieTitle(item) {
    const suggestsSelected = item.target.attributes.getNamedItem('value').value
    this.props.onSelectSuggest(suggestsSelected);
  }

  render () {

    const { suggests } = this.state
    const listSuggest = suggests.map(suggest => 
      <li 
        key={suggest.id}
        value={suggest.title}
        onClick={this.getMovieTitle}
        >
        {suggest.title}
      </li>
    )

    return (
      <ul className='suggestsList'>
        {listSuggest}
      </ul>
      
    )
  }
}