import React, { Component } from 'react';
import { AppCont } from './App.styled';
import Searchbar from './searchBar/Searchbar';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';
import GlobalStyles from './GlobalStyles';

const API_KEY = '35766435-c5070ad0581a4f1b9db4321cb';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    showModal: null,
  };

  loadMore = () => {
    this.setState(
      prevState => ({
        page: prevState.page + 1,
      }),
      () => {
        this.getImages(this.state.searchQuery);
      }
    );
  };

  getImages = async query => {
    let showPage = this.state.page;
    if (this.state.searchQuery !== query) {
      this.setState({ images: [], page: 1 });
      showPage = 1;
    }
    this.setState({ loading: true, searchQuery: query });
    const response = await fetch(
      `https://pixabay.com/api/?q=${query}&page=${showPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
      {}
    );
    const resObject = await response.json();
    this.setState(prevState => ({
      images: [...prevState.images, ...resObject.hits],
      loading: false,
    }));
  };

  showModal = id => {
    this.setState({ showModal: id });
  };

  hideModal = () => {
    this.setState({ showModal: null });
  };

  render() {
    const showMore = this.state.images.length > 0;
    let showImage = null;
    if (this.state.showModal) {
      showImage = this.state.images.filter(
        image => image.id === this.state.showModal
      )[0];
    }

    return (
      <AppCont>
        <Searchbar getImages={this.getImages} />
        <ImageGallery showModal={this.showModal} images={this.state.images} />
        {showMore && <Button loadMore={this.loadMore} />}
        {this.state.loading && <Loader />}
        {this.state.showModal && (
          <Modal hideModal={this.hideModal} image={showImage} />
        )}
        <GlobalStyles />
      </AppCont>
    );
  }
}

export default App;
