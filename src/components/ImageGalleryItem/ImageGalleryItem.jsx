import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

import { ImageItem, GalleryImage } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <ImageItem>
      <GalleryImage
        onClick={toggleModal}
        src={src}
        alt={alt}
      />
      {showModal && (
        <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
      )}
    </ImageItem>
  );
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
};
