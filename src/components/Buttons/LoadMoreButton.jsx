import { animateScroll } from 'react-scroll';
import PropTypes from 'prop-types';

import { LoadMoreBtn } from './LoadMoreButton.styled';

export default function LoadMoreButton({ onClick }) {
  const scroll = () => {
    onClick();
    animateScroll.scrollToBottom();
  };

  return (
    <LoadMoreBtn onClick={scroll}>
      Load more
    </LoadMoreBtn>
  );
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};