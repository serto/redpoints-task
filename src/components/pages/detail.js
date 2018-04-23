
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Link } from 'react-router-dom'

import { Header } from '../common/Header'

const API_KEY = '892376643df7e1fd6dc72567108ec2e5'

export default class Detail extends Component {

  constructor(props){
    super(props);

    this.state = {
      movieInfo: {}
    }

  }

  componentDidMount() {
    const { id } = this.props.match.params
    
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        this.setState({movieInfo: response})
      })
  }

  render () {

    const { title, 
      overview, 
      poster_path,
      vote_average,
      homepage
      } = this.state.movieInfo

    const url_image = (poster_path) ? 
                    `https://image.tmdb.org/t/p/w500${poster_path}`
                    :
                    '/img/not-image.jpg'  

    return (
      <div className='wrapper'>
        <Header>RedPoints MovieSearch</Header>
        <h2>DETAIL PAGE: {title}</h2>

        <div className='detailMovie'>
          
          <div className='detailMovie-image'>
            <img src={url_image} alt={title} title={title} />
          </div>

          <div className='detailMovie-content'>
            <p><strong>Argument:</strong> {overview}</p>
            <p><strong>Rate :</strong> {vote_average}</p>
            { homepage && <a href={homepage}>Official Site</a> }
          </div>

        </div>

        <span className='centerBack'>
          <Link to="/">Back to home</Link>
        </span>

      </div>
    );
  }

}
