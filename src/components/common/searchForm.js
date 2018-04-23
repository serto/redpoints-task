
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const API_KEY = '892376643df7e1fd6dc72567108ec2e5'

export class SearchForm extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSelect = this.handleSelect.bind(this)

  }

  componentWillMount(){
    const isSearch = false
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(res => res.json())
      .then(response => {
        const { results } = response
        this.props.onResults(results, isSearch)
      })
  }

  handleChange (e) {
    this.setState({ inputMovie: e.target.value })
  }

  handleSelect (e) {
    e.preventDefault()

    const { inputMovie } = this.state
    const isSearch = true

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputMovie}`)
      .then(res => res.json())
      .then(response => {
        const { results } = response
        this.props.onResults(results, isSearch)
      })
  }  


  render () {
    return (
      
      <div className='searchForm'>
          
        <form onSubmit={this.handleSelect}>
          <input 
            type="text"
            onChange={this.handleChange}
            placeholder="star wars, lord of the rings ... " />

          <button>Search</button>
        </form>
      
      </div>

    )
  }
}