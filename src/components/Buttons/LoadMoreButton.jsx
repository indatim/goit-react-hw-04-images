import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';

import { LoadMoreBtn } from './LoadMoreButton.styled';

class LoadMoreButton extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number,
  };

  scroll = () => {
    this.props.onClick();
    scroll.scrollToBottom();
  };

  render() {
    return (
      <LoadMoreBtn onClick={this.scroll}>
        Load more
      </LoadMoreBtn>
    );
  }
}

export default LoadMoreButton;