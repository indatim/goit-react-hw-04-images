import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';

import pixabayApi from 'components/pixabay-api';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import Loader from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/Buttons/LoadMoreButton';
import Searchbar from 'components/Searchbar/Searchbar';

const Status = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class App extends Component {
  state = {
    error: null,
    status: 'IDLE',
    requestKey: '',
    page: 1,
    images: [],
    loading: false,
  };

  handleFormSubmit = newRequestKey => {
    this.setState({ requestKey: newRequestKey, page: 1, images: [] });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.requestKey;
    const nextName = this.state.requestKey;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      this.renderImages();
    }
  }

  renderImages = () => {
    const { requestKey, page } = this.state;

    pixabayApi
      .fetchImages(requestKey, page)
      .then(response =>
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          page: prevState.page + 1,
        }))
      )
      .catch(error => this.setState({ error, status: Status.REJECTED }))
      .finally(() =>
        this.setState({ status: Status.RESOLVED, loading: false })
      );
  };

  render() {
    const { status, error, loading, images } = this.state;

    return (
      <>
        <ScrollToTop smooth color="#1a9c00" />
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ToastContainer autoClose={2000} />

        {loading && <Loader />}

        {status === Status.REJECTED && <ErrorMessage message={error.message} />}

        {status === Status.RESOLVED && (
          <>
            <ImageGallery images={this.state.images} />
            {images.length >= 12 && (
              <LoadMoreButton onClick={this.renderImages} />
            )}
          </>
        )}
      </>
    );
  }
}

export default App;
