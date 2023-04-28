import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

class Button extends Component {
  render() {
    return <LoadButton onClick={this.props.loadMore}>Load More</LoadButton>;
  }
}

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export default Button;
