import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Category from '../components/Category';

class HomePage extends React.Component {
  render() {
    const { products,
      handleChange,
      onClickSearchBtn,
      categories,
      setCategories,
      setProductsFromCategory,
      setProductToCart } = this.props;
    return (
      <section
        className="homePage-main"
      >
        <Category
          setCategories={ setCategories }
          categories={ categories }
          setProductsFromCategory={ setProductsFromCategory }
          handleChange={ handleChange }
        />
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
        { products.map((product) => (
          <Card
            key={ product.id }
            product={ product }
            setProductToCart={ setProductToCart }
          />
        )) }
      </section>
    );
  }
}

HomePage.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
  onClickSearchBtn: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCategories: PropTypes.func.isRequired,
  setProductsFromCategory: PropTypes.func.isRequired,
  setProductToCart: PropTypes.func,
};

HomePage.defaultProps = {
  setProductToCart: () => {},
};

export default HomePage;
