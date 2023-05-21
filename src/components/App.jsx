import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from 'react-scroll-to-top';
import { animateScroll } from 'react-scroll';

import pixabayApi from 'components/pixabay-api';

import ErrorMessage from 'components/ErrorMessage/ErrorMessage';
import { Loader } from 'components/Loader/Loader';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import LoadMoreButton from 'components/Buttons/LoadMoreButton';
import Searchbar from 'components/Searchbar/Searchbar';

const Status = {
  IDLE: 'idle',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const [requestKey, setRequestKey] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = newRequestKey => {
    if (newRequestKey === requestKey) {
      return;
    }
    setRequestKey(newRequestKey);
    setPage(1);
    setImages([]);
    setLoading(true);
  };

  useEffect(() => {
    if (!requestKey) {
      return;
    }

    setLoading(true);

    const renderImages = () => {

      pixabayApi
        .fetchImages(requestKey, page)
        .then(images => setImages(prevState => [...prevState, ...images]))
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED)
        })
        .finally(setTimeout(() => { setStatus(Status.RESOLVED); setLoading(false); }, 500)
        );
    };

    renderImages();
    animateScroll.scrollToBottom();
  }, [requestKey, page]);

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
    setLoading(true);
  };

  return (
    <>
      <ScrollToTop smooth color="#1a9c00" />
      <Searchbar onSubmit={handleFormSubmit}></Searchbar>
      <ToastContainer autoClose={2000} />

      {loading && page === 1 ? <Loader /> : null}

      {status === Status.REJECTED && <ErrorMessage message={error.message} />}

      {status === Status.RESOLVED && (
        <>
          <ImageGallery images={images} />
          {loading && page >= 2 ? <Loader /> : null}

          {images.length > 0 && page > 0 ? <LoadMoreButton onClick={onLoadMore} /> : null}
        </>
      )}
    </>
  );
}

App.propTypes = {
  requestKey: PropTypes.string,
  page: PropTypes.number,
  images: PropTypes.array,
};
