import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

class HomePage extends React.Component {
  onClickBtn = () => {
    const { getProducts,
      searchInput,
      selectedCategory } = this.props;
    const searchOnly = searchInput !== '' && selectedCategory === '';
    const categoryOnly = searchInput === '' && selectedCategory !== '';
    // const none = searchInput === '' && selectedCategory === '';
    const both = searchInput !== '' && selectedCategory !== '';
    getProducts(false, false);
    if (searchOnly) {
      getProducts(false, searchInput);
    }
    if (categoryOnly) {
      getProducts(selectedCategory, false);
    }
    if (both) {
      getProducts(selectedCategory, searchInput);
    }
  }

  checkInputTxt = () => {
    const { searchInput, selectedCategory } = this.props;
    const ZERO = 0;
    const test = searchInput.length > ZERO || selectedCategory.length > ZERO;
    if (test) {
      return (
        ''
      );
    }
    return (
      <h2
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h2>
    );
  }

  render() {
    const { handleChange, products } = this.props;
    return (
      <section
        className="homePage-main"
      >
        <label
          htmlFor="homePageInput"
        >
          <input
            name="searchInput"
            type="text"
            id="homePageInput"
            placeholder="Pesquisar..."
            data-testid="query-input"
            onChange={ handleChange }
          />
        </label>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.onClickBtn }
        >
          Pesquisar
        </button>
        { this.checkInputTxt() }
        { products.results.map((product) => (
          <Card
            key={ product.id }
            product={ product }
          />
        ))}
      </section>
    );
  }
}

HomePage.propTypes = {
  searchInput: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  products: PropTypes.shape({
    results: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default HomePage;
