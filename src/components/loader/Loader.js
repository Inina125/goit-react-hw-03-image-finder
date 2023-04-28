import React, { Component } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { LoaderCont } from './Loader.styled';

class Loader extends Component {
  render() {
    return (
      <LoaderCont>
        <ClipLoader
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </LoaderCont>
    );
  }
}

export default Loader;
