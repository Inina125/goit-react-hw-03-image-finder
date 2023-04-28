import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

class ImageGallery extends Component {
  render() {
    return (
      <Gallery className="gallery">
        {this.props.images.map(image => (
          <ImageGalleryItem
            showModal={this.props.showModal}
            key={image.id}
            image={image}
          />
        ))}
      </Gallery>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
