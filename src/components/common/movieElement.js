import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export class MovieElement extends Component {

 constructor(props){
    super(props);
  }

  render () {

    const { title, imagesrc, id} = this.props
    
    return (

      <div className='movieElement'>
        <img src={`https://image.tmdb.org/t/p/w500${imagesrc}`} />
        <h3>{title}</h3>
      </div>
      
    )
  }
}