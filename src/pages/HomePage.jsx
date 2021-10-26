import PropTypes from 'prop-types';
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
    const { products,
      handleChange,
      onClickSearchBtn } = this.props;
    return (
      <section
        className="homePage-main"
      >
        <label
          htmlFor="homePageInput"
        >
          <input
            data-testid="query-input"
            type="text"
            id="homePageInput"
            name="query"
            placeholder="Pesquisar..."
            onChange={ handleChange }
          />
        </label>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <button
          type="button"
          data-testid="query-button"
          onClick={ onClickSearchBtn }
        >
          Pesquisar
        </button>
        { products.length === 0 && (
          <h2
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        )}
        { products.map((product) => {
          const { id, thumbnail, title, price } = product;
          return (
            <div key={ id } data-testid="product">
              <h4>{title}</h4>
              <img src={ thumbnail } alt={ title } />
              <p>{price}</p>
            </div>
          );
        }) }
      </section>
    );
  }
}

HomePages.propTypes = {
  handleChange: PropTypes.func.isRequired,
  onClickSearchBtn: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePages;
