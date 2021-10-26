import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class HomePages extends React.Component {
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
