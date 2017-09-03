import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }
  render() {
    return (
      <form onSubmit={this.onSubmit} id="search" className="Search">
        <input type="search" placeholder="Search for a title..." />
      </form>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Search;
