import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { SearchbarContainer, SearchForm, SeacrhFormInput, SearchFormBtn, SearchFormLabel, StyledFaSearch } from './SearchBar.styled';

class Searchbar extends Component {
  state = {
    requestKey: '',
  }

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleRequestChange = event => {
    this.setState({ requestKey: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.requestKey.trim() === '') {
      toast.warn('Please enter something in the field.');
      return;
    }

    this.props.onSubmit(this.state.requestKey);
    this.setState({ requestKey: '' });
  };

  render() {
    return (
      <SearchbarContainer>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn><StyledFaSearch/>
            <SearchFormLabel>Search</SearchFormLabel>
          </SearchFormBtn>
           <SeacrhFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.requestKey}
            onChange={this.handleRequestChange}
            />
        </SearchForm>
      </SearchbarContainer>
    )
  }
}

export default Searchbar;