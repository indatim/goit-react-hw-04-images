import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';

import { SearchbarContainer, SearchForm, SeacrhFormInput, SearchFormBtn, SearchFormLabel, StyledFaSearch } from './SearchBar.styled';

export default function Searchbar({ onSubmit }) {
  const [requestKey, setRequestKey] = useState('');

  const handleRequestChange = e => {
    setRequestKey(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (requestKey.trim() === '') {
      toast.warn('Please enter something in the field.');
      return;
    }

    onSubmit(requestKey);
    setRequestKey('');
  };

  return (
    <SearchbarContainer>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn><StyledFaSearch />
          <SearchFormLabel>Search</SearchFormLabel>
        </SearchFormBtn>
        <SeacrhFormInput
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={requestKey}
          onChange={handleRequestChange}
        />
      </SearchForm>
    </SearchbarContainer>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};