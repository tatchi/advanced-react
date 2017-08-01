import React, { Component } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };
  doSearch = debounce(() => {
    this.props.doSearch(this.state.searchTerm);
  }, 300);
  handleSearch = (event) => {
    this.setState(
      {
        searchTerm: event.target.value,
      },
      () => this.doSearch(),
    );
  };
  render() {
    return (
      <input type="search" placeholder="Enter search term" onChange={this.handleSearch} value={this.state.searchTerm} />
    );
  }
}

SearchBar.propTypes = {};

export default SearchBar;
