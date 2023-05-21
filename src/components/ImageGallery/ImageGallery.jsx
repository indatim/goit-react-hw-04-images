import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryContainer } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <ImageGalleryContainer>
      {images.map(({webformatURL, tags, largeImageURL, id}) => (
        <ImageGalleryItem
          src={webformatURL}
          alt={tags}
          largeImageUrl={largeImageURL}
          key={id}
        />
      ))}
    </ImageGalleryContainer>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};