
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Header } from '../common/Header'
import { SearchForm } from '../common/SearchForm'
import { MovieElement } from '../common/MovieElement'

export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      resultsMovie: [],
      searchByForm: 0
    }

    this.getResults = this.getResults.bind(this)
    this.renderMovies = this.renderMovies.bind(this)

  }

  getResults (results, isSearch) {
    const searchTitle = (isSearch) ? 1 : 0
    this.setState({resultsMovie : results, searchByForm: searchTitle})
  }

  renderMovies() {

    const { resultsMovie } = this.state

    return resultsMovie.map(movie => {
      return <MovieElement 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imagesrc={movie.poster_path} 
                />
    })
  }  

  render () {

    const { resultsMovie, searchByForm } = this.state

    return (
      <div className='wrapper'>
        <Header>RedPoints MovieSearch</Header>
        <SearchForm onResults={this.getResults} />

        <div className='wrapper-movies'>

          { (resultsMovie.length !== 0 && searchByForm !==0 ) ?
              <h2>Your search</h2>
            : 
              <h2>Popular Movies</h2>
          }

          { (resultsMovie.length === 0 && searchByForm !==0 ) ?
              <p className='errorMessage'>No movies for your search</p>
            :
            this.renderMovies()
          }

        </div>
      </div>
    );
  }
  
}
