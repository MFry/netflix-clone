import React, { Component } from 'react';
import Axios from 'axios';

class TitleList extends Component {
  constructor(props) {
    super(props);
    Axios.get(
      'https://api.themoviedb.org/3/discover/movie?api_key=87dfa1c669eea853da609d4968d294be&page=1&sort_by=popularity.desc',
    )
      .then((response) => {
        this.data = response.data;
      })
      .catch((error) => {
        this.data = {};
        console.log(error);
      });
  }

  render() {
    return <div>{this.data}</div>;
  }
}
