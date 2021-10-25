import React from 'react';
import { Link } from 'react-router-dom';

class HomePages extends React.Component {
  render() {
    return (
      <section
        className="homePage-main"
      >
        <label
          htmlFor="homePageInput"
        >
          <input
            type="text"
            id="homePageInput"
            placeholder="Pesquisar..."
          />
        </label>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <button
          type="button"
        >
          Pesquisar
        </button>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

export default HomePages;
