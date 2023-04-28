import React, { Component } from 'react';
import { ModalOverlay, ModalCont, ModalImage } from './Modal.styled';
import PropTypes from 'prop-types';

class Modal extends Component {
  render() {
    console.log(this.props.image);

    return (
      <ModalOverlay onClick={() => this.props.hideModal()}>
        <ModalCont>
          <ModalImage src={this.props.image.largeImageURL} alt="" />
        </ModalCont>
      </ModalOverlay>
    );
  }
}

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
