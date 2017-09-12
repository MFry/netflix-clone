import React, { Component } from 'react';
import axios from 'axios';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Tile from './Tile';
import Carousel from './Carousel';

class TitleList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentWillMount() {
    axios
      .get(
        'https://api.themoviedb.org/3/discover/movie?api_key=87dfa1c669eea853da609d4968d294be&include_video=true&page=1&year=2017&sort_by=popularity.desc',
      )
      .then((response) => {
        const data = response.data.results;
        this.setState({ data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const data = this.state.data;
    if (data.length > 0) {
      const content = data.map(movie => (
        <Tile key={movie.id} imgUrl={movie.backdrop_path} title={movie.title} />
      ));
      content[content.length - 1] = React.cloneElement(content[content.length - 1], {
        className: 'is-ref',
      });
      return <Carousel>{content}</Carousel>;
    }
    return <div />;
  }
}
export default TitleList;
