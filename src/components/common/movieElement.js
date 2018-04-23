import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import { Link } from 'react-router-dom'

export class MovieElement extends Component {

 constructor(props){
    super(props);
  }

  render () {

    const { title, imagesrc, id} = this.props
    
    const url_image = (imagesrc) ? 
                      `https://image.tmdb.org/t/p/w500${imagesrc}`
                      :
                      '/img/not-image.jpg'
    return (

      <div className='movieElement'>
        <Link to={`detail/${id}`}>
          <img src={url_image} alt={title} title={title} />
          <h3>{title}</h3>
        </Link>
      </div>
      
    )
  }
}