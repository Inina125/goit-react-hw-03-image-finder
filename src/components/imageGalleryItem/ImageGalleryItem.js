import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  render() {
    return (
      <GalleryItem onClick={() => this.props.showModal(this.props.image.id)}>
        <GalleryImage src={this.props.image.webformatURL} alt="" />
      </GalleryItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;
