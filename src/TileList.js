import React, { Component } from 'react';
import axios from 'axios';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tile from './Tile';
import Carousel from './Carousel';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
    this.startCarousel = -1;
  }

  componentWillMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=87dfa1c669eea853da609d4968d294be&include_video=true&page=1&year=2017&sort_by=popularity.desc',
      )
      .then((response) => {
        const data = response.data.results;
        const movies = this.renderMovieTiles(data);
        this.setState({ movies });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  shiftRight() {
    const movies = this.state.movies;
    let start = 1;
    for (let i = this.startCarousel + 1; i < this.movies.length; ++i) {
      movies[i] = React.cloneElement(movies[i], { style: start++ });
    }
    for (let i = this.startCarousel; i >= 0; --i) {
      movies[i] = React.cloneElement(movies[i], { style: movies.length });
    }
  }

  renderMovieTiles(data) {
    let movies = [];
    if (data.length > 0) {
      const order = new Array(data.length);
      for (let i = 0; i < data.length; ++i) {
        order[i] = (i + 2) % data.length;
      }
      let i = -1;
      movies = data.map((movie) => {
        i += 1;
        return (
          <Tile
            key={movie.id}
            imgUrl={movie.backdrop_path}
            title={movie.title}
            style={{ order: order[i] }}
          />
        );
      });
      /*
      React.cloneElement(content[content.length - 1], {
        className: 'is-ref',
      });

      movies[movies.length - 1].props.style = { order: '1' };
      */
      this.startCarousel = movies.length - 1;
    }
    return movies;
  }

  render() {
    if (this.state.movies.length > 0) {
      return <Carousel>{this.state.movies}</Carousel>;
    }
    return <div />;
  }
}
export default TitleList;
