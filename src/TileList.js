import React, { Component } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tile from './Tile';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.data = [];
    // Move this
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=87dfa1c669eea853da609d4968d294be&include_video=true&page=1&year=2017&sort_by=popularity.desc',
      )
      .then((response) => {
        this.data = response.data.results;
      })
      .catch((error) => {
        this.data = {};
        console.log(error);
      });
  }

  render() {
    let content = '';
    if (this.data) {
      content = this.data.map(movie => <Tile imgUrl={movie.backdrop_path} title={movie.title} />);
    }

    return (
      <Carousel axis="horizontal" howArrows dynamicHeight emulateTouch>
        {content}
      </Carousel>
    );
  }
}
export default TitleList;
