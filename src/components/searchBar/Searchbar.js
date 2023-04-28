import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarCont,
  Form,
  Button,
  Label,
  QueryInput,
} from './Searchbar.styled';

class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.getImages(e.target.form.elements.query.value);
  };

  render() {
    return (
      <SearchbarCont>
        <Form>
          <Button type="submit" onClick={this.handleSubmit}>
            <Label>Search</Label>
          </Button>

          <QueryInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </SearchbarCont>
    );
  }
}

Searchbar.propTypes = {
  getImages: PropTypes.func.isRequired,
};

export default Searchbar;
