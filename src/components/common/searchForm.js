
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Suggest from './Suggests'

const API_KEY = '892376643df7e1fd6dc72567108ec2e5'

const EMPTY_SUGGESTS = []

export class SearchForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      suggestValues: EMPTY_SUGGESTS
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.handleChangeSuggest = this.handleChangeSuggest.bind(this)

  }

  componentWillMount(){
    const isSearch = false
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(response => {
        const { results } = response
        this.props.onResults(results, isSearch)
      })
      .catch(function() {
        console.log("error in search");
      })
  }

  handleChange (e) {
    this.setState({ inputMovie: e.target.value })

    const inputMovie = e.target.value
    if(inputMovie) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}`)
        .then(res => res.json())
        .then(response => response.results.map(suggest => ({id: suggest.id, title: suggest.title}) ))
        .then(suggestValues => this.setState({ suggestValues: suggestValues }) )
        .catch(err => console.log(err))
      }else {
        this.setState({ suggestValues: EMPTY_SUGGESTS })
      }
  }

  handleSelect (e) {
    e.preventDefault()

    this.setState({
      suggestValues: EMPTY_SUGGESTS
    })

    const { inputMovie } = this.state
    const isSearch = true
    document.getElementById('searchForm-input').value = inputMovie

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}`)
      .then(res => res.json())
      .then(response => {
        const { results } = response
        this.props.onResults(results, isSearch)
      })
      .catch(function() {
        console.log("error in search");
      })
  }  

  handleChangeSuggest(selectedSuggest) {
    this.setState({ 
      inputMovie: selectedSuggest,
      suggestValues: EMPTY_SUGGESTS
    })
    const inputMovie = selectedSuggest
    const isSearch = true
    document.getElementById('searchForm-input').value = selectedSuggest

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}`)
      .then(res => res.json())
      .then(response => {
        const { results } = response
        this.props.onResults(results, isSearch)
      })
      .catch(function() {
        console.log("error in search");
      })
  }

  render () {

    const {inputValue, suggestValues} = this.state

    return (
      
      <div className='searchForm'>
          
        <form onSubmit={this.handleSelect}>
          <input 
            type="text"
            id="searchForm-input"
            onChange={this.handleChange}
            placeholder="star wars, lord of the rings ... " />

          { suggestValues.length>0 && <Suggest list={suggestValues} onSelectSuggest={this.handleChangeSuggest} /> }

          <button>Search</button>
        </form>
      
      </div>

    )
  }
}